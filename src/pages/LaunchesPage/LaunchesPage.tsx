import { useLaunches } from '@api/launches';
import { Filter } from '@app-types/Filter';
import type { LaunchFilter } from '@app-types/LaunchFilter';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from './sections/components/SearchBar';
import FilterBar from './sections/components/FilterBar';
import styles from './LaunchesPage.module.scss';
import LaunchCard from './sections/components/LaunchCard';
import Pagination from '@components/Pagination';
import useReveal from 'hooks/useReveal';
import SectionError from '@components/SectionError';

const LaunchesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') as Filter | undefined;
  const pageParam = parseInt(searchParams.get('page') || '1', 10);

  const [filter, setFilter] = useState<LaunchFilter>({
    page: pageParam,
    search,
    limit: 20,
    filter: filterParam,
  });

  const { data, isLoading, isError, refetch } = useLaunches(filter);

  useEffect(() => {
    const params = new URLSearchParams();

    if (filter.filter) params.set('filter', filter.filter);
    if (filter.search) params.set('search', filter.search);

    params.set('page', filter.page.toString());
    setSearchParams(params);
  }, [filter, setSearchParams]);

  const handleSearch = useCallback(
    (newSearch: string) => {
      setFilter({ ...filter, search: newSearch, page: 1 });
    },
    [filter],
  );

  const handleFilterChange = useCallback(
    (newFilterValue: Filter | undefined) => {
      setFilter({ ...filter, filter: newFilterValue, page: 1 });
    },
    [filter],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      setFilter({ ...filter, page: newPage });
    },
    [filter],
  );

  if (isError || !data) {
    return <SectionError message="Error loading launches!" onRetry={refetch} />;
  }

  return (
    <div className={styles.container}>
      <h1>Launches</h1>
      <SearchBar onSearchChange={handleSearch} />
      <FilterBar onFilterChange={handleFilterChange} />
      {data?.docs.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
      <Pagination
        pageCount={data?.totalPages}
        currentPage={filter.page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default LaunchesPage;
