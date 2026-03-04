import { useQuery } from '@tanstack/react-query';
import type { NextLaunch } from '../types/NextLaunch';
import { api } from './index';

export const getNextLaunch = async () => {
  return await api.get<never, NextLaunch>('/launches/next');
};

export const useNextLaunch = () => {
  return useQuery({ queryKey: ['nextLaunch'], queryFn: getNextLaunch });
};
