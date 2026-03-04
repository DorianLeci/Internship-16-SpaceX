import AnimatedSkeleton from '@components/AnimatedSkeleton';
import styles from '../LaunchCountdownSection.module.scss';

const LaunchCountdownSkeleton = () => {
  const units = ['Days', 'Hours', 'Minutes', 'Seconds'];

  return (
    <div className={styles.countdownContainer}>
      <h2 className={styles.title}>
        <AnimatedSkeleton width="300px" height="40px" />
      </h2>
      <div className={styles.content}>
        {units.map((unit) => (
          <div className={styles.card} key={unit}>
            <AnimatedSkeleton width="100px" height="28px" />
            <AnimatedSkeleton width="80px" height="32px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchCountdownSkeleton;
