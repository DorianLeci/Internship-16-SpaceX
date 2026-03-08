import { Suspense } from 'react';
import ChartSection from './ChartSection';
import { useInView } from 'react-intersection-observer';
import styles from './ChartSection.module.scss';
import ChartSectionSkeleton from './Skeleton/ChartSectionSkeleton';

const LazyChartSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '10px',
  });

  return (
    <div ref={ref} className={styles.chartWrapper}>
      {inView && (
        <Suspense fallback={<ChartSectionSkeleton />}>
          <ChartSection />
        </Suspense>
      )}
    </div>
  );
};

export default LazyChartSection;
