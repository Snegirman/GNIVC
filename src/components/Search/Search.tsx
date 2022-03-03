import React, { FC } from 'react';

import classes from './Search.module.scss';

type SearchProps = {
  handleSearch?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};
const Search: FC<SearchProps> = (props) => {
  const { handleSearch, value } = props;
  return (
    <div className={classes.searchContainer}>
      <input
        placeholder="Type category here"
        value={value}
        onChange={handleSearch}
        type="text"
        className={classes.search}
      />
    </div>
  );
};

export default Search;
