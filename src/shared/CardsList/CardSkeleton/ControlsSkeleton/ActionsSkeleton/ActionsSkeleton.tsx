import React from 'react';
import styles from './actionsskeleton.css';
import { SaveButtonSkeleton } from './SaveButtonSkeleton';
import { ShareButtonSkeleton } from './ShareButtonSkeleton';

export function ActionsSkeleton() {
  return (
    <div className={styles.actions}>
      <ShareButtonSkeleton />
      <SaveButtonSkeleton />
    </div>
  );
}
