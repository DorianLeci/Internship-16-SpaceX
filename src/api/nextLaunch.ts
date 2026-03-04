import { useQuery } from '@tanstack/react-query';
import type { Launch } from '../types/Launch';
import { api } from './index';

export const getNextLaunch = () => {
  const res = api.get<never, Launch>('/launches/next');
  return res;
};

export const useNextLaunch = () => {
  return useQuery({ queryKey: ['nextLaunch'], queryFn: getNextLaunch });
};
