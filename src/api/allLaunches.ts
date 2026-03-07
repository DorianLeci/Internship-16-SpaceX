import type { Launch } from '@app-types/Launch';
import { api } from '.';
import { useQuery } from '@tanstack/react-query';

export const getAllLaunches = () => {
  return api.get<never, Launch[]>('/launches');
};

export const useAllLaunches = () => {
  return useQuery({ queryKey: ['allLaunches'], queryFn: getAllLaunches });
};
