import styles from './LaunchCard.module.scss';
import getStatus from './helpers/getStatus';

interface LaunchCardProps {
  details: string;
  upcoming: boolean;
  success: boolean | null;
  name: string;
}

const LaunchCard = ({ details, upcoming, success, name }: LaunchCardProps) => {
  return (
    <div className={styles.card}>
      <h2>
        <strong className={styles.label}>Launch name: </strong>
        <span className={styles.value}>{name}</span>
      </h2>
      <p>
        <strong className={styles.label}>Details: </strong>
        <span className={styles.value}>
          {details || 'No details available'}
        </span>
      </p>
      <p>
        <strong className={styles.label}>Upcoming: </strong>
        <span className={styles.value}>{upcoming ? 'Yes' : 'No'}</span>
      </p>
      <p>
        <strong className={styles.label}>Success: </strong>
        <span className={styles.value}>{getStatus(success)}</span>
      </p>
    </div>
  );
};

export default LaunchCard;
