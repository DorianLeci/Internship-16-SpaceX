import AnimatedSkeleton from '@components/AnimatedSkeleton';
import styles from '../ChartSection.module.scss';

const ChartSectionSkeleton = () => {
  return (
    <div className={styles.chartContainer}>
      <AnimatedSkeleton className={styles.skeletonTitle} />

      <div className={styles.skeletonChart}>
        <div className={styles.skeletonBars}>
          <AnimatedSkeleton className={styles.bar} height="80px" />
          <AnimatedSkeleton className={styles.bar} height="120px" />
          <AnimatedSkeleton className={styles.bar} height="60px" />
          <AnimatedSkeleton className={styles.bar} height="150px" />
          <AnimatedSkeleton className={styles.bar} height="100px" />
          <AnimatedSkeleton className={styles.bar} height="130px" />
          <AnimatedSkeleton className={styles.bar} height="150px" />
          <AnimatedSkeleton className={styles.bar} height="200px" />
          <AnimatedSkeleton className={styles.bar} height="130px" />
          <AnimatedSkeleton className={styles.bar} height="150px" />
          <AnimatedSkeleton className={styles.bar} height="230px" />
          <AnimatedSkeleton className={styles.bar} height="110px" />
          <AnimatedSkeleton className={styles.bar} height="93px" />
        </div>
      </div>
    </div>
  );
};

export default ChartSectionSkeleton;
