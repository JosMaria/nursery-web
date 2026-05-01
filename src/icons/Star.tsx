import styles from './scss/Star.module.scss';

interface StarIcon {
  size?: 'small' | 'medium';
  fill?: boolean
}

const StarIcon = ({ size = 'small', fill = true }: StarIcon) => (
  <div className={`${styles.iconContainer} ${size === 'medium' && styles.medium}`}>
    <svg viewBox='0 0 24 24'>
      <title>Favorito</title>
      <path
        d='M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z'
        fill={fill ? '#f4d405' : 'white'}
        stroke={fill ? '#f4d405' : 'white'}
        strokeWidth='1'
      />
    </svg>
  </div>
);

export default StarIcon;
