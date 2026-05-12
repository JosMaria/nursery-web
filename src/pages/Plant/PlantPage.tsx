import { Link } from 'react-router';

import styles from './scss/PlantPage.module.scss';

const PlantPage = () => (
  <div className={styles.plantPageContainer}>
    <section className={styles.indexSection}>
      <h2>Imagenes</h2>
      <ul className={styles.linksContainer}>
        <li><Link to='select'>Seleccionar imagen favorita</Link></li>
        <li><Link to='#'>Subir imagen </Link></li>
        <li><Link to='#'>Eliminar imagen</Link></li>
      </ul>
    </section>
  </div>
);

export default PlantPage;
