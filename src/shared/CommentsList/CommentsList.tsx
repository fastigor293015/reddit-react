import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Comment } from './CommentBranch/Comment';
import { CommentBranch } from './CommentBranch';
import styles from './commentslist.css';

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

  useEffect(() => {
    const controller = new AbortController();

    axios.get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`, {
      signal: controller.signal
    })
    .then(resp => {
      setList(resp.data[1].data.children);
      console.log(resp);
    })

    // Отменяем запрос при анмаунте компонента
    return () => controller.abort();
  }, [])

  function outputList(list: IList[]) {
    return list.map(comment => {
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
    <div>
      {
        outputList(list)
      }
    </div>
  );
}
