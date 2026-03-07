import useShipsSearchParams from './hooks/useShipsSearchParams';
import { useShips } from '@api/ships';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import styles from './ShipsPage.module.scss';
import SearchBar from '@pages/LaunchesPage/components/SearchBar';
import useReveal from 'hooks/useReveal';
import ShipCard from './components/ShipCard';
import ShipsPageSkeleton from './Skeleton';
import UpdateState from '@components/UpdateState';
import EmptyState from '@components/EmptyState';

export const PAGE_LIMIT = 20;

const ShipsPage = () => {
  const { filterState, handleSearch } = useShipsSearchParams();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useShips(filterState);

  const visible = useReveal({ isLoading });
  const fetchingMore = useReveal({ isLoading: isFetchingNextPage });

  const ref = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const ships = data?.pages.flatMap((page) => page.docs) ?? [];

  const isEmpty = !visible && ships.length === 0;
  const isUpdatingSearch = isFetching && !fetchingMore;

  if (visible) return <ShipsPageSkeleton />;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ships</h1>

      <SearchBar
        value={filterState.search || ''}
        placeholder="Search ships by name"
        onSearchChange={handleSearch}
      />
      {isEmpty && <EmptyState message="No ships found" />}

      <div className={styles.cardContainer}>
        {ships.map((ship) => (
          <ShipCard
            key={ship.id}
            name={ship.name}
            active={ship.active}
            type={ship.type}
            image={ship.image}
          />
        ))}
        {(fetchingMore || isUpdatingSearch) && (
          <UpdateState message={'Loading page...'} />
        )}
      </div>

      <div ref={ref} style={{ height: 1 }} />
    </div>
  );
};

export default ShipsPage;
