import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styles from './commentform.css';

interface CommentFormProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
  isFocused?: boolean;
  buttonText?: string;
}

export function CommentForm({ value, onChange, onSubmit, isFocused = false, buttonText = 'Комментировать' }: CommentFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isFocused) {
      const length = ref.current?.value.length;
      ref.current?.focus();
      // Ставим курсор в конце строки
      if (length) {
        ref.current?.setSelectionRange(length, length);
      }
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} ref={ref} value={value} onChange={onChange} />
      <button className={styles.button}>{buttonText}</button>
    </form>
  );
}
