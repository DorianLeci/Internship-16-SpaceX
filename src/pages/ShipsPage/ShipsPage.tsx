import useShipsSearchParams from './hooks/useShipsSearchParams';
import { useShips } from '@api/ships';
import useInifniteScroll from 'hooks/useInfiniteScroll';
import styles from './ShipsPage.module.scss';
import SearchBar from '@pages/LaunchesPage/components/SearchBar';
import useReveal from 'hooks/useReveal';
import ShipCard from './compontents/ShipCard';

const ShipsPage = () => {
  const { filterState, handleSearch } = useShipsSearchParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useShips(filterState);

  const visible = useReveal({ isLoading });

  const ref = useInifniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const ships = data?.pages.flatMap((page) => page.docs) ?? [];

  if (visible) return <p>Loading ships...</p>;

  return (
    <div className={styles.container}>
      <h1>Ships</h1>

      <SearchBar
        value={filterState.search || ''}
        placeholder="Search ships by name"
        onSearchChange={handleSearch}
      />

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
      </div>

      <div ref={ref} style={{ height: 1 }} />

      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};

export default ShipsPage;
