import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import useView from '../../hooks/useView';
import { Post as PostProps } from '../../models/post';
import classes from './Post.module.scss';

const Post: FC<PostProps> = (props) => {
  const { category, joke, id } = props;
  const [fullView, changeViewHandler] = useView();

  if (fullView) {
    return (
      <div className={classes.postItem}>
        <h2 className={classes.postHeader}>{category}</h2>
        <p className={classes.postText}>{joke}</p>
        <div className={classes.postBtnContainer}>
          <button
            className={classes.postButton}
            type="button"
            onClick={changeViewHandler}
          >
            Show less
          </button>
          <Link className={classes.goToPost} to={`${id}`}>Go to post</Link>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.postItem}>
      <h2 className={classes.postHeader}>{category}</h2>
      <p className={classes.postText}>{`${joke.slice(0, 25)}...`}</p>
      <div className={classes.postBtnContainer}>
        <button
          className={classes.postButton}
          type="button"
          onClick={changeViewHandler}
        >
          Show more
        </button>
        <Link className={classes.goToPost} to={`${id}`}>Go to post</Link>
      </div>
    </div>
  );
};

export default Post;
