import React, { useState } from 'react';
import {
  useForm, FieldError, SubmitHandler, UseFormHandleSubmit, UseFormRegister,
} from 'react-hook-form';
import { useAppContext } from '../../../hooks/AppContext';
import { deletePost, PostUpdate, updatePost } from '../../../services/post';
import { PostType } from '../../../utils/types/post';
import PostPresentational from './PostPresentational';

type Props = {
  post: PostType
}

export type PostFilterProps = {
  register: UseFormRegister<PostUpdate>;
  handleSubmit: UseFormHandleSubmit<PostUpdate>;
  errors: {
      description?: FieldError | undefined;
      type?: FieldError | undefined;
      state?: FieldError | undefined;
  };
  onSubmit: SubmitHandler<PostUpdate>;
}

export default function Post({ post }:Props): JSX.Element {
  const {
    user, token, handleRefreshControl, handleAlert,
  } = useAppContext();
  const [isOwner] = useState<boolean>(user?.['@id'] === post.owner['@id']);
  const [editView, setEditView] = useState(false);
  const [postUpdated, setPostUpdated] = useState<PostType|null>(null);

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<PostUpdate>();
  const onSubmit: SubmitHandler<PostUpdate> = (data) => {
    if (token) {
      updatePost(token, post['@id'], data).then((response) => {
        if (response['@id']) {
          setEditView(false);
          setPostUpdated(response);
        } else if (handleAlert) {
          handleAlert('Error on update post', 'red');
        }
      });
    }
  };

  const handleEditView = ():void => setEditView(!editView);

  const handleDelete = ():void => {
    // eslint-disable-next-line no-restricted-globals
    const ans = confirm('Are you sure you want to delete this post?');

    if (ans && token && handleRefreshControl) {
      deletePost(token, post['@id']).then((response) => {
        if (response === 204) {
          handleRefreshControl();
        } else if (handleAlert) {
          handleAlert('Could not update the post', 'red');
        }
      });
    }
  };

  return (
    <PostPresentational
      handleDelete={handleDelete}
      post={postUpdated || post}
      isOwner={isOwner}
      editView={editView}
      handleEditView={handleEditView}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
}
