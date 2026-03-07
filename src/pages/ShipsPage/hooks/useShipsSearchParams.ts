import type { ShipFilter } from '@app-types/ShipFilter';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PAGE_LIMIT = 20;

const useShipsSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';

  const [filterState, setFilterState] = useState<ShipFilter>({
    search,
    limit: PAGE_LIMIT,
  });

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (filterState.search) params.set('search', filterState.search);
      else params.delete('search');

      return params;
    });
  }, [filterState]);

  const handleSearch = useCallback((newSearch: string) => {
    setFilterState((prev) => ({ ...prev, search: newSearch }));
  }, []);

  return {
    filterState,
    handleSearch,
  };
};

export default useShipsSearchParams;
