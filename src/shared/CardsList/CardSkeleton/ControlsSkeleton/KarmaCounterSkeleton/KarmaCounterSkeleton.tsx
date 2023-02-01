import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { EIcons, Icon } from '../../../../Icon';
import styles from './karmacounterskeleton.css';

export function KarmaCounterSkeleton() {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon name={EIcons.arrowUp} />
      </button>
      <Skeleton className={styles.karmaValue} />
      <button className={styles.down}>
        <Icon name={EIcons.arrowUp} />
      </button>
    </div>
  );
}
