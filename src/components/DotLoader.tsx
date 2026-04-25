import styles from './scss/DotLoader.module.scss';

type DotSize = 'small' | 'medium' | 'large';

interface DotLoaderProps {
  size?: DotSize;
};

const DotLoader = ({ size = 'small' }: DotLoaderProps) => {
  return (
    <div className={styles.dotLoaderContainer}>
      <Point className={`${styles.dot1}`} size={size} />
      <Point className={`${styles.dot2}`} size={size} />
      <Point className={`${styles.dot3}`} size={size} />
    </div>
  );
}

interface PointProps {
  className?: string;
  size: DotSize;
}

const Point = ({ size, className }: PointProps) => (
  <div className={`${className} ${styles.dot} ${size === 'small' ? styles.small : size === 'medium' ? styles.medium : styles.large}`} />
);

export default DotLoader;
