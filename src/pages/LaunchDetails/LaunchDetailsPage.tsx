import { useLaunchDetails } from '@api/launchDetails';
import useReveal from 'hooks/useReveal';
import Error from '@components/Error';
import NotFoundPage from '@pages/NotFoundPage';
import FadeInUp from '@components/FadeInUp';

interface LaunchDetailsPageOptions {
  launchId: string;
}
const LaunchDetailsPage = ({ launchId }: LaunchDetailsPageOptions) => {
  const { data, isLoading, isError, refetch } = useLaunchDetails(launchId);
  const visible = useReveal({ isLoading });

  if (visible) return <p>Loading...</p>;

  if (isError)
    return <Error message="Error loading launch details!" onRetry={refetch} />;

  if (!data) return <NotFoundPage />;

  return <FadeInUp></FadeInUp>;
};

export default LaunchDetailsPage;
