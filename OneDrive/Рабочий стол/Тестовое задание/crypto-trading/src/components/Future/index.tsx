import React from 'react';
import styles from './index.module.scss';
import LogoImage from '../../assets/icons/BlockLogo.svg'
import classNames from 'classnames';

type TProps = {
  anchor: string
}

const Future = ({ anchor }: TProps) => {
  return (
    <section id={anchor} className={classNames(styles.root, 'contentWrapper')}>
      <div className={styles.wrapper}>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.block__item}>
              Artificial Intelligence
            </div>
            <div className={styles.block__item}>
              Storage Networks
            </div>
            <div className={styles.block__item}>
              P2P Networks
            </div>
          </div>
          <div className={styles.block}>
            <div className={classNames(styles.block__item, styles.block__item_nopadding)}><p className={styles.block__item__innerContainer}>Public Data</p></div>
            <div className={styles.block__item}>Encrypted Private Data *</div>
          </div>
          <div className={styles.block}>  
            <div className={styles.block__logo} >
              <img src={LogoImage} alt="Logo" />
            </div>
            <p className={styles.block__desc}>Easy to use digital service and exclusive personal service for our active traders</p>
            <div className={styles.block__item}>Indexing</div>
            <div className={styles.block__item}>API</div>
          </div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>The future Cryptocurrency trading <span> platform</span></h2>
          <p className={styles.description}>Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from charts.</p>
          <a href="#" className={styles.link}>Learn more</a>
        </div>
      </div>


    </section>
  )
}

export default Future;
