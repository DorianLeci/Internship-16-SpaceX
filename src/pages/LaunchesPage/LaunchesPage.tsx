import { useLaunches } from '@api/launches';
import { Filter } from '@app-types/Filter';
import type { LaunchFilter } from '@app-types/LaunchFilter';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import styles from './LaunchesPage.module.scss';
import LaunchCard from './components/LaunchCard';
import Pagination from '@components/Pagination';
import useReveal from 'hooks/useReveal';
import SectionError from '@components/SectionError';
import LaunchesPageSkeleton from './Skeleton/LaunchesPageSkeleton';

export const PAGE_LIMIT = 20;

const LaunchesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') as Filter | undefined;
  const pageParam = parseInt(searchParams.get('page') || '1', 10);

  const [filter, setFilter] = useState<LaunchFilter>({
    page: pageParam,
    search,
    limit: PAGE_LIMIT,
    filter: filterParam,
  });

  const { data, isLoading, isError, refetch } = useLaunches(filter);
  const visible = useReveal({ isLoading });

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (filter.filter) params.set('filter', filter.filter);
      else params.delete('filter');

      if (filter.search) params.set('search', filter.search);
      else params.delete('search');

      params.set('page', filter.page.toString());

      return params;
    });
  }, [filter]);

  const handleSearch = useCallback((newSearch: string) => {
    setFilter((prev) => ({ ...prev, search: newSearch, page: 1 }));
  }, []);

  const handleFilterChange = useCallback(
    (newFilterValue: Filter | undefined) => {
      setFilter((prev) => ({ ...prev, filter: newFilterValue, page: 1 }));
    },
    [],
  );

  const handlePageChange = useCallback((newPage: number) => {
    setFilter((prev) => ({ ...prev, page: newPage }));
  }, []);

  if (visible) return <LaunchesPageSkeleton />;

  if (isError || !data) {
    return <SectionError message="Error loading launches!" onRetry={refetch} />;
  }

  return (
    <div className={styles.container}>
      <h1>Launches</h1>
      <SearchBar onSearchChange={handleSearch} value={filter.search || ''} />
      <FilterBar onFilterChange={handleFilterChange} />
      <div className={styles.cardContainer}>
        {data?.docs.map((launch) => (
          <LaunchCard
            key={launch.id}
            name={launch.name}
            success={launch.success}
            upcoming={launch.upcoming}
            details={launch.details}
          />
        ))}
      </div>

      <Pagination
        pageCount={data?.totalPages}
        currentPage={filter.page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default LaunchesPage;
