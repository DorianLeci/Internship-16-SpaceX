import NotFoundPage from '@pages/NotFoundPage';
import { useParams } from 'react-router-dom';
import LaunchDetailsPage from '../LaunchDetailsPage';

const LaunchDetailsPageWrapper = () => {
  const { launchId } = useParams<{ launchId: string }>();

  if (!launchId) return <NotFoundPage />;

  return <LaunchDetailsPage launchId={launchId} />;
};

export default LaunchDetailsPageWrapper;
