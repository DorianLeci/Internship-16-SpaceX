import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';
import NavigationBar from './NavigationBar';
import companyLogo from '@assets/images/SpaceX.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <img src={companyLogo} className={styles.companyLogo} />
        </div>
        <NavigationBar />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
