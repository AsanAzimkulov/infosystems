import React from 'react';
import styles from './index.module.scss';
import MouseIconImage from "../../assets/icons/mouseIcon.svg";

const MouseIcon = () => {
  return (
    <section className={styles.root}>
      <img src={MouseIconImage} alt="Mouse icon" />
    </section>
  )
}

export default MouseIcon
