import { plantService } from "@/services/plantService";
import { useState } from "react";

type UploadStatus = 'idle' | 'error' | 'success' | 'uploading';

export const FileUploader = () => {
  const plantId = 3;
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const files: FileList = e.target.files;
    if (files) {
      setFile(files[0])
    }
  };

  const handleFileUpload = async () => {
    if (file) {
      setStatus('uploading');
      const formData = new FormData();
      formData.append("file", file);

      try {
        const plantImageResponse = await plantService.uploadPlantImage(plantId, true, formData);
        setStatus('success');
        console.log(plantImageResponse);
      } catch (e) {
        setStatus('error');
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <p>File name: {file.name}</p>
          <p>size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      )}
      {file && status !== 'uploading' && <button onClick={() => handleFileUpload()}>Upload</button>}
      {status === 'success' && <p>File uploaded successfully</p>}
      {status === 'error' && <p>Error in File uploading</p>}
    </div>
  );
}