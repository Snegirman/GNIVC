import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import useView from '../../hooks/useView';
import { Post as PostData } from '../../models/post';
import classes from '../TableList/TableList.module.scss';

type TableLineProps = {
  data: PostData;
};

const TableLine: FC<TableLineProps> = (props) => {
  const { data } = props;
  const [fullView, changeViewHandler] = useView();

  return (
    <tr className={classes.tableRow}>
      <td className={classes.tableCell}>{data.category}</td>
      <td className={classes.tableCell}>
        {fullView && data.joke}
        {!fullView && `${data.joke.slice(0, 25)}...`}
        <div className={classes.tableLineBtnContainer}>
          <button className={classes.tableBtn} type="button" onClick={changeViewHandler}>{fullView ? 'Show less' : 'Show more'}</button>
          <Link className={classes.goToPost} to={`${data.id}`}>Go to post</Link>
        </div>
      </td>
    </tr>
  );
};

export default TableLine;
