import AnimatedSkeleton from '@components/AnimatedSkeleton';
import pageStyles from '../ShipDetailsPage.module.scss';
import sectionStyles from '../sections/ShipDetailsSection.module.scss';

const ShipDetailsPageSkeleton = () => {
  return (
    <div className={pageStyles.detailsContainer}>
      <AnimatedSkeleton className={pageStyles.skeletonButton} />
      <div className={sectionStyles.section}>
        <AnimatedSkeleton width="300px" height="32px" />
        <AnimatedSkeleton width="200px" height="30px" />
        <AnimatedSkeleton width="200px" height="30px" />
        <AnimatedSkeleton width="200px" height="30px" />
        <AnimatedSkeleton width="200px" height="30px" />
        <AnimatedSkeleton width="200px" height="30px" />
        <AnimatedSkeleton width="200px" height="30px" />
        <div className={sectionStyles.imageWrapper}>
          <AnimatedSkeleton className={sectionStyles.skeletonImage} />
        </div>
      </div>
    </div>
  );
};

export default ShipDetailsPageSkeleton;
