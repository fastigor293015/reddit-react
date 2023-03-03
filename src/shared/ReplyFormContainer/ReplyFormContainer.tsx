import React, { ChangeEvent, useRef, useState } from 'react';
import Swal from 'sweetalert2';
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

  function handleSubmit() {
    Swal.fire(
      "Good job!",
      "You clicked the button!",
      "success",
    )
  }

  return (
    <CommentForm isFocused={true} value={value} buttonText={'Ответить'} onChange={handleChange} onSubmit={handleSubmit} />
  );
}
