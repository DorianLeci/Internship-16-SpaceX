import { useQuery } from '@tanstack/react-query';
import { api } from './index';
import type { Company } from '@app-types/Company';

export const getCompanyInfo = async () => {
  const res = api.get<never, Company>('/company');
  await new Promise((r) => setTimeout(r, 1000));
  return res;
};

export const useCompanyInfo = () => {
  return useQuery({ queryKey: ['nextLaunch'], queryFn: getCompanyInfo });
};
