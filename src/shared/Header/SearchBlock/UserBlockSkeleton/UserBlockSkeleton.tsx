import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './userblockskeleton.css';

export function UserBlockSkeleton() {
  return (
    <a className={styles.userBox}>
      <div className={styles.avatarBox}>
        <Skeleton className={styles.avatarImage} circle />
      </div>

      <Skeleton className={styles.username} />
    </a>
  );
}
