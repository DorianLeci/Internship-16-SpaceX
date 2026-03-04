import { ThemeEnum } from '@app-types/Theme';
import useShimmer from 'hooks/useShimmer';
import useTheme from 'hooks/useTheme';
import Skeleton from 'react-loading-skeleton';

interface AnimatedSkeletonProps {
  width: string | number;
  height?: string | number;
  count?: number;
}

const AnimatedSkeleton = ({ width, height, count }: AnimatedSkeletonProps) => {
  const ref = useShimmer({});
  const { theme } = useTheme();

  const baseColor = theme === ThemeEnum.DARK ? '#e0e0e0' : '#575555';

  return (
    <div ref={ref}>
      <Skeleton
        width={width}
        height={height}
        count={count}
        baseColor={baseColor}
      />
    </div>
  );
};

export default AnimatedSkeleton;
