import styles from './scss/Pencil.module.scss';

const PencilIcon = () => (
  <svg
    className={styles.icon}
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='black'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <title>Editar</title>
    <path d='M17 3l4 4-7 7H10v-4l7-7z' />
    <path d='M3 21h18' />
  </svg>
);

export default PencilIcon;
