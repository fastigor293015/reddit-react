import React, { useState } from 'react';
import { convertPostCreatedValue } from '../../../../utils/js/convertPostCreatedValue';
import { EIcons, Icon } from '../../../Icon';
import { CommentBranch } from '../CommentBranch';
import styles from './comment.css';
import { ReplyFormContainer } from '../../../ReplyFormContainer';

interface ICommentProps {
  author: string;
  created: number;
  message: string;
}

export function Comment({ author, created, message }: ICommentProps) {
  const [isReplyFormOpened, setIsReplyFormOpened] = useState(false);

  function handleReplyClick() {
    setIsReplyFormOpened(!isReplyFormOpened);
  }

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.karma}>
          <button className={styles.up}>
            <Icon name={EIcons.arrowUp} />
          </button>
          <button className={styles.down}>
            <Icon name={EIcons.arrowUp} />
          </button>
        </div>
        <div className={styles.top}>
          <img className={styles.avatar} src="https://cdn.dribbble.com/userupload/2641498/file/original-dcd3b3dcf1f600ac3a92f27605bc1c77.png?compress=1&resize=752x564" alt="" />
          <a href="#user-url" className={styles.userLink}>{author}</a>
          <span className={styles.created}>&nbsp;{convertPostCreatedValue(created)}</span>
          <div className={styles.league}>Лига юристов</div>
        </div>
        <p className={styles.message}>{message}</p>
        <div className={styles.controls}>
          <button onClick={handleReplyClick}>
            <Icon name={EIcons.comments} />
            Ответить
          </button>
          <button>
            <Icon name={EIcons.share} />
            Поделиться
          </button>
          <button>
            <Icon name={EIcons.warning} />
            Пожаловаться
          </button>
        </div>
      </div>
      {
        isReplyFormOpened &&
        <CommentBranch>
          <ReplyFormContainer author={author} />
        </CommentBranch>
      }
    </>
  );
}
