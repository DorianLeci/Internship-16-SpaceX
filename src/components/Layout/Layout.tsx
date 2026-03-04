import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';
import NavigationBar from './NavigationBar';
import companyLogo from '@assets/images/SpaceX.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from 'hooks/useTheme';
import { ThemeEnum } from '@app-types/Theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

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
        <button className={styles.themeToggleButton} onClick={toggleTheme}>
          {theme === ThemeEnum.DARK ? (
            <FaSun size={24} />
          ) : (
            <FaMoon size={24} />
          )}
        </button>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
