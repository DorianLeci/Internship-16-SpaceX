import { useLaunchDetails } from '@api/launchDetails';
import useReveal from 'hooks/useReveal';
import Error from '@components/Error';
import NotFoundPage from '@pages/NotFoundPage';
import FadeInUp from '@components/FadeInUp';
import styles from './LaunchDetailsPage.module.scss';
import LaunchDetailsSection from './sections/LaunchDetailsSection/LaunchDetailsSection';
import RocketDetailsSection from './sections/RocketDetails';
import LaunchDetailsPageSkeleton from './Skeleton';

interface LaunchDetailsPageOptions {
  launchId: string;
}
const LaunchDetailsPage = ({ launchId }: LaunchDetailsPageOptions) => {
  const { data, isLoading, isError, refetch } = useLaunchDetails(launchId);
  const visible = useReveal({ isLoading });

  if (visible) return <LaunchDetailsPageSkeleton />;

  if (isError || !data)
    return <Error message="Error loading launch details!" onRetry={refetch} />;

  const { launchData, rocketData } = data;

  return (
    <FadeInUp className={styles.detailsContainer}>
      <LaunchDetailsSection launch={launchData} />
      <RocketDetailsSection rocket={rocketData} />
    </FadeInUp>
  );
};

export default LaunchDetailsPage;
