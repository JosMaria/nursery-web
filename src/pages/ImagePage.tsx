import { useEffect, useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

import { useMutation, useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../services/api';
import { plantService } from '../services/plantService';
import styles from './style.module.css';

interface ImageToSelect {
  initialValue: number;
  currentValue: number;
};

const initialImageToSelect: ImageToSelect = {
  initialValue: 0,
  currentValue: 0,
};

const apiImageUrl = (plantId: number, imageId: number) => `${axiosInstance.defaults.baseURL}/plants/${plantId}/images/${imageId}`;

export const ImagePage = () => {
  const plantId = 6;
  const [valuesImageId, setValuesImageId] = useState(initialImageToSelect);

  const { data: plantImages, isLoading, error, isSuccess } = useQuery({
    queryKey: ['images'],
    queryFn: () => plantService.getImagesToSelection(plantId),
    staleTime: 60 * 1_000,
  });

  const { mutate, isPending } = useMutation({
		mutationFn: ({ plantId, imageId }: { plantId: number, imageId: number }) => plantService.updateSelectedImage(plantId, imageId),
		onSuccess: () => console.log('success'),
		onError: (e) => {
			console.log('cause', e.cause);
			console.log('message', e.message);
		},
	});

  useEffect(() => {
		if (isSuccess) {
			const selectedImage = plantImages.find(({ is_selected }) => is_selected);
			if (selectedImage) {
				setValuesImageId({
					initialValue: selectedImage.image_id,
					currentValue: selectedImage.image_id,
				});
			}
		}
	}, [isSuccess]);

  const handleChangeSelectedImage = (imageIdToSelect: number) => {
		if (valuesImageId.currentValue !== imageIdToSelect) {
			setValuesImageId(prev => ({ ...prev, currentValue: imageIdToSelect }));
		}
	}

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>{error.message}</p>

  return (
    <div style={{ backgroundColor: '#dad7cd' }}>
      <section className={styles.sectionContainer}>
        {plantImages.map(({ image_id: imageId }) => (
          <ImageToSelect
            key={imageId}
            imageUrl={apiImageUrl(plantId, imageId)}
            imageId={imageId}
            isSelected={valuesImageId.currentValue === imageId}
            changeSelectedImage={() => handleChangeSelectedImage(imageId)}
          />
        ))}
      </section>
      {isPending ? <Spinner /> : (
        <ButtonToSave
          isEnabled={valuesImageId.initialValue !== valuesImageId.currentValue}
          changeSelectedImage={() => mutate({ plantId, imageId: valuesImageId.currentValue })}
        />
      )}
    </div>
  );
}

interface ImageToSelectProps {
	imageUrl: string;
	imageId: number;
	isSelected: boolean;
	changeSelectedImage: (imageId: number) => void;
};

const ImageToSelect = ({ imageUrl, isSelected, changeSelectedImage, imageId }: ImageToSelectProps) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.imageContainer}
        src={imgError ? '/src/assets/default_image.png' : imageUrl }
        onError={() => setImgError(true)}
      />
      {isSelected ?
        <BsStarFill
          className={styles.icon}
          size={30}
          color='yellow'
          onClick={() => changeSelectedImage(imageId)}
        />
        :
        <BsStar
          className={styles.icon}
          size={30}
          color='yellow'
          onClick={() => changeSelectedImage(imageId)}
        />
      }
    </div>
  );
}

interface ButtonToSaveProps {
	isEnabled: boolean;
	changeSelectedImage: () => void;
};

const ButtonToSave = ({ isEnabled, changeSelectedImage }: ButtonToSaveProps) => (
  <button
    className={`${styles.button} ${!isEnabled ? styles.blockedButton : ''}`}
    disabled={!isEnabled}
    onClick={() => changeSelectedImage()}
  >
      Guardar
  </button>
);

const Spinner = () => (
  <svg
    className={styles.spinner}
    width={30}
    height={30}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle className={styles.circle} cx='12' cy='12' r='10' />
  </svg>
);
