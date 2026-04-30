import { useState } from 'react';

import { plantService } from '@/services/plantService';

import styles from './FileUploader.module.scss';

type UploadStatus = 'idle' | 'error' | 'success' | 'uploading';

export const FileUploader = () => {
  const plantId = 5;
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const files: FileList = e.target.files;
    if (files) {
      setFile(files[0])
    }
  };

  const handleFileUpload = async () => {
    if (file) {
      setStatus('uploading');
      setUploadProgress(0);
      const formData = new FormData();
      formData.append('file', file);

      try {
        const plantImageResponse = await plantService.uploadPlantImage({
          plantId,
          isSelected: false,
          formData,
          changePercentage: (percentage: number) => setUploadProgress(percentage),
        });
        setStatus('success');
        setUploadProgress(100);
        console.log(plantImageResponse);
      } catch (e) {
        console.log(e);
        setStatus('error');
        setUploadProgress(0);
      }
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <input type='file' onChange={handleFileChange} />
      <div className={styles.informationContainer}>
        {file && (
          <article className={styles.imageInformation}>
            <p><b>File name: </b>{file.name}</p>
            <p><b>Size: </b>{(file.size / 1024).toFixed(2)} KB</p>
            <p><b>Type: </b>{file.type}</p>
          </article>
        )}
        {file && status !== 'uploading' && (
          <button
            className={styles.button}
            onClick={() => handleFileUpload()}
          >
              Upload File
          </button>
        )}
        {status === 'uploading' && (
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p>{uploadProgress}%</p>
          </div>
        )}
      </div>
      {status === 'success' && <p>File uploaded successfully</p>}
      {status === 'error' && <p>Error in File uploading</p>}
    </section>
  );
}