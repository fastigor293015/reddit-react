import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import { CardSkeleton } from './CardSkeleton';
import styles from './cardslist.css';

export function CardsList() {
  const { data, loading } = usePostsData();

  return (
    <ul className={styles.cardsList}>
      {loading &&
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      }

      {
        data.map(post => {
          const postInfo = post.data;
          return (
            <React.Fragment key={postInfo.id}>
              <Card subreddit={postInfo.subreddit} postId={postInfo.id} authorName={postInfo.author} authorAvatarSrc={postInfo.thumbnail} descr={postInfo.title} created={postInfo.created} karma={postInfo.score} commentsNumber={postInfo.num_comments} />
            </React.Fragment>
          )
        })
      }
    </ul>
  );
}
