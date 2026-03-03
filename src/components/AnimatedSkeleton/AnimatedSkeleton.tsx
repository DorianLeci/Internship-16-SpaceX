import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';

interface AnimatedSkeletonProps {
  width: string | number;
  height: string | number;
  count?: number;
}

const AnimatedSkeleton = ({ width, height, count }: AnimatedSkeletonProps) => {
  const skeletonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skeletonRef.current) {
      gsap.to(skeletonRef.current, {
        opacity: 0.8,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    }
  });

  return (
    <div ref={skeletonRef}>
      <Skeleton width={width} height={height} count={count} />
    </div>
  );
};

export default AnimatedSkeleton;
