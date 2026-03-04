import useShimmer from 'hooks/useShimmer';
import Skeleton from 'react-loading-skeleton';

interface AnimatedSkeletonProps {
  width: string | number;
  height?: string | number;
  count?: number;
}

const AnimatedSkeleton = ({ width, height, count }: AnimatedSkeletonProps) => {
  const ref = useShimmer({});

  return (
    <div ref={ref}>
      <Skeleton width={width} height={height} count={count} />
    </div>
  );
};

export default AnimatedSkeleton;
