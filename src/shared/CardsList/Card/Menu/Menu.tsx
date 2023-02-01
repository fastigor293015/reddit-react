import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../../../Dropdown';
import { EIcons, Icon } from '../../../Icon';
import { EColors, Text } from '../../../Text';
import styles from './menu.css';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 1000000,
  });
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateCoords() {
      const screenWidth = document.documentElement.clientWidth;
      console.log(screenWidth);
      screenWidth >= 1024 ? setCoords({
        top: menuContainerRef.current?.getBoundingClientRect() ? menuContainerRef.current?.getBoundingClientRect().y + 70 + document.documentElement.scrollTop : 0,
        left: menuContainerRef.current?.getBoundingClientRect() ? menuContainerRef.current?.getBoundingClientRect().x + 15 : 0,
      }) : setCoords({
        top: menuContainerRef.current?.getBoundingClientRect() ? menuContainerRef.current?.getBoundingClientRect().y + 32 + document.documentElement.scrollTop : 0,
        left: menuContainerRef.current?.getBoundingClientRect() ? menuContainerRef.current?.getBoundingClientRect().x + 25 : 0,
      })
    }
    setTimeout(() => {
      updateCoords();
    }, 1000)

    window.addEventListener('resize', updateCoords);

    return () => window.removeEventListener('resize', updateCoords);
  }, [])

  const handleOpen = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <div className={styles.menu} ref={menuContainerRef}>
      <button className={styles.menuButton} onClick={handleOpen}>
        <Icon name={EIcons.menu} />
      </button>
      <Dropdown
        isOpened={isMenuOpened}
        handleOpen={handleOpen}
        coords={coords}
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId={'1234'} />
          <button className={styles.closeButton}>
            <Text size={12} tabletSize={14} desktopSize={14} color={EColors.gray66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
