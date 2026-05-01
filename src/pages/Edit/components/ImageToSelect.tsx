import { useState } from 'react';

import { StarIcon } from '@/icons';

import styles from './scss/ImageToSelect.module.scss';

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
        {isSelected ? <StarIcon size='medium' /> : <StarIcon size='medium' fill={false} />}
      </div>
    </div>
  );
}

export default ImageToSelect;
