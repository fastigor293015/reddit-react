import React from 'react';
import { ActionsSkeleton } from './ActionsSkeleton';
import { CommentsButtonSkeleton } from './CommentsButtonSkeleton';
import { KarmaCounterSkeleton } from './KarmaCounterSkeleton';
import styles from './controlsskeleton.css';

export function ControlsSkeleton() {
  return (
    <div className={styles.controls}>
      <KarmaCounterSkeleton />
      <CommentsButtonSkeleton />
      <ActionsSkeleton />
    </div>
  );
}
