import React, { useState } from 'react';
import { EIcons, Icon } from '../../Icon';
import styles from './commentbranch.css';

interface ICommentBranchProps {
  children: React.ReactNode;
}

export function CommentBranch({ children }: ICommentBranchProps) {
  const [isBranchCollapsed, setIsBranchCollapsed] = useState(false);

  function handleClick() {
    setIsBranchCollapsed(!isBranchCollapsed);
  }

  return (
    <div className={`${styles.branch}${isBranchCollapsed ? ` ${styles.collapsed}` : ''}`}>
      {
        <>
          <button className={`${styles.expandBtn}${!isBranchCollapsed ? ` ${styles.hidden}`: ''}`} onClick={handleClick}>
            <Icon name={EIcons.expand} />
          </button>

          <div className={styles.line} onClick={handleClick}></div>
          {children}
        </>
      }

    </div>
  );
}
