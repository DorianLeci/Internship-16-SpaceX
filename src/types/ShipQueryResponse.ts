import type { Ship } from './Ship';

export interface ShipQueryResponse {
  docs: Ship[];
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  nextPage?: number;
}
