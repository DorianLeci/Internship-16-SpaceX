import type { LaunchDetails } from './LaunchDetails';
import type { Rocket } from './Rocket';

export interface LaunchDetailsResponse extends LaunchDetails {
  rocketData: Rocket;
}
