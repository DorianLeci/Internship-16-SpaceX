import { useQuery } from '@tanstack/react-query';
import type { Launch } from '../types/Launch';
import { api } from './index';

export const getCompany = () => {
  return api.get<never, Launch>('/company');
};

export const useCompany = () => {
  return useQuery({ queryKey: ['nextLaunch'], queryFn: getCompany });
};
