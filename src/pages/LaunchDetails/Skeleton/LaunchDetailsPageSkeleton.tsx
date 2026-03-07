import AnimatedSkeleton from '@components/AnimatedSkeleton';
import pageStyles from '../LaunchDetailsPage.module.scss';
import sharedStyles from '../../LaunchDetails/sections/styles/shared/DetailsShared.module.scss';
import rocketStyles from '../../LaunchDetails/sections/RocketDetails/RocketDetailsSection.module.scss';

const LaunchDetailsPageSkeleton = () => {
  return (
    <div className={pageStyles.container}>
      <div className={sharedStyles.section}>
        <AnimatedSkeleton width="300px" height="32px" />
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
        {/* <div className={rocketStyles.imageContainer}>
          <AnimatedSkeleton width="950px" height="200px" />
          <AnimatedSkeleton width="950px" height="200px" />
        </div> */}
      </div>
    </div>
  );
};

export default LaunchDetailsPageSkeleton;
