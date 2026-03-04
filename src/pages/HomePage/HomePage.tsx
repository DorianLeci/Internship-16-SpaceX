import CompanySection from './sections/CompanySection';
import styles from './HomePage.module.scss';
import spinningPlanet from '@assets/videos/spinning_planet.mp4';
import spinningPlanetLight from '@assets/videos/spinning_planet_light.mp4';
import LaunchCountdownSection from './sections/LaunchCountdownSection';
import useTheme from 'hooks/useTheme';
import { ThemeEnum } from '@app-types/Theme';

const HomePage = () => {
  const { theme } = useTheme();
  const videoSrc =
    theme === ThemeEnum.DARK ? spinningPlanet : spinningPlanetLight;

  return (
    <div className={styles.homePage}>
      <video key={theme} autoPlay loop muted className={styles.bgVideo}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <CompanySection />
        <LaunchCountdownSection />
      </div>
    </div>
  );
};

export default HomePage;
