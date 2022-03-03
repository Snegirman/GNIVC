import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import classes from './ViewNavigation.module.scss';

const Navigation: FC = () => {
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  const viewNavContainerClass = cn({
    [classes.viewNavContainer]: true,
    [classes.hidden]: isEndOfPage,
  });

  useEffect(() => {
    const hideNav = () => {
      if ((document.documentElement.offsetHeight <= Math.ceil(window.scrollY) + window.outerHeight)) {
        setIsEndOfPage(true);
      } else {
        setIsEndOfPage(false);
      }
    };
    window.addEventListener('scroll', hideNav);
    return function cleanUp() {
      window.removeEventListener('scroll', hideNav);
    };
  }, []);

  return (
    <div className={viewNavContainerClass}>
      <Link className={classes.viewNavButton} to="listView">List</Link>
      <Link className={classes.viewNavButton} to="tableView">Table</Link>
    </div>
  );
};

export default Navigation;
