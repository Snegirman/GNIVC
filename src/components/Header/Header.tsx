import React, { FC } from 'react';

import classes from './Header.module.scss';

const Header: FC = () => (
  <header className={classes.header}>
    Site to make you <span className={classes.happier}>happier</span>
  </header>
);

export default Header;
