import { useLaunchDetails } from '@api/launchDetails';
import useReveal from 'hooks/useReveal';
import FadeInUp from '@components/FadeInUp';
import styles from './LaunchDetailsPage.module.scss';
import LaunchDetailsSection from './sections/LaunchDetailsSection/LaunchDetailsSection';
import RocketDetailsSection from './sections/RocketDetails';
import LaunchDetailsPageSkeleton from './Skeleton';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import NotFoundPage from '@pages/NotFoundPage';

const LaunchDetailsPage = () => {
  const { launchId } = useParams<{ launchId: string }>();

  if (!launchId) return <NotFoundPage />;

  const navigate = useNavigate();
  const { data, isLoading, isError } = useLaunchDetails(launchId);
  const visible = useReveal({ isLoading });

  if (visible) return <LaunchDetailsPageSkeleton />;

  if (isError || !data) return <NotFoundPage />;

  const { launchData, rocketData } = data;

  return (
    <FadeInUp className={styles.detailsContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <div className={styles.detailsContent}>
        <LaunchDetailsSection launch={launchData} />
        <RocketDetailsSection rocket={rocketData} />
      </div>
    </FadeInUp>
  );
};

export default LaunchDetailsPage;
