import type { Company } from '@app-types/Company';
import { useQuery } from '@tanstack/react-query';
import { api } from './index';

export const getCompanyInfo = () => {
  return api.get<never, Company>('/company');
};

export const useCompanyInfo = () => {
  return useQuery({ queryKey: ['companyInfo'], queryFn: getCompanyInfo });
};
