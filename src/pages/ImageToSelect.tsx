import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

import styles from './ImageToSelect.module.scss';

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

export default ImageToSelect;
