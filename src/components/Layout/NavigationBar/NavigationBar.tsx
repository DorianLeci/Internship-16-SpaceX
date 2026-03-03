import { NavLink } from 'react-router-dom';
import { NavItems } from '../helpers/NavItems';
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
  return (
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
  );
};

export default NavigationBar;
