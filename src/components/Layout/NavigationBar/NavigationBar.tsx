import { NavLink } from 'react-router-dom';
import { NavItems } from '../helpers/NavItems';
import styles from './NavigationBar.module.scss';
import { useState } from 'react';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navContainer}>
      <button
        className={`hamburger hamburger--spin ${isOpen ? 'is-active' : ''}`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={`${styles.linkContainer} ${isOpen ? styles.open : ''}`}>
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
      </div>
    </nav>
  );
};

export default NavigationBar;
