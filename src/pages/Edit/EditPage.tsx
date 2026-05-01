import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Button, DotLoader } from '@/components';
import { axiosInstance } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';

import ImageToSelect from './components';
import styles from './EditPage.module.scss';

import type { ImageSelectionResponse } from './types';

interface ImageToSelect {
  initialValue: number;
  currentValue: number;
}

const initialImageToSelect: ImageToSelect = {
  initialValue: 0,
  currentValue: 0,
}

export const plantService = {
  getImagesToSelection: async (plantId: number) => {
    const uri = `/plants/${plantId}/images/selection`;
    const { data } = await axiosInstance.get<ImageSelectionResponse[]>(uri);
    return data;
  },
  updateSelectedImage: async (pathValues: PathValues) => {
    const uri = `/plants/${pathValues.plantId}/images/${pathValues.imageId}`;
		const { data: isChanged } = await axiosInstance.patch<Boolean>(uri);
		return isChanged;
	},
}

const apiImageUrl = (plantId: number, imageId: number) => `${axiosInstance.defaults.baseURL}/plants/${plantId}/images/${imageId}`;

interface PathValues {
  plantId: number;
  imageId: number;
}

const EditPage = () => {
  const { plantId } = useParams();
  const plantIdNumber = Number.parseInt(plantId);
  const [valuesImageId, setValuesImageId] = useState(initialImageToSelect);

  const { data: plantImages, isLoading, error, isSuccess } = useQuery({
    queryKey: ['images'],
    queryFn: () => plantService.getImagesToSelection(plantIdNumber),
    staleTime: 60 * 1_000,
  });

  const { mutate, isPending } = useMutation({
		mutationFn: (pathValues: PathValues) => plantService.updateSelectedImage(pathValues),
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

  if (error) return <p>{error.message}</p>

  return (
    <div className={styles.editPageContainer}>
      {isLoading && (
        <div className={styles.loaderContainer}>
          <DotLoader size='medium' />
          <i style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Cargando</i>
        </div>
      )}
      {isSuccess && (
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
      )}
    </div>
  );
}

export default EditPage;