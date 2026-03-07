import type { Filter } from './Filter';
import type { ShipFilter } from './ShipFilter';

export interface LaunchFilter extends ShipFilter {
  page: number;
  filter?: Filter;
}
