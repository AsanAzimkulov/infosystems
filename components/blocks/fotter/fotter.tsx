import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./fotter.module.css";

interface Props {
}

const Fotter: FunctionComponent<Props> = ({ }) => {
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>

       		<div className={styles.topArea}>
       			<img className={styles.logo} src="/logo.png" alt=""></img>
             <div className={styles.topAreaButton}>
               <Button1 variant="2">JOIN DISCORD</Button1>
             </div>
             <div className={styles.topAreaButton}>
               <Button1 variant="2">FOLLOW US</Button1>
             </div>
       		</div>

       		<img className={styles.line} src="/images/line.svg" />

       		<div className={styles.bottomArea}>
            <div className={styles.bottomCell + ' ' + styles.bottomCellFirst}>Copyright © 2022 Veemans</div>
            <div className={styles.bottomCell + ' ' + styles.bottomCellMiddle}>
              <img src="/images/fotterSocial.svg" />
            </div>
            <div className={styles.bottomCell + ' ' + styles.bottomCellLast}>
              <a href="#">Cookies Policy</a>
              <a href="#">Privacy & Policy</a>
              <a href="#">Terms & Condition</a>
            </div>
       		</div>
       </div>
    </div>
  );
};

export default Fotter;
