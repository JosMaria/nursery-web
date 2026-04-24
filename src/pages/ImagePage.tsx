import { useEffect, useState } from 'react';

import { Button, Spinner } from '@/components';
import { useMutation, useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../services/api';
import { plantService } from '../services/plantService';
import styles from './ImagePage.module.scss';
import ImageToSelect from './ImageToSelect';

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
    <div style={{ padding: '0.5rem', backgroundColor: '#a3b18a', width: '34rem', display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
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
        <Button
          isEnabled={valuesImageId.initialValue !== valuesImageId.currentValue}
          changeSelectedImage={() => mutate({ plantId, imageId: valuesImageId.currentValue })}
        />
      )}
    </div>
  );
}
