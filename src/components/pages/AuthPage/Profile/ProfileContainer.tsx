import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../hooks/AppContext';
import { getPosts } from '../../../../services/post';
import { PostType } from '../../../../utils/types/post';
import AuthPage from '../AuthPage';
import ProfilePresentational from './ProfilePresentational';

export default function Profile() : JSX.Element {
  const {
    user, token, handleAddPost, addPost, refreshControl,
  } = useAppContext();
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const [showNoPosts, setShowNoPosts] = useState(false);

  useEffect(() => {
    if (token && user) {
      getPosts(token, `?owner.username=${user.username}`).then((response) => {
        if (response['hydra:totalItems'] > 0) {
          setPosts(response['hydra:member']);
          setShowNoPosts(false);
        } else {
          setShowNoPosts(true);
          setPosts([]);
        }
      });
    }
  }, [token, user, refreshControl]);

  return (
    <AuthPage>
      {user && handleAddPost ? (
        <ProfilePresentational
          addPost={addPost}
          handleAddPost={handleAddPost}
          user={user}
          posts={posts}
          showNoPosts={showNoPosts}
        />
      ) : null }
    </AuthPage>
  );
}
