import AnimatedSkeleton from '@components/AnimatedSkeleton';
import pageStyles from '../LaunchDetailsPage.module.scss';
import sharedStyles from '../../LaunchDetails/sections/styles/shared/DetailsShared.module.scss';
const LaunchDetailsPageSkeleton = () => {
  return (
    <div className={pageStyles.detailsContainer}>
      <div className={pageStyles.detailsContent}>
        <div className={sharedStyles.section}>
          <span className={sharedStyles.label}>
            <AnimatedSkeleton width="300px" height="32px" />
          </span>
          <span className={sharedStyles.value}>
            <AnimatedSkeleton width="300px" height="32px" />
          </span>
          <AnimatedSkeleton width="200px" height="30px" />
          <AnimatedSkeleton width="200px" height="30px" />
          <AnimatedSkeleton width="200px" height="30px" />
        </div>

        <div className={sharedStyles.section}>
          <AnimatedSkeleton width="300px" height="32px" />
          <AnimatedSkeleton width="200px" height="30px" />
          <AnimatedSkeleton width="200px" height="30px" />
          <AnimatedSkeleton width="200px" height="30px" />
          <AnimatedSkeleton width="200px" height="30px" />
          <AnimatedSkeleton width="200px" height="30px" />
        </div>
      </div>
    </div>
  );
};

export default LaunchDetailsPageSkeleton;
