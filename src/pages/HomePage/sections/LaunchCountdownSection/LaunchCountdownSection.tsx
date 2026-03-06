import Countdown, { type CountdownRendererFn } from 'react-countdown';
import type { CountdownState } from './CountdownState/CountdownState';
import styles from './LaunchCountdownSection.module.scss';
import { useNextLaunch } from '@api/nextLaunch';
import FadeInUp from '@components/FadeInUp';
import useReveal from 'hooks/useReveal';
import LaunchCountdownSkeleton from './Skeleton/LaunchCountdownSkeleton';
import Error from '@components/Error';

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

  if (completed) {
    return <h2 className={styles.title}>Launched!</h2>;
  }

  return (
    <div className={styles.countdownContainer}>
      <h2 className={styles.title}>Countdown to the next launch</h2>
      <div className={styles.content}>
        {timeUnits.map((unit) => (
          <div className={styles.card} key={unit.label}>
            <span className={styles.label}>{unit.label}</span>
            <span className={styles.value}>{unit.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const LaunchCountdownSection = () => {
  const { data: nextLaunch, isLoading, isError, refetch } = useNextLaunch();
  const visible = useReveal({ isLoading });

  if (visible) return <LaunchCountdownSkeleton />;

  if (isError || !nextLaunch) {
    return (
      <Error message="Error loading next launch countdown" onRetry={refetch} />
    );
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
