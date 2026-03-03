import AppPaths from 'routes/paths';

interface NavItem {
  label: string;
  path: string;
}

export const NavItems: NavItem[] = [{ label: 'Home', path: AppPaths.HOME }];
