import { COMMAND_PRIORITY_LOW } from 'lexical';
import { FC, useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { DRAG_DROP_PASTE } from '@lexical/rich-text';
import { mediaFileReader } from '@lexical/utils';

import { INSERT_IMAGE_COMMAND } from '../../utils/InsertImageCommand';
import { uploadImage } from '../../utils/uploadImage';

const ACCEPTABLE_IMAGE_TYPES = [
    'image/',
    'image/heic',
    'image/heif',
    'image/gif',
    'image/webp',
];

const ClipboardImageHandler: FC = () => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        return editor.registerCommand(
            DRAG_DROP_PASTE,
            (files) => {
                (async () => {
                    const filesResult = await mediaFileReader(
                        files,
                        [ACCEPTABLE_IMAGE_TYPES].flatMap((x) => x),
                    );
                    for (const { file } of filesResult) {
                        const res = await uploadImage(file);
                        if (!res) {
                            console.error('upload failed');
                            continue;
                        }
                        editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
                            altText: file.name,
                            src: res.path,
                        });
                    }
                })();
                return true;
            },
            COMMAND_PRIORITY_LOW,
        );
    }, [editor]);
    return null;
};

export default ClipboardImageHandler;