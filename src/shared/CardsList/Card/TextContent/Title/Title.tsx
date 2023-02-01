import React, { useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';

interface ITitleProps {
  subreddit: string;
  postId: string;
  descr: string;
}

export function Title({ subreddit, postId, descr }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(true) }}>
        {descr}
      </a>

      { isModalOpened && <Post subreddit={subreddit} postId={postId} onClose={() => { setIsModalOpened(false) }} /> }
    </h2>
  );
}
