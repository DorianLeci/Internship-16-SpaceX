import type { LaunchDetails } from '@app-types/LaunchDetails';
import styles from './LaunchDetailsSection.module.scss';
import { FaYoutube } from 'react-icons/fa';

interface LaunchDetailsProps {
  launch: LaunchDetails;
}

const LaunchDetailsSection = ({ launch }: LaunchDetailsProps) => {
  const { name, dateUtc, details, links } = launch;

  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>Launch details</h1>
      {links?.patch?.small && (
        <div className={styles.patchWrapper}>
          <img
            src={links.patch.small}
            alt={`${name} mission patch`}
            className={styles.patchImage}
          />
        </div>
      )}

      <p className={styles.detail}>
        <span className={styles.label}>Name: </span>
        <span className={styles.value}>{name}</span>
      </p>

      <p className={styles.detail}>
        <span className={styles.label}>Date: </span>
        <span className={styles.value}>{new Date(dateUtc).toUTCString()}</span>
      </p>

      {details && (
        <p className={styles.detail}>
          <span className={styles.label}>Details: </span>
          <span className={styles.value}>{details}</span>
        </p>
      )}

      {links?.article && (
        <p className={styles.detail}>
          <span className={styles.label}>Article: </span>
          <a href={links.article} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </p>
      )}

      {links?.webcast && (
        <div className={styles.webcastWrapper}>
          <FaYoutube size={60} color="red" />
          <a href={links.webcast} target="_blank">
            Watch on YouTube
          </a>
        </div>
      )}
    </section>
  );
};

export default LaunchDetailsSection;
