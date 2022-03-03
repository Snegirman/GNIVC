import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import useSingleData from '../../hooks/useSingleData';
import { Post } from '../../models/post';
import classes from './CurrentPost.module.scss';

type CurrentPostProps = {
  sortedData: Post[];
};

const CurrentPost: FC<CurrentPostProps> = () => {
  const { id } = useParams();
  const [postSingleData, isLoading, isError] = useSingleData(Number(id));

  return (
    <div className={classes.currentPostContainer}>
      <div className={classes.postId}>{`№${id}`}</div>
      {isLoading && <p style={{ fontWeight: 'bold' }}>Loading</p>}
      {isError && <p style={{ fontWeight: 'bold' }}>Something went wrong</p>}
      {!isLoading
        && !isError && (
        <>
          <div className={classes.postCategory}>{postSingleData?.category}</div>
          <div className={classes.postJoke}>{postSingleData?.joke}</div>
        </>
      )}
    </div>
  );
};

export default CurrentPost;
