import React from 'react';
import { TextContentSkeleton } from './TextContentSkeleton/TextContentSkeleton';
import { PreviewSkeleton } from './PreviewSkeleton/PreviewSkeleton';
import { MenuSkeleton } from './MenuSkeleton/MenuSkeleton';
import { ControlsSkeleton } from './ControlsSkeleton';
import styles from './cardskeleton.css';

export function CardSkeleton() {
  return (
    <li className={styles.card}>
    <TextContentSkeleton />
    <PreviewSkeleton />
    <MenuSkeleton />
    <ControlsSkeleton />
  </li>
  )
}
