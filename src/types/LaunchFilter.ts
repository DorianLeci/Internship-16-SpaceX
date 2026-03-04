import type { Filter } from './Filter';

export interface LaunchFilter {
  page: number;
  limit: number;
  search?: string;
  filter?: Filter;
}
