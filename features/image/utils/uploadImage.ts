const uploadInProuction = (file: File) => {
    const reader = new FileReader();
    const promise = new Promise<string>((resolve, reject) => {
        reader.onload = function () {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            }
            return '';
        };
        if (file !== null) {
            reader.readAsDataURL(file);
        }
    });
    return promise;
};


export const uploadImage = async (file: File) => {
    if (process.env.NODE_ENV !== 'production') {
        return {
            path: await uploadInProuction(file)
        };
    }
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-url?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
        formData.append(key, value as string | Blob);
    });

    const upload = await fetch(url, {
        method: 'POST',
        body: formData,
    });

    if (upload.ok) {
        console.log('Uploaded successfully!');
    } else {
        console.error('Upload failed.');
    }

    return {
        path: `${url}${filename}`
    };
};