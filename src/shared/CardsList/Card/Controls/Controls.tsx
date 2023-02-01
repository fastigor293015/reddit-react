import React from 'react';
import { Actions } from './Actions';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';

interface IControlsProps {
  karma: number;
  commentsNumber: number;
}

export function Controls({ karma, commentsNumber }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter karma={karma} />
      <CommentsButton commentsNumber={commentsNumber} />
      <Actions />
    </div>
  );
}
