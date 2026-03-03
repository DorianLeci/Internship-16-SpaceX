import CompanySection from './sections/CompanySection';
import styles from './HomePage.module.scss';
import spinningPlanet from '@assets/videos/spinning_planet.mp4';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <video autoPlay loop muted className={styles.bgVideo}>
        <source src={spinningPlanet} />
      </video>
      <div className={styles.content}>
        <CompanySection />
      </div>
    </div>
  );
};

export default HomePage;
