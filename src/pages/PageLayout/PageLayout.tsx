import {FC, ReactNode, useContext} from "react";
import { AppContext } from "../../context/AppContext.tsx";
import { TAppContext } from "../../types/TAppContext.ts";
import RadioInput from "../../components/UI/RadioInput/RadioInput.tsx";
import styles from "./PageLayout.module.css";

interface IPageLayout {
  title: string,
  children: ReactNode,
}

const PageLayout:FC<IPageLayout> = ({ title, children}) => {
  const { size, setSize } = useContext(AppContext) as TAppContext;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.toggler}>
        <RadioInput
          name={"size-radio"}
          label={"Малый размер"}
          value={"sm"}
          currentValue={size}
          onChange={setSize}
        />
        <RadioInput
          name={"size-radio"}
          label={"Большой размер"}
          value={"lg"}
          currentValue={size}
          onChange={setSize}
        />
      </div>
      <div className={styles.widgets_body}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;