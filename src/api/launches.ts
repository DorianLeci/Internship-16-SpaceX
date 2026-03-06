import type { LaunchesResponse } from '@app-types/Launch';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { api } from '.';
import type { LaunchFilter } from '@app-types/LaunchFilter';

export const getLaunches = async (filter: LaunchFilter, query: any) => {
  return await api.post<never, LaunchesResponse>('/launches/query', {
    query,
    options: { page: filter.page, limit: filter.limit, sort: { date_utc: -1 } },
  });
};

export const useLaunches = (filter: LaunchFilter) => {
  const query: any = {};
  if (filter.search) query.name = { $regex: filter.search, $options: 'i' };

  switch (filter.filter) {
    case 'success':
      query.success = true;
      break;
    case 'failure':
      query.success = false;
      break;
    case 'upcoming':
      query.upcoming = true;
      break;
    default:
      break;
  }
  const queryKey = [
    'launches',
    filter.page,
    filter.limit,
    filter.search,
    filter.filter,
  ];

  return useQuery({
    queryKey,
    queryFn: () => getLaunches(filter, query),
    placeholderData: keepPreviousData,
    staleTime: 6000,
  });
};
