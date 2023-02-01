import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  src: string;
}

export function Preview({ src }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={src}
        // src="https://cdn.dribbble.com/userupload/3795315/file/original-a5fd9a7010f802faa42467afb9f7d438.png?compress=1&resize=1024x768"
      />
    </div>
  );
}
