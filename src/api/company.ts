import { useQuery } from '@tanstack/react-query';
import { api } from './index';
import type { Company } from '@app-types/Company';

export const getCompanyInfo = () => {
  return api.get<never, Company>('/company');
};

export const useCompanyInfo = () => {
  return useQuery({ queryKey: ['nextLaunch'], queryFn: getCompanyInfo });
};
