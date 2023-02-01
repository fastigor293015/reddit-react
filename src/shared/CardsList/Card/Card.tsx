import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  subreddit: string;
  postId: string;
  authorName: string;
  authorAvatarSrc: string;
  descr: string;
  created: number;
  karma: number;
  commentsNumber: number;
}

export function Card({ subreddit, postId, authorName, authorAvatarSrc, descr, created, karma, commentsNumber }: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent subreddit={subreddit} postId={postId} authorName={authorName} authorAvatarSrc={authorAvatarSrc} descr={descr} created={created} />
      <Preview src={authorAvatarSrc} />
      <Menu />
      <Controls karma={karma} commentsNumber={commentsNumber} />
    </li>
  );
}
