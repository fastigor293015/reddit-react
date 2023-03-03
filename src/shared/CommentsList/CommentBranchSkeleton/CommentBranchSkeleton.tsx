import React from 'react';
import styles from './commentbranchskeleton.css';

interface ICommentBranchProps {
  children: React.ReactNode;
}

export function CommentBranchSkeleton({ children }: ICommentBranchProps) {
  return (
    <div className={styles.branch}>
      <div className={styles.line}></div>
      {children}
    </div>
  );
}
