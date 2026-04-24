import styles from './scss/Button.module.scss';

interface ButtonToSaveProps {
	isEnabled: boolean;
	changeSelectedImage: () => void;
};

const Button = ({ isEnabled, changeSelectedImage }: ButtonToSaveProps) => (
  <button
    className={`${styles.button} ${!isEnabled && styles.blocked}`}
    disabled={!isEnabled}
    onClick={() => changeSelectedImage()}
  >
      Guardar
  </button>
);

export default Button;
