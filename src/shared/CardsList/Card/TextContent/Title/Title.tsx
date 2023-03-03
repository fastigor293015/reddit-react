import React from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface ITitleProps {
  subreddit: string;
  postId: string;
  descr: string;
}

export function Title({ subreddit, postId, descr }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${subreddit}/${postId}`} className={styles.postLink}>
        {descr}
      </Link>
    </h2>
  );
}
