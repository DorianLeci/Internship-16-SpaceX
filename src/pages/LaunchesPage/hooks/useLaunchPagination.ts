import { useSearchParams } from 'react-router-dom';
import { PAGE_LIMIT } from '@pages/LaunchesPage/LaunchesPage';
import { useCallback, useEffect, useState } from 'react';
import type { LaunchFilter } from '@app-types/LaunchFilter';
import type { Filter } from '@app-types/Filter';

const useLaunchesPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') as Filter | undefined;
  const pageParam = parseInt(searchParams.get('page') || '1', 10);

  const [filterState, setFilterState] = useState<LaunchFilter>({
    page: pageParam,
    search,
    limit: PAGE_LIMIT,
    filter: filterParam,
  });

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (filterState.filter) params.set('filter', filterState.filter);
      else params.delete('filter');

      if (filterState.search) params.set('search', filterState.search);
      else params.delete('search');

      params.set('page', filterState.page.toString());

      return params;
    });
  }, [filterState]);

  const handleSearch = useCallback((newSearch: string) => {
    setFilterState((prev) => ({ ...prev, search: newSearch, page: 1 }));
  }, []);

  const handleFilterChange = useCallback(
    (newFilterValue: Filter | undefined) => {
      setFilterState((prev) => ({ ...prev, filter: newFilterValue, page: 1 }));
    },
    [],
  );

  const handlePageChange = useCallback((newPage: number) => {
    setFilterState((prev) => ({ ...prev, page: newPage }));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [filterState.page]);

  return {
    filterState,
    handleSearch,
    handleFilterChange,
    handlePageChange,
  };
};

export default useLaunchesPagination;
