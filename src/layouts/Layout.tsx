import { Outlet } from 'react-router';

import styles from './Layout.module.scss';

export const Layout = () => (
  <div className={styles.container}>
    <header className={styles.headerContainer}>
      header
    </header>
    <main className={styles.mainContainer}>
      <Outlet />
    </main>
    <footer className={styles.footerContainer}>
      footer
    </footer>
  </div>
);
