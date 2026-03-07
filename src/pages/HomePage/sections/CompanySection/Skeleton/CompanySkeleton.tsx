import AnimatedSkeleton from '@components/AnimatedSkeleton';
import styles from '../CompanySection.module.scss';

const CompanySkeleton = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <AnimatedSkeleton width="300px" height="40px" />
      </h2>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.infoItem}>
            <AnimatedSkeleton width="120px" height="22px" />
            <AnimatedSkeleton width="140px" height="24px" />
          </div>
          <div className={styles.infoItem}>
            <AnimatedSkeleton width="120px" height="22px" />
            <AnimatedSkeleton width="140px" height="24px" />
          </div>
          <div className={styles.infoItem}>
            <AnimatedSkeleton width="120px" height="22px" />
            <AnimatedSkeleton width="80px" height="24px" />
          </div>
          <div className={styles.infoItem}>
            <AnimatedSkeleton width="120px" height="22px" />
            <AnimatedSkeleton width="60px" height="24px" />
          </div>
          <div className={styles.infoItem}>
            <AnimatedSkeleton width="120px" height="22px" />
            <AnimatedSkeleton width="60px" height="24px" />
          </div>
          <div className={styles.infoItem}>
            <AnimatedSkeleton width="120px" height="22px" />
            <AnimatedSkeleton width="60px" height="24px" />
          </div>
          <div className={styles.infoItem}>
            <AnimatedSkeleton width="120px" height="22px" />
            <AnimatedSkeleton width="120px" height="22px" />
            <AnimatedSkeleton width="120px" height="22px" />
          </div>
          <div className={styles.infoItem}>
            <AnimatedSkeleton width="120px" height="22px" />
            <div className={styles.links}>
              <AnimatedSkeleton width="100px" height="24px" />
              <AnimatedSkeleton width="100px" height="24px" />
              <AnimatedSkeleton width="100px" height="24px" />
            </div>
          </div>
        </div>

        <div className={styles.summary}>
          <AnimatedSkeleton width="120px" height={24} />
          <AnimatedSkeleton width="100%" count={2} height={20} />{' '}
        </div>
      </div>
    </div>
  );
};

export default CompanySkeleton;
