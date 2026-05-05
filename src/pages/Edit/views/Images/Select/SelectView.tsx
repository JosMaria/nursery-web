import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { StarIcon } from '@/icons';
import { editPageService } from '@/pages/Edit/service';
import { axiosInstance } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';

import styles from './SelectView.module.scss';
import { Button, DotLoader } from '@/components';
import type { PathValuesImageSelect } from '@/pages/Edit/types';

interface ImageToSelect {
  initialValue: number;
  currentValue: number;
}

const initialImageToSelect: ImageToSelect = {
  initialValue: 0,
  currentValue: 0,
}



const apiImageUrl = (plantId: number, imageId: number) => `${axiosInstance.defaults.baseURL}/plants/${plantId}/images/${imageId}`;

const SelectView = () => {
  const [valuesImageId, setValuesImageId] = useState(initialImageToSelect);
  const { plantId } = useParams();
  const plantIdNumber = Number.parseInt(plantId);

  const { data: plantImages, isSuccess, isLoading, error } = useQuery({
    queryKey: ['images'],
    queryFn: () => editPageService.getImagesToSelection(plantIdNumber),
    staleTime: 60 * 1_000,
  });

  const { mutate, isPending } = useMutation({
		mutationFn: (values: PathValuesImageSelect) => editPageService.updateSelectedImage(values),
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

  if (isLoading) return (
    <div className={styles.loaderContainer}>
      <DotLoader size='small' />
      <i style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Cargando</i>
    </div>
  )

  if (error) return <p>{error.message}</p>

  return (
    <>
      <section className={styles.sectionContainer}>
        {plantImages.map(({ image_id: imageId }) => (
          <ImageToSelect
            key={imageId}
            imageUrl={apiImageUrl(plantIdNumber, imageId)}
            imageId={imageId}
            isSelected={valuesImageId.currentValue === imageId}
            changeSelectedImage={() => handleChangeSelectedImage(imageId)}
          />
        ))}
      </section>
      {isPending ? <DotLoader /> : (
        <Button
          isEnabled={valuesImageId.initialValue !== valuesImageId.currentValue}
          changeSelectedImage={() => mutate({ plantId: plantIdNumber, imageId: valuesImageId.currentValue })}
        />
      )}
    </>
  );
}

interface ImageToSelectProps {
	imageUrl: string;
	imageId: number;
	isSelected: boolean;
	changeSelectedImage: (imageId: number) => void;
}

const ImageToSelect = ({ imageUrl, imageId, isSelected, changeSelectedImage }: ImageToSelectProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={styles.imageContainer}>
      <img
        src={imgError ? '/src/assets/default_image.png' : imageUrl }
        onError={() => setImgError(true)}
      />
      <div className={styles.iconPosition} onClick={() => changeSelectedImage(imageId)}>
        <StarIcon size='medium' fill={isSelected} />
      </div>
    </div>
  );
}

export default SelectView;
