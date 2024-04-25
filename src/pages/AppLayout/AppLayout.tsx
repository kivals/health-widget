import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;