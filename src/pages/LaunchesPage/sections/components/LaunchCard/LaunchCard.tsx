import type { Launch } from '@app-types/Launch';
import styles from './LaunchCard.module.scss';
import getStatus from './helpers/getStatus';

interface LaunchCardProps {
  launch: Launch;
}

const LaunchCard = ({ launch }: LaunchCardProps) => {
  return (
    <div className={styles.card}>
      <h2>
        <strong className={styles.label}>Launch name: </strong>
        <span className={styles.value}>{launch.name}</span>
      </h2>
      <p>
        <strong className={styles.label}>Details: </strong>
        <span className={styles.value}>
          {launch.details || 'No details available'}
        </span>
      </p>
      <p>
        <strong className={styles.label}>Upcoming: </strong>
        <span className={styles.value}>{launch.upcoming ? 'Yes' : 'No'}</span>
      </p>
      <p>
        <strong className={styles.label}>Success: </strong>
        <span className={styles.value}>{getStatus(launch.success)}</span>
      </p>
    </div>
  );
};

export default LaunchCard;
