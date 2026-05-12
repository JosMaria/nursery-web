import { Link, Outlet, useLocation, useParams } from 'react-router';

import { usePlantStore } from '@/stores/plantStore';

import styles from './PlantLayout.module.scss';

const PlantLayout = () => (
  <main className={styles.pageContainer}>
    <Breadcrumbs />
    <Outlet />
  </main>
);

const obtainLabel = (segment: string) => {
  const labels = {
    'list': 'LISTADO',
    'select': 'SELECCIONAR',
    'upload': 'SUBIR IMAGEN',
  };

  return labels[segment] || segment;
}

const Breadcrumbs = () => {
  const { plantId } = useParams()
  const { pathname } = useLocation();
  const splittedPaths = pathname.split('/').filter(value => value);
  const scientificNameGlobal = usePlantStore(state => state.scientificNameGlobal);

  const valuesToNavigation = (value: string, index: number) => {
    const navigateTo = `/${splittedPaths.slice(0, index + 1).join('/')}`;
    const isLast = index === splittedPaths.length - 1;
    const path = plantId === value ? scientificNameGlobal : obtainLabel(value);
    return { navigateTo, isLast, path }
  }
  
  return (
    <article className={styles.breadcrumbs}>
      {splittedPaths.map((value, index) => {
        const { navigateTo, isLast, path } = valuesToNavigation(value, index);
        return (
          <div className={styles.pathContainer} key={index}>
            {isLast ? <span className={styles.currentPath}>{path}</span> : (
              <>
                <Link className={styles.link} to={navigateTo}>{path}</Link>
                <span className={styles.separator}>{'>'}</span>
              </>
            )}
          </div>
        )
      })}
    </article>
  );
}

export default PlantLayout;
