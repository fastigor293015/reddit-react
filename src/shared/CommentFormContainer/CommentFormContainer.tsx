import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../store/commentText/actions';
import { RootState } from '../../store/rootReducer';
import { CommentForm } from '../CommentForm/CommentForm';

export function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(value);
  }

  return (
    <CommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
