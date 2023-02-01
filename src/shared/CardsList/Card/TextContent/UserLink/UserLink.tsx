import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  authorAvatarSrc: string;
  authorName: string;
}

export function UserLink({ authorAvatarSrc, authorName }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
    <img
      className={styles.avatar}
      src={authorAvatarSrc}
      alt="avatar"
    />
    <a href="#user-url" className={styles.username}>{authorName}</a>
  </div>
  );
}
