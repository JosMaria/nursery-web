import styles from './scss/Star.module.scss';

const StarIcon = () => (
  <div className={`${styles.iconContainer}`}>
    <svg viewBox='0 0 24 24'>
      <path d='M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z'
        fill='#f4d405' stroke='#f4d405' strokeWidth='1'
      />
    </svg>
  </div>
);

export default StarIcon;
