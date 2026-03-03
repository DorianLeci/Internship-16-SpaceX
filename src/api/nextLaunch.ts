import { useQuery } from '@tanstack/react-query';
import type { Launch } from '../types/Launch';
import { api } from './index';

export const getNextLaunch = () => {
  return api.get<never, Launch>('/launches/next');
};

export const useNextLaunch = () => {
  return useQuery({ queryKey: ['nextLaunch'], queryFn: getNextLaunch });
};
