import _ from 'lodash';
import React, { Dispatch, FC, SetStateAction } from 'react';

import { Post as PostType } from '../../models/post';
import Loading from '../Loading';
import Error from '../Error';
import classes from './TableList.module.scss';

type TableListProps = {
  children: React.ReactNode;
  postData: PostType[];
  setSortedData: Dispatch<SetStateAction<PostType[]>>;
  isError: boolean;
  isLoading: boolean;
};

const TableList: FC<TableListProps> = (props) => {
  const {
    children, postData, setSortedData, isLoading, isError,
  } = props;

  const sortCategoryHandler = () => {
    setSortedData(_.sortBy(postData, (o) => o.category));
  };

  const sortJokeHandler = () => {
    setSortedData(_.sortBy(postData, (o) => o.joke));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <table className={classes.table} cellSpacing="0">
      <thead className={classes.thead}>
        <tr className={classes.tableRow}>
          <th className={classes.tableCell} onClick={sortCategoryHandler}>
            Category
          </th>
          <th className={classes.tableCell} onClick={sortJokeHandler}>
            Joke
          </th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export default TableList;
