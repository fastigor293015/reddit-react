import React from 'react';
import { EIcons, Icon } from '../../../Icon';
import styles from './menuskeleton.css';

export function MenuSkeleton() {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
        <Icon name={EIcons.menu} />
      </button>
    </div>
  );
}
