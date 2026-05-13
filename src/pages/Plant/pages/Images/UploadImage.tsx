import { useState } from 'react';
import { useParams } from 'react-router';

import { plantService } from '@/services/plantService';

import styles from './scss/UploadImage.module.scss';

export const UploadImage = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [isDraggingOver, setIsDraggingOver] = useState(false);

	const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsDraggingOver(true);
	}

	const handleDragAOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};
	
	const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		setIsDraggingOver(false);
		
	}

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsDraggingOver(false);
		
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
		const filesToUpload = event.target.files;
		setFiles(prevFiles => [...prevFiles, ...Array.from(filesToUpload)])
	}

	return (
		<div className={styles.uploadImageContainer}>
			<section
				className={`${styles.dropZone} ${isDraggingOver && styles.dropZoneOver}`}
				onDragEnter={handleDragEnter}
				onDragOver={handleDragAOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
			>
				<p className={styles.dragAndDropText}>Drag and Drop File or</p>
				<input
					className={styles.inputDropZone}
					id='file-input'
					type='file'
					multiple
					onChange={handleChange}
				/>
				<label className={styles.buttonUploadImage} htmlFor='file-input'>Browser Files</label>
			</section>
			<section className={styles.previewContainer}>
				{files.map((file, index) => (
					<article className={styles.previewInfo} key={index}>
						<img
							className={styles.previewImage}
							src={URL.createObjectURL(file)}
							alt={file.name}
						/>
						<div className={styles.previewInfoText}>
							<p>{file.name}</p>
							<span>{adjustSize(file.size)}</span>
						</div>
					</article>
				))}
			</section>
		</div>
	);
}

const adjustSize = (size: number) => {
	const unit = 1_024;
	if (size < unit) {
		return size.toFixed(2) + ' B';
	} else {
		let compressedSize = size / unit;
		if (compressedSize < unit) {
			return compressedSize.toFixed(2) + ' KB';
		} else {
			compressedSize = compressedSize / unit;
			return compressedSize.toFixed(2) + ' MB';
		}
	}
}
// type UploadStatus = 'idle' | 'error' | 'success' | 'uploading';

// export const UploadImage = () => {
// 	const { plantId }= useParams();
// 	const [file, setFile] = useState<File | null>(null);
// 	const [status, setStatus] = useState<UploadStatus>('idle');
// 	const [uploadProgress, setUploadProgress] = useState(0);

// 	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
// 		const files: FileList = e.target.files;
// 		if (files) {
// 			setFile(files[0])
// 		}
// 	};

//   const handleFileUpload = async () => {
// 		console.log('plantId', plantId)
//     if (file) {
//       setStatus('uploading');
//       setUploadProgress(0);
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const plantImageResponse = await plantService.uploadPlantImage({
//           plantId: Number.parseInt(plantId),
//           isSelected: false,
//           formData,
//           changePercentage: (percentage: number) => setUploadProgress(percentage),
//         });
//         setStatus('success');
//         setUploadProgress(100);
//         console.log('Response', plantImageResponse)

//       } catch (e) {
//         setStatus('error');
//         setUploadProgress(0);
//       }
//     }
//   };

//   return (
//     <section className={styles.uploadImageContainer}>
//       <input type='file' accept='image/*' onChange={handleFileChange} />
//       <div className={styles.informationContainer}>
//         {file && (
//           <article className={styles.imageInformation}>
//             <p><b>File name: </b>{file.name}</p>
//             <p><b>Size: </b>{(file.size / 1024).toFixed(2)} KB</p>
//             <p><b>Type: </b>{file.type}</p>
//           </article>
//         )}
//         {file && status !== 'uploading' && (
//           <button className={styles.button} onClick={() => handleFileUpload()}>
//             Upload File
//           </button>
//         )}
//         {status === 'uploading' && (
//           <div className={styles.progressContainer}>
//             <div className={styles.progressBar}>
//               <div
//                 className={styles.progressFill}
//                 style={{ width: `${uploadProgress}%` }}
//               />
//             </div>
//             <p>{uploadProgress}%</p>
//           </div>
//         )}
//       </div>
//       {status === 'success' && <p>File uploaded successfully</p>}
//       {status === 'error' && <p>Error in File uploading</p>}
//     </section>
//   );
// }
