import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { CommentForm } from '../CommentForm';

interface IReplyFormProps {
  author: string;
}

export function ReplyFormContainer({ author }: IReplyFormProps) {
  const [value, setValue] = useState(`${author}, `);
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(value);
  }

  return (
    <CommentForm isFocused={true} value={value} buttonText={'Ответить'} onChange={handleChange} onSubmit={handleSubmit} />
  );
}
