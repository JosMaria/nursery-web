import { Link, useLocation, useParams } from 'react-router';

import styles from '@/pages/Plant/scss/Breadcrumbs.module.scss';

const obtainLabel = (segment: string) => {
  const labels = {
    'list': 'LISTADO',
  };

  return labels[segment] || segment;
}

export const Breadcrumbs = () => {
  const { plantId } = useParams()
  const { pathname, state } = useLocation();
  const splittedPaths = pathname.split('/').filter(value => value);

  const valuesToNavigation = (value: string, index: number) => {
    const navigateTo = `/${splittedPaths.slice(0, index + 1).join('/')}`;
    const isLast = index === splittedPaths.length - 1;
    const path = plantId === value ? state.scientificName : obtainLabel(value);
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
