import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Comment } from './CommentBranch/Comment';
import { CommentBranch } from './CommentBranch';
import styles from './commentslist.css';
import { EIcons, Icon } from '../Icon';
import { CommentBranchSkeleton } from './CommentBranchSkeleton';
import { CommentSkeleton } from './CommentBranchSkeleton/CommentSkeleton';

interface ICommentsListProps {
  subreddit: string;
  postId: string;
}

interface IList {
  data: {
    id: string;
    author: string;
    body: string;
    created: number;
    replies: {
      data: {
        children: IList[];
      }
    }
  }
}

export function CommentsList({ subreddit, postId }: ICommentsListProps) {
  const [list, setList] = useState<IList[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setError("");
    setLoading(true);

    axios.get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`, {
      signal: controller.signal
    })
    .then(resp => {
      setList(resp.data[1].data.children);
      setLoading(false);
      console.log(resp);
    }).catch(error => {
      setError(String(error));
      setLoading(false);
    })

    // Отменяем запрос при анмаунте компонента
    return () => controller.abort();
  }, [])

  function outputList(branch: IList[]) {
    return branch.map(comment => {
      const commentInfo = comment.data;
      if (!commentInfo.author || !commentInfo.created || !commentInfo.body) {
        return '';
      }
      return (
        <CommentBranch key={commentInfo.id}>
          <Comment author={commentInfo.author} created={commentInfo.created} message={commentInfo.body} />
          {
            // Если есть ответы, снова вызываем функцию outputList, но передаём уже список из replies
            commentInfo.replies ? outputList(commentInfo.replies.data.children) : ''
          }
        </CommentBranch>
      )
    })
  }

  return (

    <div className={styles.comments}>
      <div className={styles.sort}>
        Сортировать по:&nbsp;
        <button>Лучшие</button>
      </div>
      <div className={styles.commentsList}>
        {list && outputList(list)}
        {loading && (
          <>
            <CommentBranchSkeleton>
              <CommentSkeleton />
              <CommentBranchSkeleton>
                <CommentSkeleton />
              </CommentBranchSkeleton>
            </CommentBranchSkeleton>
            <CommentBranchSkeleton>
              <CommentSkeleton />
              <CommentBranchSkeleton>
                <CommentSkeleton />
              </CommentBranchSkeleton>
            </CommentBranchSkeleton>
            <CommentBranchSkeleton>
              <CommentSkeleton />
              <CommentBranchSkeleton>
                <CommentSkeleton />
              </CommentBranchSkeleton>
            </CommentBranchSkeleton>
          </>
        )}
        {!loading && !error && list.length === 0 && (
          <div className={styles.emptyMessage} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", textAlign: "center" }}>
            <Icon name={EIcons.monocleFace} />
            Хмм... здесь пока пусто
          </div>
        )}
        {error &&
          <div role="alert" style={{ textAlign: "center" }}>{error}</div>
        }
      </div>
    </div>
  );
}
