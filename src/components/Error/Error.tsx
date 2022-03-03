import React, { FC } from 'react';

import classes from './Error.module.scss';

const Error: FC = () => <div className={classes.error}>Произошла ошибка во время загрузки данных</div>;

export default Error;
