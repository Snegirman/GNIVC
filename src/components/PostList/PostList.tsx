import React, { FC } from 'react';

import { Post as PostType } from '../../models/post';
import Loading from '../Loading';
import Error from '../Error';
import Post from '../Post';
import classes from './PostList.module.scss';

type PostListProps = {
  searchValue: string;
  isError: boolean;
  isLoading: boolean;
  postData: PostType[];
};

const PostList: FC<PostListProps> = (props) => {
  const { isError, isLoading, postData } = props;

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <div className={classes.postList}>
      {postData?.map((post: PostType) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
