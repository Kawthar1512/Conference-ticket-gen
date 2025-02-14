import { useState } from "react"

const cloudName = "bitstack"

export const useCloudinaryUpload = () => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState()

    const upload = async (file) => {
        setUploading(true)
        try {
            const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "unsigned-uploads")
            const res = await fetch(url, { method: "POST", body: formData });
            const image = await res.json();
            return image.url;
        } catch (e) {
            setError(`Upload failed: ${e.message}`)
        } finally {
            setUploading(false)
        }
    }

    return { upload, uploading, error }
}