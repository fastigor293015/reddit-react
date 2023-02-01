import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './textcontentskeleton.css';
import { TitleSkeleton } from './TitleSkeleton';
import { UserLinkSkeleton } from './UserLinkSkeleton';

export function TextContentSkeleton() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLinkSkeleton />
        <Skeleton className={styles.createdAt} />
      </div>
      <TitleSkeleton />
    </div>
  );
}
