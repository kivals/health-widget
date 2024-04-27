import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu_list}>
          <li>
            <NavLink
              className={(navData) =>
                classNames(styles.menu_link, { [styles.active]: navData.isActive })}
              to='/pressure'
            >
              Давление
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                classNames(styles.menu_link, { [styles.active]: navData.isActive })}
              to='/pulse'
            >
              Пульс
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                classNames(styles.menu_link, { [styles.active]: navData.isActive })}
              to='/temperature'
            >
              Температура
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={(navData) =>
                classNames(styles.menu_link, { [styles.active]: navData.isActive })}
              to='/graphics'
            >
              Графики
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
