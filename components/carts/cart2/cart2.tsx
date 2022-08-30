import { FunctionComponent } from "react";
import styles from "./cart2.module.css";

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Cart2: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles["container"]}>
    {children}

  </div>;
};

export default Cart2;
