import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu_list}>
          <li>
            <NavLink
              className={(navData) => navData.isActive ? styles.active : styles.menu_link}
              to='/pressure'
            >Давление
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => navData.isActive ? styles.active : styles.menu_link}
              to='/pulse'
            >Пульс
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => navData.isActive ? styles.active : styles.menu_link}
              to='/temperature'
            >Температура
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;