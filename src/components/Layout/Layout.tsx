import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';
import { NavItems } from './helpers/NavItems';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Movie Explorer</h1>
        <nav className={styles.nav}>
          {NavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.link}  ${isActive ? styles.active : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
