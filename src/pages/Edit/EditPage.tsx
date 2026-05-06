import { NavLink, Outlet, useLocation } from 'react-router';

import styles from './EditPage.module.scss';

const EditPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.editPageContainer}>
    {/* <nav className={styles.navContainer}>
      <NavLink 
        className={({ isActive }) => `${styles.navItem} ${isActive && styles.navSelectedItem}`}
        to='.'
        end
      >
        General
      </NavLink>
      <NavLink
        className={({ isActive }) => `${styles.navItem} ${isActive && styles.navSelectedItem}`}
        to='taxonomy'
      >
        Taxonomia
      </NavLink>
      <NavLink
        className={({ isActive }) => `${styles.navItem} ${isActive && styles.navSelectedItem}`}
        to='images'
      >
        Imagenes
      </NavLink>
    </nav>
    <main className={styles.mainContainer}>
      <Outlet />
    </main> */}
    </div>
  );
}

export default EditPage;
