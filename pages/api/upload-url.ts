import { Storage } from '@google-cloud/storage';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!process.env.PRIVATE_KEY) {
        res.status(500).json({ message: 'no env variables' });
        return;
    }
    const storage = new Storage({
        projectId: process.env.PROJECT_ID,
        credentials: {
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.split(String.raw`\n`).join('\n'),
        },
    });

    if (!process.env.BUCKET_NAME) {
        res.status(500).json({});
        return;
    }
    const bucket = storage.bucket(process.env.BUCKET_NAME);
    const file = bucket.file(req.query.file as string);
    const options = {
        expires: Date.now() + 1 * 60 * 1000, //  1 minute,
        fields: { 'x-goog-meta-test': 'data' },
    };

    const [response] = await file.generateSignedPostPolicyV4(options);
    res.status(200).json(response);
}