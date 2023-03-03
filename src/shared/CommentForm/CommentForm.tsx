import React, { ChangeEvent, useEffect, useRef } from 'react';
import { useForm, useController, Resolver } from 'react-hook-form';
import styles from './commentform.css';

interface CommentFormProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isFocused?: boolean;
  buttonText?: string;
}

type IFormValues = {
  comment: string;
}

const resolver: Resolver<IFormValues> = async (values) => {
  return {
    values: values.comment ? values : {},
    errors: !values.comment
      ? {
        comment: {
          type: "required",
          message: "Заполните это поле",
        },
      }
      : {},
  };
};

export function CommentForm({ value, onChange, onSubmit, isFocused = false, buttonText = "Комментировать" }: CommentFormProps) {
  const { handleSubmit, control, formState: { errors } } = useForm<IFormValues>({
    defaultValues: {
      comment: value,
    },
    resolver,
  });

  const { field } = useController({ name: "comment", control });

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isFocused) {
      ref.current?.focus();
      const length = ref.current?.value.length;
      if (length) {
        ref.current?.setSelectionRange(length, length);
      }
    };
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit((data) => onSubmit())}>
      {errors?.comment && <p className={styles.error}>{errors.comment.message}</p>}
      <textarea
        className={styles.input}
        ref={ref}
        value={field.value}
        onChange={(e) => {
          field.onChange(e);
          onChange(e);
        }}
        aria-invalid={Boolean(errors.comment)}
      />
      <button type="submit" className={styles.button}>{buttonText}</button>
    </form>
  );
}
