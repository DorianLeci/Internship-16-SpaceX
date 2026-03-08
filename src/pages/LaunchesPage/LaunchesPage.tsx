import { useLaunches } from '@api/launches';
import EmptyState from '@components/EmptyState';
import Error from '@components/Error';
import FadeInUp from '@components/FadeInUp';
import Pagination from '@components/Pagination';
import UpdateState from '@components/UpdateState';
import useLaunchesPagination from '@pages/LaunchesPage/hooks/useLaunchPagination';
import useReveal from 'hooks/useReveal';
import FilterBar from './components/FilterBar';
import LaunchCard from './components/LaunchCard';
import SearchBar from './components/SearchBar';
import styles from './LaunchesPage.module.scss';
import LaunchesPageSkeleton from './Skeleton/LaunchesPageSkeleton';

export const PAGE_LIMIT = 20;

const LaunchesPage = () => {
  const { filterState, handleSearch, handleFilterChange, handlePageChange } =
    useLaunchesPagination();

  const { data, isLoading, isError, isFetching, refetch } =
    useLaunches(filterState);

  const visible = useReveal({ isLoading });
  const fetching = useReveal({ isLoading: isFetching, minVisibleTime: 200 });

  if (visible) return <LaunchesPageSkeleton />;

  if (isError || !data) {
    return <Error message="Error loading launches!" onRetry={refetch} />;
  }

  const isEmpty = !visible && data.docs.length === 0;

  return (
    <FadeInUp className={styles.container}>
      <h1 className={styles.title}>Launches</h1>
      <SearchBar
        onSearchChange={handleSearch}
        placeholder="Search launches by name"
        value={filterState.search || ''}
      />
      <FilterBar
        onFilterChange={handleFilterChange}
        currentFilter={filterState.filter}
      />
      {isEmpty && <EmptyState message="No launches found" />}

      <div className={styles.cardContainer}>
        {data?.docs.map((launch) => (
          <LaunchCard
            key={launch.id}
            id={launch.id}
            name={launch.name}
            success={launch.success}
            upcoming={launch.upcoming}
            details={launch.details}
          />
        ))}
        {fetching && <UpdateState message="Loading page..." />}
      </div>

      <Pagination
        pageCount={data.totalPages}
        currentPage={filterState.page}
        onPageChange={handlePageChange}
      />
    </FadeInUp>
  );
};

export default LaunchesPage;
