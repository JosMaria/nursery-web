import { Link } from 'react-router';

import styles from './scss/PlantPage.module.scss';

import { Breadcrumbs } from './components/Breadcrumbs';
import { CloseIcon, InformationIcon } from '@/icons';

const PlantPage = () => {
  return (
    <div className={styles.plantPageContainer}>
      <Breadcrumbs />
      <section className={styles.indexSection}>
        <h2>Imagenes</h2>
        <ul className={styles.linksContainer}>
          <li><Link to='#'>Seleccionar imagen favorita</Link></li>
          <li><Link to='#'>Subir imagen </Link></li>
          <li><Link to='#'>Eliminar imagen</Link></li>
        </ul>
      </section>
      
    
      <InformationIcon />
      <CloseIcon />
      
    </div>
  );
}

export default PlantPage;
