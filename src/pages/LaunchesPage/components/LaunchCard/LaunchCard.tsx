import { useNavigate } from 'react-router-dom';
import styles from './LaunchCard.module.scss';
import getStatus from './helpers/getStatus';
import AppPaths from 'routes/paths';

interface LaunchCardProps {
  id: string;
  details: string;
  upcoming: boolean;
  success: boolean | null;
  name: string;
}

const PREVIEW_LENGTH = 100;

const LaunchCard = ({
  id,
  details,
  upcoming,
  success,
  name,
}: LaunchCardProps) => {
  const navigate = useNavigate();

  const preview = details
    ? details.slice(0, PREVIEW_LENGTH) +
      (details.length > PREVIEW_LENGTH ? '...' : '')
    : 'No details available';

  const handleClick = () => {
    navigate(`/launches/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h2>
        <strong className={styles.label}>Launch name: </strong>
        <span className={styles.value}>{name}</span>
      </h2>
      <p className={styles.detailsPreview}>
        <strong className={styles.label}>Details: </strong>
        <span className={styles.value}>{preview}</span>
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
