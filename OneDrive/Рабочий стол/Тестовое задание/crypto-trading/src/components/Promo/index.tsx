import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import PromoMain from '../../assets/images/promo-main.svg';

type TProps = {
  anchor: string
}

const Promo = ({ anchor }: TProps) => {
  return (
    <section id={anchor} className={styles.root}>
      <div className={classNames(styles.wrapper, 'contentWrapper')}>
        <div className={styles.text}>
          <h2 className={styles.sectionTitle}>Crypto trading</h2>
          <h1 className={styles.title}> Engineers Meet <span> Traders _</span></h1>
          <h3 className={styles.subtitle}>Advanced crypto algorithmic trading and efficient
            cross-chain execution, at scale.</h3>
        </div>
        <div className={styles.picture}>
          <img src={PromoMain} alt="Scheme of efficient trading" className={styles.image} />
          <div className={styles.picture__element}></div>
        </div>
        <div className={styles.downBar}>
          <button className={styles.button}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Promo;
