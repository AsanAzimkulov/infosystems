import React, { MutableRefObject, useRef } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import PostComputingImage from '../../assets/icons/posts-main-1.svg';
import PostComputingMobileImage from '../../assets/icons/posts-main-1-m.svg';
import PostMicroschemeImage from '../../assets/icons/posts-main-2.svg';
import PostMicroschemeMobileImage from '../../assets/icons/posts-main-2-m.svg';
import useWindowSize from '../../hooks/useWindowSize';
import { Animation3dOnHover } from '../../utils/Animations/Animate3dOnHover';

type TProps = {
  anchor: string
}

const Posts = ({ anchor }: TProps) => {
  const { width } = useWindowSize();
  const isMobile = width && width <= 991;

  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);
  const thirdCardRef = useRef<HTMLDivElement>(null);
  const fourthCardRef = useRef<HTMLDivElement>(null);

  const createAnimation = (cardRef: MutableRefObject<HTMLElement | null>) => {
    if (cardRef.current) {
      Animation3dOnHover(cardRef.current);
    }
  }

  if (firstCardRef.current && secondCardRef.current && thirdCardRef.current && fourthCardRef.current) {
    createAnimation(firstCardRef);
    createAnimation(secondCardRef);
    createAnimation(thirdCardRef);
    createAnimation(fourthCardRef);

  }


  return (
    <section className={classNames(styles.root, 'contentWrapper')} id={anchor}>
      <div className={styles.wrapper}>
        <div className={classNames(styles.item, styles.item_big)} ref={firstCardRef}>
          <div className={styles.itemBorder}>
            <div className={classNames(classNames(styles.itemInner, 'glow'), 'glow')}>
              <div className={styles.picture}><img src={isMobile ? PostComputingMobileImage : PostComputingImage} alt="" className={styles.image} /></div>
              <div className={styles.text}>
                <h2 className={styles.title}>Spot & Margin</h2>
                <h3 className={styles.title_big}>Trade <span>200+<br /></span>
                  pairs with up<br />
                  to 10x leverage</h3>
                <a href="#" className={styles.link}>Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={classNames(styles.item, styles.item_small)} ref={secondCardRef}>
            <div className={styles.itemBorder}>
              <div className={classNames(styles.itemInner, 'glow')}>
                <div className={styles.text}>

                  <h2 className={styles.title}>Derivatives</h2>
                  <h3 className={styles.title_big}>40+ quarterly futures and contracts</h3>
                  <a href="#" className={styles.link}>Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles.item, styles.item_small)} ref={thirdCardRef}>
            <div className={styles.itemBorder}>
              <div className={classNames(styles.itemInner, 'glow')}>
                <div className={styles.text}>
                  <h2 className={styles.title}>Trading Arena</h2>
                  <h3 className={styles.title_big}>Prize pools worth up to  USD 1,000,000</h3>
                  <a href="#" className={styles.link}>Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles.item, styles.item_big)} ref={fourthCardRef}>
            <div className={styles.itemBorder}>
              <div className={classNames(styles.itemInner, 'glow')}>
                <div className={styles.text}>
                  <h2 className={styles.title}>mobile app</h2>
                  <h3 className={styles.title_big}>Trade anytime,
                    anywhere</h3>
                  <a href="#" className={styles.link}>Learn more</a>
                </div>
                <div className={styles.picture}><img src={isMobile ? PostMicroschemeMobileImage : PostMicroschemeImage} alt="" className={styles.image} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Posts
