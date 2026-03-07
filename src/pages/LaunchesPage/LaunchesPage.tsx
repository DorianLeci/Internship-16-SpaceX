import { useLaunches } from '@api/launches';
import FilterBar from './components/FilterBar';
import styles from './LaunchesPage.module.scss';
import LaunchCard from './components/LaunchCard';
import Pagination from '@components/Pagination';
import useReveal from 'hooks/useReveal';
import Error from '@components/Error';
import LaunchesPageSkeleton from './Skeleton/LaunchesPageSkeleton';
import useLaunchesPagination from '@pages/LaunchesPage/hooks/useLaunchPagination';
import EmptyState from '@components/EmptyState';
import FadeInUp from '@components/FadeInUp';
import SearchBar from './components/SearchBar';
import UpdateState from '@components/UpdateState';

export const PAGE_LIMIT = 20;

const LaunchesPage = () => {
  const { filterState, handleSearch, handleFilterChange, handlePageChange } =
    useLaunchesPagination();

  const { data, isLoading, isError, isFetching, refetch } =
    useLaunches(filterState);
  const visible = useReveal({ isLoading });

  if (visible) return <LaunchesPageSkeleton />;

  if (isFetching) return <UpdateState />;

  if (isError || !data) {
    return <Error message="Error loading launches!" onRetry={refetch} />;
  }

  const isEmpty = !visible && data.docs.length === 0;

  return (
    <div className={styles.container}>
      <h1>Launches</h1>
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

      <FadeInUp className={styles.cardContainer}>
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
      </FadeInUp>

      <Pagination
        pageCount={data.totalPages}
        currentPage={filterState.page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default LaunchesPage;
