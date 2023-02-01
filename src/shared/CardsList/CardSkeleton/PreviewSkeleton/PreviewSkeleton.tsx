import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './previewskeleton.css';

export function PreviewSkeleton() {
  return (
    <div className={styles.preview}>
      <Skeleton className={styles.previewImg} />
    </div>
  );
}
