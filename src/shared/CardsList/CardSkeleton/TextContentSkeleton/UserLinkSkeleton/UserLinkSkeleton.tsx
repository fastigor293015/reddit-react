import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './userlinkskeleton.css';

export function UserLinkSkeleton() {
  return (
    <div className={styles.userLink}>
      <Skeleton className={styles.avatar} circle />
      <Skeleton className={styles.username} />
    </div>
  );
}
