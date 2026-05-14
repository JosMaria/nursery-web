import { useState } from 'react';
import { useParams } from 'react-router';

import { CloseIcon, UploadIcon } from '@/icons';
import { plantService } from '@/services/plantService';

import styles from './scss/UploadImage.module.scss';

export const UploadImage = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [isDragging, setIsDragging] = useState(false);

	const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsDragging(true);
	}

	const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		setIsDragging(false);
	}

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		const droppedFiles = Array.from(event.dataTransfer.files);
		setFiles(prevFiles => ([...prevFiles, ...droppedFiles]))
		setIsDragging(false);
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
		const filesToUpload = event.target.files;
		setFiles(prevFiles => [...prevFiles, ...Array.from(filesToUpload)]);
	}

	const handleRemove = (filename: string) => {
		setFiles(prevFiles => prevFiles.filter(file => file.name !== filename));
	}

	return (
		<div className={styles.uploadImageContainer}>
			<section
				className={`${styles.dropZone} ${isDragging && styles.dropZoneOver}`}
				onDragEnter={handleDragEnter}
				onDragOver={handleDragEnter}
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
				<label className={styles.buttonUploadImage} htmlFor='file-input'>
					Browser Files
				</label>
			</section>
			<section className={styles.previewImagesContainer}>
				{files.map((file, index) =>
					<PreviewImage
						key={index}
						file={file}
						remove={filename => handleRemove(filename)}
					/>
				)}
			</section>
		</div>
	);
}

type UploadStatusType = 'idle' | 'error' | 'success' | 'uploading'

interface PreviewImageProps {
	file: File;
	remove: (filename: string) => void;
}

const PreviewImage = ({ file, remove }: PreviewImageProps) => {
	const { plantId } = useParams();
	const [uploadStatus, setUploadStatus] = useState<UploadStatusType>('idle');
	const [uploadProgress, setUploadProgress] = useState(0);

	const handleUploadFile = async () => {
		setUploadStatus('uploading');
		setUploadProgress(0);
		const formData = new FormData();
		formData.append('file', file);
		try {
			const plantImageResponse = await plantService.uploadPlantImage({
				plantId: Number.parseInt(plantId),
				isSelected: false,
				formData,
				changePercentage: (percentage: number) => setUploadProgress(percentage),
			});
			setUploadStatus('success');
			setUploadProgress(100);
			console.log('Response', plantImageResponse);
		} catch (error) {
				setUploadStatus('error');
				setUploadProgress(0);
		}
	}

	return (
		<div className={`${styles.previewImageContainer} ${uploadStatus === 'success' && styles.previewImageSuccess}`}>
			<article className={styles.previewInfoContainer}>
				<div className={styles.previewInfo}>
					<img
						className={styles.previewImage}
						src={URL.createObjectURL(file)}
						alt={file.name}
					/>
					<div className={styles.previewInfoText}>
						<p>{file.name}</p>
						<span>{adjustSize(file.size)}</span>
					</div>
				</div>
				{(uploadStatus === 'idle' || uploadStatus === 'error') && (
					<div className={styles.iconContainer}>
						<UploadIcon upload={() => handleUploadFile()} />
						<CloseIcon close={() => remove(file.name)} />
					</div>
				)}
			</article>
			{uploadStatus === 'uploading'
				? <UploadDetails progress={uploadProgress} />
				: uploadStatus !== 'idle' && (
					<p className={`${styles.textUploadStatus} ${uploadStatus === 'success' ? styles.success : styles.error}`}>
						{uploadStatus}
					</p>
				)}
		</div>
	)
}

interface UploadDetailsProps {
	progress: number;
}

const UploadDetails = ({ progress }: UploadDetailsProps) => (
	<div className={styles.progressContainer}>
		<div className={styles.progressBar}>
			<div
				className={styles.progressFill}
				style={{ width: `${progress}%` }}
			/>
		</div>
		<p>{progress}%</p>
	</div>
);

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
