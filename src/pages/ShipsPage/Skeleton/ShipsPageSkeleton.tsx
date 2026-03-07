import AnimatedSkeleton from '@components/AnimatedSkeleton';
import pageStyles from '../ShipsPage.module.scss';
import cardStyles from '../components/ShipCard/ShipCard.module.scss';
import { PAGE_LIMIT } from '../ShipsPage';

const ShipsPageSkeleton = () => {
  const placeholders = Array.from({ length: PAGE_LIMIT });

  return (
    <div className={pageStyles.container}>
      <AnimatedSkeleton height="40px" width="300px"></AnimatedSkeleton>
      <div className={pageStyles.cardContainer}>
        {placeholders.map((_, index) => (
          <AnimatedSkeleton
            key={index}
            className={cardStyles.skeletonCard}
          ></AnimatedSkeleton>
        ))}
      </div>
    </div>
  );
};

export default ShipsPageSkeleton;
