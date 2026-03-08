import type { Ship } from './Ship';

export interface ShipDetails extends Ship {
  homePort?: string;
  roles?: string[] | null;
  massKg?: number | null;
  yearBuilt?: number | null;
  link?: string | null;
  image?: string | null;
}
