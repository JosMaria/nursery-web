import styles from './scss/Upload.module.scss';

interface UploadIconProps {
	upload: () => void;
}

const UploadIcon = ({ upload }: UploadIconProps) => (
	<button className={styles.iconContainer} onClick={upload}>
		<svg className={styles.icon}>
			<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
			<polyline points='17 8 12 3 7 8' />
			<line x1='12' y1='3' x2='12' y2='15' />
		</svg>
	</button>
);

export default UploadIcon;
