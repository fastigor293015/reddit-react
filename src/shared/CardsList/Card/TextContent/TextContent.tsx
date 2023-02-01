import React from 'react';
import { convertPostCreatedValue } from '../../../../utils/js/convertPostCreatedValue';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContentProps {
  subreddit: string;
  postId: string;
  authorName: string;
  authorAvatarSrc: string;
  descr: string;
  created: number;
}

export function TextContent({ subreddit, postId, authorName, authorAvatarSrc, descr, created }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink authorName={authorName} authorAvatarSrc={authorAvatarSrc} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {`${convertPostCreatedValue(created)}`}
        </span>
      </div>
      <Title subreddit={subreddit} postId={postId} descr={descr} />
    </div>
  );
}
