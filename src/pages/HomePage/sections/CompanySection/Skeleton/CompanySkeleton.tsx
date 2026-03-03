import AnimatedSkeleton from '@components/AnimatedSkeleton';
import styles from '../CompanySection.module.scss';

const CompanySkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.infoItem}>
          <AnimatedSkeleton width="120px" height={22} />
          <AnimatedSkeleton width="140px" height={24} />
        </div>
        <div className={styles.infoItem}>
          <AnimatedSkeleton width="120px" height={22} />
          <AnimatedSkeleton width="140px" height={24} />
        </div>
        <div className={styles.infoItem}>
          <AnimatedSkeleton width="120px" height={22} />
          <AnimatedSkeleton width="80px" height={24} />
        </div>
        <div className={styles.infoItem}>
          <AnimatedSkeleton width="120px" height={22} />
          <AnimatedSkeleton width="60px" height={24} />
        </div>
        <div className={styles.infoItem}>
          <AnimatedSkeleton width="120px" height={22} />
          <AnimatedSkeleton width="60px" height={24} />
        </div>
        <div className={styles.infoItem}>
          <AnimatedSkeleton width="120px" height={22} />
          <AnimatedSkeleton width="60px" height={24} />
        </div>
        <div className={styles.infoItem}>
          <AnimatedSkeleton width="120px" height={22} />
          <AnimatedSkeleton width="480px" height={24} />
        </div>
        <div className={styles.infoItem}>
          <AnimatedSkeleton width="120px" height={22} />
          <div className={styles.links}>
            <AnimatedSkeleton width="100px" height={24} />
            <AnimatedSkeleton width="100px" height={24} />
            <AnimatedSkeleton width="100px" height={24} />
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <AnimatedSkeleton width="120px" height={24} />
        <AnimatedSkeleton width="100%" count={2} height={20} />{' '}
      </div>
    </div>
  );
};

export default CompanySkeleton;
