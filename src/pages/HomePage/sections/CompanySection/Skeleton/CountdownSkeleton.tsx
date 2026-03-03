import AnimatedSkeleton from '@components/AnimatedSkeleton';
import styles from './LaunchCountdownSection.module.scss';

const CountdownSkeleton = () => {
  const units = ['Days', 'Hours', 'Minutes', 'Seconds'];

  return (
    <div className={styles.countdown}>
      {units.map((unit) => (
        <div key={unit} className={styles.unit}>
          <AnimatedSkeleton width="60px" height={16} />
          <AnimatedSkeleton width="80px" height={32} />
        </div>
      ))}
    </div>
  );
};

export default CountdownSkeleton;
