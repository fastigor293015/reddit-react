import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './titleskeleton.css';

export function TitleSkeleton() {
  return (
    <h2 className={styles.title}>
      <Skeleton className={styles.firstRow} />
      <Skeleton className={styles.secondRow} />
    </h2>
  );
}
