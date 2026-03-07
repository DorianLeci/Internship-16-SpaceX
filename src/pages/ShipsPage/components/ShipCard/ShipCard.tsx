import styles from './ShipCard.module.scss';
import placeholderShip from '@assets/images/ship-placeholder.svg';
import { FaShip } from 'react-icons/fa';

interface ShipCardProps {
  name: string;
  type: string;
  active: boolean;
  image?: string;
}

const ShipCard = ({ name, type, active, image }: ShipCardProps) => {
  return (
    <div className={styles.card}>
      <h2>
        <strong className={styles.label}>Ship name: </strong>
        <span className={styles.value}>{name}</span>
      </h2>
      <p className={styles.detailsPreview}>
        <strong className={styles.label}>Type: </strong>
        <span className={styles.value}>{type}</span>
      </p>
      <p>
        <strong className={styles.label}>Active: </strong>
        <span className={styles.value}>{active ? 'Yes' : 'No'}</span>
      </p>
      {image ? (
        <img src={image} alt={name} className={styles.shipImage} />
      ) : (
        <div className={styles.placeholderIcon}>
          <FaShip size={567} />
        </div>
      )}
    </div>
  );
};

export default ShipCard;
