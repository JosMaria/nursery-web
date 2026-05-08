import styles from './scss/Pencil.module.scss';

const PencilIcon = () => (
  <svg className={styles.icon} viewBox='0 0 24 24'>
    <title>Editar</title>
    <path d='M17 3l4 4-7 7H10v-4l7-7z' />
    <path d='M3 21h18' />
  </svg>
);

export default PencilIcon;
