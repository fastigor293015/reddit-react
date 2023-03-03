import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { updateComment } from '../../store/commentText/actions';
import { RootState } from '../../store/rootReducer';
import { CommentForm } from '../CommentForm/CommentForm';

export function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }

  function handleSubmit() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Форма успешно отправлена!",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <CommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
