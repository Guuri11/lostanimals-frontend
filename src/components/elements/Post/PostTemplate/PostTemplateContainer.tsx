import React from 'react';
import {
  useForm, FieldError, SubmitHandler, UseFormHandleSubmit, UseFormRegister,
} from 'react-hook-form';
import { useAppContext } from '../../../../hooks/AppContext';
import { createPost } from '../../../../services/post';
import PostTemplatePresentational from './PostTemplatePresentational';

export type PostCreate = {
  image: FileList;
  type: string;
  description: string;
  state: boolean;
}

export type PostFilterProps = {
  register: UseFormRegister<PostCreate>;
  handleSubmit: UseFormHandleSubmit<PostCreate>;
  errors: {
      description?: FieldError | undefined;
      type?: FieldError | undefined;
      state?: FieldError | undefined;
      image?: FieldError | undefined;
  };
  onSubmit: SubmitHandler<PostCreate>;
}

export default function PostTemplate(): JSX.Element {
  const {
    user, token, handleRefreshControl, coords,
  } = useAppContext();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<PostCreate>();
  const onSubmit: SubmitHandler<PostCreate> = (data) => {
    if (token && user && handleRefreshControl && coords) {
      createPost(token, user, data, coords).then(() => {
        handleRefreshControl();
      });
    }
  };

  return (
    <PostTemplatePresentational
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
}
