export const uploadImage = async (file: File) => {
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