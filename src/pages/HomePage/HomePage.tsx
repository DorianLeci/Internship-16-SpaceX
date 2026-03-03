import CompanySection from './sections/CompanySection';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homeWrapper}>
      <CompanySection />
    </div>
  );
};

export default HomePage;
