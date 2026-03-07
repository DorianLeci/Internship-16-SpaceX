import AnimatedSkeleton from '@components/AnimatedSkeleton';
import pageStyles from '../LaunchesPage.module.scss';
import cardStyles from '../components/LaunchCard/LaunchCard.module.scss';
import { PAGE_LIMIT } from '../LaunchesPage';

const LaunchesPageSkeleton = () => {
  const placeholders = Array.from({ length: PAGE_LIMIT });

  return (
    <div className={pageStyles.container}>
      <AnimatedSkeleton height="40px" width="300px"></AnimatedSkeleton>
      <AnimatedSkeleton height="40px" width="300px"></AnimatedSkeleton>
      <div className={pageStyles.cardContainer}>
        {placeholders.map((_, index) => (
          <div key={index} className={cardStyles.skeletonCard}>
            <AnimatedSkeleton height="250px" width="100%"></AnimatedSkeleton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchesPageSkeleton;
