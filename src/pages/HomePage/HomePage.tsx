import CompanySection from './sections/CompanySection';
import styles from './HomePage.module.scss';
import LaunchCountdownSection from './sections/LaunchCountdownSection';
import LazyChartSection from './sections/ChartSection/LazyChartSection';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.content}>
        <CompanySection />
        <LaunchCountdownSection />
        <LazyChartSection />
      </div>
    </div>
  );
};

export default HomePage;
