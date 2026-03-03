import Countdown, { type CountdownRendererFn } from 'react-countdown';
import type { CountdownState } from './CountdownState/CountdownState';
import styles from './LaunchCountdownSection.module.scss';
import { useNextLaunch } from '@api/nextLaunch';
import AnimatedSkeleton from '@components/AnimatedSkeleton';
import FadeInUp from '@components/FadeInUp';

const CountdownRenderer: CountdownRendererFn = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownState) => {
  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <div className={styles.countdownContainer}>
      {timeUnits.map((unit) => (
        <div className={styles.unit}>
          <span className={styles.label}>{unit.label}</span>
          <span className={styles.value}>{unit.value}</span>
        </div>
      ))}
    </div>
  );
};

const LaunchCountdownSection = () => {
  const { data: nextLaunch, isLoading, isError } = useNextLaunch();

  if (isLoading) {
    return (
      <div className={styles.skeletonContainer}>
        <AnimatedSkeleton width="150px" height={24} />
        <AnimatedSkeleton width="300px" height={40} />
      </div>
    );
  }

  if (isError || !nextLaunch) {
    return <p>Error loading next launch!</p>;
  }
  const originalDate = new Date(nextLaunch.dateUtc);
  const futureDate = new Date(originalDate);
  futureDate.setFullYear(futureDate.getFullYear() + 4);

  return (
    <FadeInUp className={styles.container}>
      <Countdown date={futureDate} renderer={CountdownRenderer} />
    </FadeInUp>
  );
};

export default LaunchCountdownSection;
