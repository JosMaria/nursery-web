import { NavLink, Outlet } from 'react-router';

import styles from './Layout.module.scss';

export const Layout = () => (
  <div className={styles.container}>
    <header className={styles.headerContainer}>
      header
    </header>
    <div className={styles.middleContainer}>
      <aside className={styles.asideContainer}>
        <label className={styles.sectionTitle}>Planta</label>
        <NavLink to="list" className={({ isActive }) => `${styles.link} ${isActive && styles.activeLink}`}>
          Ver Plantas
        </NavLink>
        <NavLink to="upload" className={({ isActive }) => `${styles.link} ${isActive && styles.activeLink}`}>
          Crear Planta
        </NavLink>
        <br />
        <label className={styles.sectionTitle}>Configuraciones</label>
      </aside>
      <main className={styles.mainContainer}>
        <Outlet />
      </main  >
    </div>
    <footer className={styles.footerContainer}>
      footer
    </footer>
  </div>
);
