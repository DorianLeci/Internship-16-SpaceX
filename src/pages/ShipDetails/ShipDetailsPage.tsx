import { useShipDetails } from '@api/shipDetails';
import FadeInUp from '@components/FadeInUp';
import useReveal from 'hooks/useReveal';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ShipDetailsPage.module.scss';
import NotFoundPage from '@pages/NotFoundPage';
import ShipDetailsSection from './sections/ShipDetailsSection';
import ShipDetailsPageSkeleton from './Skeleton/ShipDetailsPageSkeleton';

const ShipDetailsPage = () => {
  const { shipId } = useParams<{ shipId: string }>();

  if (!shipId) return <NotFoundPage />;

  const navigate = useNavigate();
  const { data, isLoading, isError } = useShipDetails(shipId);
  const visible = useReveal({ isLoading });

  if (visible) return <ShipDetailsPageSkeleton />;

  if (isError || !data) return <NotFoundPage />;

  return (
    <FadeInUp className={styles.detailsContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <div className={styles.detailsContent}>
        <ShipDetailsSection ship={data} />
      </div>
    </FadeInUp>
  );
};

export default ShipDetailsPage;
