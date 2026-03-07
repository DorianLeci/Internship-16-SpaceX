import { useQuery } from '@tanstack/react-query';
import type { NextLaunch } from '../types/NextLaunch';
import { api } from './index';

export const getNextLaunch = () => {
  return api.get<never, NextLaunch>('/launches/next');
};

export const useNextLaunch = () => {
  return useQuery({ queryKey: ['nextLaunch'], queryFn: getNextLaunch });
};
