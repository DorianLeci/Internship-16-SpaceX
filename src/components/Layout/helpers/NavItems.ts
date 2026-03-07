import AppPaths from 'routes/paths';

interface NavItem {
  label: string;
  path: string;
}

export const NavItems: NavItem[] = [
  {
    label: 'Home',
    path: AppPaths.HOME,
  },
  {
    label: 'Launches',
    path: AppPaths.LAUNCHES,
  },
  {
    label: 'Ships',
    path: AppPaths.SHIPS,
  },
];
