import React, { useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import ScrollIntoView from 'react-scroll-into-view';

type TLink = {
  title: string,
  href: string
}
type TProps = {
  links: Array<TLink>
}

const Header = ({ links }: TProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className={classNames(styles.root, {
      [styles.root_opened]: isOpened
    })}>
      <div className={styles.wrapper}>
        <a href="#" className={styles.logo}>
          C
        </a>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {
              links.map(({ title, href }) => (
                <li className={styles.item} key={title}>
                  <ScrollIntoView selector={`#${href}`} style={{cursor: "pointer"}}>
                    <p className={styles.item__link}>{title}</p>
                  </ScrollIntoView>
                </li>
              ))
            }
          </ul>
          <button className={styles.burgerMenu} onClick={() => setIsOpened(prev => !prev)}>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Header
