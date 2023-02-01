import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './savebuttonskeleton.css';

export function SaveButtonSkeleton() {
  return (
    <button className={styles.saveButton}>
      <Skeleton width={20} height={20} circle />
    </button>
  );
}
