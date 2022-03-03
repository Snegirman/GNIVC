import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './About.module.scss';

const About: FC = () => (
  <div className={classes.aboutContainer}>
    <p className={classes.aboutText}>
      This site was created to make you a little bit happier by make you laughing
    </p>
    <div className={classes.backLinkCotainer}>
      <Link to="/" className={classes.backLink}>Go back</Link>
    </div>
  </div>
);

export default About;
