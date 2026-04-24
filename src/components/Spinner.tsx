import styles from './stylesheets/spinner.module.css';

export const Spinner = () => (
  <svg
    className={styles.spinner}
    width={30}
    height={30}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle className={styles.circle} cx='12' cy='12' r='10' />
  </svg>
);
