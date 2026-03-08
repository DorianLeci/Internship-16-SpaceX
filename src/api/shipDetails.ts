import { api } from '.';
import type { ShipDetails } from '@app-types/ShipDetails';
import { useQuery } from '@tanstack/react-query';

export const getShipDetails = async (shipId: string) => {
  return api.get<never, ShipDetails>(`/ships/${shipId}`);
};

export const useShipDetails = (shipId: string) => {
  return useQuery({
    queryKey: ['shipDetails', shipId],
    queryFn: () => getShipDetails(shipId),
  });
};
