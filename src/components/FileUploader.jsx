import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useCloudinaryUpload } from "../hooks/useCloudinaryUpload";
import { useState } from "react";
import icon from "../assets/download-icon.png";

const FileUploader = ({ id, fileUrl: f, onUploadComplete, className }) => {
  const [fileUrl, setFileUrl] = useState(f);
  const { upload, uploading, error } = useCloudinaryUpload();

  const onChange = async (e) => {
    const url = await upload(e.target.files[0]);
    setFileUrl(url);
    onUploadComplete?.(url);
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    const url = await upload(acceptedFiles[0]);
    setFileUrl(url);
    onUploadComplete?.(url);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`file-uploader ${className || ""} ${fileUrl ? "uploaded" : ""}`}
    >

     {fileUrl &&  <img src={fileUrl}  />}

      {error ? (
        <span>{error}</span>
      ) : uploading ? (
        <span>Uploading...</span>
      ) : (
        <>
          <span>
            <img src={icon} alt="" width={26} height={18} />
            <div>
              {" "}
              {isDragActive
                ? "Drop file here"
                : "Drag & drop or click to upload"}
            </div>
          </span>
          <input {...getInputProps()} onChange={onChange} id={id} type="file" />
        </>
      )}
    </div>
  );
};

export default FileUploader;
