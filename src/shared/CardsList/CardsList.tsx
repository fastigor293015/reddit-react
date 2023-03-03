import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToken } from '../../hooks/useToken';
import { postsRequestAsync } from '../../store/posts/actions';
import { PostsState } from '../../store/posts/reducer';
import { RootState } from '../../store/rootReducer';
import { EIcons, Icon } from '../Icon';
import { Card } from './Card/Card';
import { CardSkeleton } from './CardSkeleton';
import styles from './cardslist.css';

export function CardsList() {
  const [token] = useToken();
  const { data, after, loading, error, loadingsCount } = useSelector<RootState, PostsState>(state => state.posts);
  const dispatch = useDispatch();

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token || token === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      if ((loadingsCount === 0 || loadingsCount % 2 !== 0) && entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: "10px",
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [bottomOfList.current, after, token]);

  return (
    <ul className={styles.cardsList}>
      {!loading && !error && data.length === 0 && (
        <div className={styles.emptyMessage} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", textAlign: "center" }}>
          <Icon name={EIcons.monocleFace} />
          Хмм... здесь пока пусто
        </div>
      )}

      {data.map(post => {
          const postInfo = post.data;
          return (
            <Card key={postInfo.id} subreddit={postInfo.subreddit} postId={postInfo.id} authorName={postInfo.author} authorAvatarSrc={postInfo.thumbnail} descr={postInfo.title} created={postInfo.created} karma={postInfo.score} commentsNumber={postInfo.num_comments} />
          )
      })}

      <div ref={bottomOfList} />

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

      {!loading && loadingsCount > 0 && loadingsCount % 2 === 0 && (
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <button className={styles.loadMoreBtn} onClick={() => dispatch(postsRequestAsync())}>Загрузить ещё</button>
        </div>
      )}

      {error &&
        <div role="alert" style={{ textAlign: "center" }}>{error}</div>
      }
    </ul>
  );
}
