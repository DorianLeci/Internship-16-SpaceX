import type { LaunchDetails } from '@app-types/LaunchDetails';
import { api } from '.';
import type { Rocket } from '@app-types/Rocket';
import type { LaunchDetailsResponse } from '@app-types/LaunchDetailsResponse';
import { useQuery } from '@tanstack/react-query';

export const getLaunchDetails = async (
  launchId: string,
): Promise<LaunchDetailsResponse> => {
  const launch = await api.get<never, LaunchDetails>(`/launches/${launchId}`);
  const rocket = await api.get<never, Rocket>(`/rockets/${launch.rocket}`);

  return { ...launch, rocketData: rocket };
};

export const useLaunchDetails = (launchId: string) => {
  return useQuery<LaunchDetailsResponse>({
    queryKey: ['launchDetails', launchId],
    queryFn: () => getLaunchDetails(launchId),
  });
};
