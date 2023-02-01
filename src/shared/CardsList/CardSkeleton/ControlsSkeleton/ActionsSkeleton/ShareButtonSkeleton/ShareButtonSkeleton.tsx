import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './sharebuttonskeleton.css';

export function ShareButtonSkeleton() {
  return (
    <button className={styles.shareButton}>
      <Skeleton width={20} height={20} circle />
    </button>
  );
}
