import type { ShipDetails } from '@app-types/ShipDetails';
import styles from './ShipDetailsSection.module.scss';

interface ShipDetailsProps {
  ship: ShipDetails;
}

const ShipDetailsSection = ({ ship }: ShipDetailsProps) => {
  const { name, homePort, roles, link, massKg, yearBuilt, image } = ship;

  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>Ship details</h1>

      <p>
        <span className={styles.label}>Name: </span>
        <span className={styles.value}>{name}</span>
      </p>

      {homePort && (
        <p>
          <span className={styles.label}>Home Port: </span>
          <span className={styles.value}>{homePort}</span>
        </p>
      )}

      {roles?.length && (
        <p>
          <span className={styles.label}>Roles: </span>
          <span className={styles.value}>
            {roles.map((role, idx) => (
              <span key={role}>
                {role} {idx < roles.length - 1 ? ' | ' : ''}
              </span>
            ))}
          </span>
        </p>
      )}

      {massKg && (
        <p>
          <span className={styles.label}>Mass: </span>
          <span className={styles.value}>{massKg} kg</span>
        </p>
      )}

      {yearBuilt && (
        <p>
          <span className={styles.label}>Year Built: </span>
          <span className={styles.value}>{yearBuilt}</span>
        </p>
      )}

      {link && (
        <p>
          <span className={styles.label}>Link: </span>
          <span className={styles.value}>
            <a
              className={styles.link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </span>
        </p>
      )}

      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={`${name} image`} className={styles.image} />
        </div>
      )}
    </section>
  );
};

export default ShipDetailsSection;
