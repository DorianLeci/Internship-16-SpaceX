import type { ShipFilter } from '@app-types/ShipFilter';
import type { ShipQueryResponse } from '@app-types/ShipQueryResponse';
import { api } from '.';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

export const getShips = async (page: number, limit: number, query: any) => {
  return await api.post<never, ShipQueryResponse>('/ships/query', {
    query,
    options: { page, limit: limit, sort: { date_utc: -1 } },
  });
};

export const useShips = (filter: ShipFilter) => {
  const query: any = {};
  if (filter.search) query.name = { $regex: filter.search, $options: 'i' };

  const queryKey = ['ships', filter.limit, filter.search];

  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) => getShips(pageParam, filter.limit, query),
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage : undefined,
    staleTime: 5 * 60 * 1000,
    initialPageParam: 1,
  });
};
