import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';
import NavigationBar from './NavigationBar';
import companyLogo from '@assets/images/SpaceX.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from 'hooks/useTheme';
import { ThemeEnum } from '@app-types/Theme';
import spinningPlanet from '@assets/videos/spinning_planet.mp4';
import spinningPlanetLight from '@assets/videos/spinning_planet_light.mp4';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  const videoSrc =
    theme === ThemeEnum.DARK ? spinningPlanet : spinningPlanetLight;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <img src={companyLogo} className={styles.companyLogo} />
        </div>
        <div className={styles.navWrapper}>
          <NavigationBar />
          <button className={styles.themeToggleButton} onClick={toggleTheme}>
            {theme === ThemeEnum.DARK ? (
              <FaSun size={36} />
            ) : (
              <FaMoon size={36} />
            )}
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <video key={theme} autoPlay loop muted className={styles.bgVideo}>
          <source src={videoSrc} type="video/mp4" />
        </video>
        {children}
      </main>
    </div>
  );
};

export default Layout;
