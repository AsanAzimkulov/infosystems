import { FunctionComponent } from "react";
import styles from "./button1.module.css";



interface Props {
  children: JSX.Element[] | JSX.Element | string;
  variant: '1' | '2' | '3';
}

const Button1: FunctionComponent<Props> = ({ children, variant}) => {

  return (
    <div className={styles.container}>
      <div className={styles.wrap1}>
        {/* <div className={styles.wrap2}> */}
          <div className={`${styles.wrap3} ${styles.bg} ${styles[`bg${variant}`]}`}>
          {children}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Button1;
