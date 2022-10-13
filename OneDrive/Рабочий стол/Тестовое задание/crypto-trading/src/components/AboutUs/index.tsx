import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

type TProps = {
  anchor: string
}

const AboutUs = ({ anchor }: TProps) => {
  return (
    <section className={classNames('contentWrapper', styles.root)} id={anchor}>
      <div className={styles.wrapper}>
        <div className={styles.titles}>
          <h2 className={styles.sectionTitle}>
            about us
          </h2>
          <h3 className={styles.title}>Global
            technologies</h3>
        </div>

        <div className={styles.doubleColumns}>
          <div className={styles.chart}>
            <div className={styles.chart__verticalLine}></div>
            <div className={styles.chart__verticalLine}></div>
            <div className={styles.chart__verticalLine}></div>
            <div className={styles.chart__top} >
              <div className={styles.chartItem}></div>
              <div className={styles.chartItem}></div>
              <div className={styles.chartItem}></div>
            </div>
            <div className={styles.chart__middleLine}>
            </div>
            <div className={styles.chart__bottom}>
              <div className={styles.chartItem}></div>
              <div className={styles.chartItem}></div>
              <div className={styles.chartItem}></div>
            </div>
            <div className={styles.scale}>
              <p className={styles.scaleItem}>10</p>
              <p className={styles.scaleItem}>20</p>
              <p className={styles.scaleItem}>30</p>
              <p className={styles.scaleItem}>40</p>
            </div>
          </div>
          <div className={styles.text}>
            <h4 className={styles.text__title}>Level 1</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.
              </li>
              <li className={styles.listItem}>
                Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.
              </li>
            </ul>
            <a href='#' className={styles.button}>Start Now</a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutUs
