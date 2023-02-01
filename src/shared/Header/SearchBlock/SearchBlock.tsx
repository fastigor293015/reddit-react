import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';
import { UserBlockSkeleton } from './UserBlockSkeleton';

export function SearchBlock() {
  const { data, loading } = useUserData();
  return (
    <div className={styles.searchBlock}>
      {
        loading
        ? <UserBlockSkeleton />
        : <UserBlock avatarSrc={data.iconImg} username={data.name} />
      }
    </div>
  );
}
