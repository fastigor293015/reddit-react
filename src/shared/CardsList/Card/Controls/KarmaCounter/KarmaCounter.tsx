import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './karmacounter.css';

interface IKarmaCounter {
  karma: number;
}

export function KarmaCounter({ karma }: IKarmaCounter) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon name={EIcons.arrowUp} />
      </button>
      <span className={styles.karmaValue}>{karma}</span>
      <button className={styles.down}>
        <Icon name={EIcons.arrowUp} />
      </button>
    </div>
  );
}
