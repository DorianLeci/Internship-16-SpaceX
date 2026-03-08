import type { Rocket } from '@app-types/Rocket';
import useHorizontalScroll from 'hooks/useHorizontalScroll';
import styles from './RocketDetailsSection.module.scss';

interface RocketDetailsProps {
  rocket: Rocket;
}

const RocketDetailsSection = ({ rocket }: RocketDetailsProps) => {
  const { name, type, description, height, mass, firstFlight, flickrImages } =
    rocket;

  const ref = useHorizontalScroll();

  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>Rocket details</h1>
      <p>
        <span className={styles.label}>Name: </span>
        <span className={styles.value}>{name}</span>
      </p>

      <p>
        <span className={styles.label}>Type: </span>
        <span className={styles.value}>{type}</span>
      </p>

      {description && (
        <p>
          <span className={styles.label}>Description: </span>
          <span className={styles.value}>{description}</span>
        </p>
      )}

      {height?.meters && (
        <p>
          <span className={styles.label}>Height: </span>
          <span className={styles.value}>{height.meters} m</span>
        </p>
      )}

      {mass?.kg && (
        <p>
          <span className={styles.label}>Mass: </span>
          <span className={styles.value}>{mass.kg} kg</span>
        </p>
      )}

      {firstFlight && (
        <p>
          <span className={styles.label}>First Flight: </span>
          <span className={styles.value}>{firstFlight}</span>
        </p>
      )}

      {flickrImages?.length && (
        <div className={styles.imageContainer} ref={ref}>
          {flickrImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${name} image ${idx + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default RocketDetailsSection;
