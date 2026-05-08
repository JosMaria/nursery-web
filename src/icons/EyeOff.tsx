import styles from './scss/EyeOff.module.scss';

const EyeOffIcon = () => (
  <svg className={styles.icon} viewBox='0 0 24 24'>
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
    <circle cx='12' cy='12' r='3' />
    <line x1='3' y1='3' x2='21' y2='21' />
  </svg>
);

export default EyeOffIcon;
