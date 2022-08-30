import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./logo.module.css";

const Logo: FunctionComponent = () => {
  return (
    <div className={`${styles.containerBorder} ${styles.polygon}`}>
      <div className={`${styles.container} ${styles.polygon}`}>
        <Link href="/">
          <a>
            <Image src="/logo.png" width={155} height={42} alt=""></Image>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
