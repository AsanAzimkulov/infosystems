import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./burger-menu.module.css";

const BurgerMenu: FunctionComponent = () => {
  return (
    <div className={`${styles.containerBorder} ${styles.polygon}`}>
      <div className={`${styles.container} ${styles.polygon}`}>
      	<div className={ styles.menuIcon }>
        	<img src="/icons/burger.svg" width={28} alt="" />
      	</div>
      	<div className={ styles.menuArea }>
      		<a href="#" className={ styles.menuLink }>Home</a>
      		<a href="#" className={ styles.menuLink }>Papper</a>
      		<a href="#" className={ styles.menuLink }>How does it work</a>
      	</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
