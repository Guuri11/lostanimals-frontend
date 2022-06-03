import React, { useEffect, useState } from 'react';
import {
  useForm, SubmitHandler, UseFormRegister, UseFormHandleSubmit, FieldError, UseFormWatch,
} from 'react-hook-form';
import { useAppContext } from '../../../../hooks/AppContext';
import { getPosts } from '../../../../services/post';
import { PostType } from '../../../../utils/types/post';
import AuthPage from '../../AuthPage';
import HomePresentational from './HomePresentational';

export type PostFilterInputs = {
  owner: string,
  radio: number,
  startDate: string,
  endDate: string,
  type: string,
};

export type PostFilterProps = {
  register: UseFormRegister<PostFilterInputs>,
  handleSubmit: UseFormHandleSubmit<PostFilterInputs>
  errors: {
    owner?: FieldError | undefined;
    radio?: FieldError | undefined;
    startDate?: FieldError | undefined;
    endDate?: FieldError | undefined;
    type?: FieldError | undefined;
  },
  onSubmit: SubmitHandler<PostFilterInputs>,
  watch: UseFormWatch<PostFilterInputs>
}

export default function Home() : JSX.Element {
  const {
    token, handleAddPost, addPost, refreshControl,
  } = useAppContext();
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const [filterParams, setFilterParams] = useState('');
  const [showNoPostsNear, setShowNoPostsNear] = useState(false);

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<PostFilterInputs>();
  const onSubmit: SubmitHandler<PostFilterInputs> = (data) => {
    let params = `?radio_poc=${data.radio}`;

    if (data.endDate !== '') {
      params += `&created_at[before]=${data.endDate}`;
    }
    if (data.owner !== '') {
      params += `&owner.username=${data.owner}`;
    }
    if (data.startDate !== '') {
      params += `&created_at[after]=${data.startDate}`;
    }
    if (data.type) {
      params += `&type=${data.type}`;
    }

    setFilterParams(params);
  };

  useEffect(() => {
    if (token) {
      /*
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
        }, (error) => {
          console.log(error);
        });
      } else {
        console.log('Not Available');
      }
      */

      getPosts(token, filterParams).then((response) => {
        if (response['hydra:totalItems'] > 0) {
          setPosts(response['hydra:member']);
          setShowNoPostsNear(false);
        } else {
          setShowNoPostsNear(true);
        }
      });
    }
  }, [token, filterParams, refreshControl]);

  return (
    <AuthPage>
      { handleAddPost ? (
        <HomePresentational
          addPost={addPost}
          handleAddPost={handleAddPost}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          watch={watch}
          posts={posts}
          showNoPostsNear={showNoPostsNear}
        />
      ) : null }
    </AuthPage>
  );
}
