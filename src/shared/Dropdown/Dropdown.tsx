import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  coords: {
    top: number;
    left: number;
  };
  children: React.ReactNode;
  isOpened: boolean;
  handleOpen: () => void;
}

const NOOP = () => {};

export function Dropdown(props: IDropdownProps) {
  const {
    coords,
    children,
    isOpened,
    handleOpen
  } = props;

  // useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  // useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const node = document.getElementById('dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.container} style={coords}>
      {
        isOpened &&
          <div className={styles.listContainer}>
            <div className={styles.list} onClick={handleOpen}>
              {children}
            </div>
          </div>
      }
    </div>
    ), node);
}
