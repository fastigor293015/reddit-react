import React from 'react';
import { EIcons, Icon } from '../../../Icon';
import styles from './commentskeleton.css';
import Skeleton from 'react-loading-skeleton';

export function CommentSkeleton() {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.karma}>
          <button className={styles.up}>
            <Icon name={EIcons.arrowUp} />
          </button>
          <button className={styles.down}>
            <Icon name={EIcons.arrowUp} />
          </button>
        </div>
        <div className={styles.top}>
          <Skeleton className={styles.avatar} circle />
          <Skeleton className={styles.userLink} />
          <Skeleton className={styles.created} />
          <Skeleton className={styles.league} />
        </div>
        <Skeleton className={styles.message} />
        <div className={styles.controls}>
          <Skeleton className={styles.controlBtn} />
          <Skeleton className={styles.controlBtn} />
          <Skeleton className={styles.controlBtn} />
        </div>
      </div>
    </>
  );
}
