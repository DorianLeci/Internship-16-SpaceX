export const AppPaths = {
  HOME: '/',
  LAUNCHES: '/launches',
  LAUNCH_DETAILS: '/launches/:launchId',
  SHIP_DETAILS: '/ships/:shipId',
  SHIPS: '/ships',
  UNKNOWN: '*',
} as const;

export default AppPaths;
