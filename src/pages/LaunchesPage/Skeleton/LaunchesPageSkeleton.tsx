import AnimatedSkeleton from '@components/AnimatedSkeleton';
import pageStyles from '../LaunchesPage.module.scss';
import cardStyles from '../components/LaunchCard/LaunchCard.module.scss';
import filterStyles from '../components/FilterBar/FilterBar.module.scss';
import { PAGE_LIMIT } from '../LaunchesPage';
import { filters } from '../components/FilterBar/FilterBar';

const LaunchesPageSkeleton = () => {
  const placeholders = Array.from({ length: PAGE_LIMIT });

  return (
    <div className={pageStyles.container}>
      <AnimatedSkeleton height="40px" width="300px"></AnimatedSkeleton>
      <AnimatedSkeleton height="40px" width="300px"></AnimatedSkeleton>
      <div className={filterStyles.filterBar}>
        {filters.map((f) => (
          <div className={filterStyles.filterButtonWrapper} key={f.label}>
            <AnimatedSkeleton
              className={filterStyles.skeletonFilterButton}
            ></AnimatedSkeleton>
          </div>
        ))}
      </div>
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

export default LaunchesPageSkeleton;
