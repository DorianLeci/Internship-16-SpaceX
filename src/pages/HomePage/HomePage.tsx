import CompanySection from './sections/CompanySection';
import styles from './HomePage.module.scss';
import LaunchCountdownSection from './sections/LaunchCountdownSection';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.content}>
        <CompanySection />
        <LaunchCountdownSection />
      </div>
    </div>
  );
};

export default HomePage;
