import * as React from 'react';
import { Spinner } from '../';
import { classes } from './SpinnerExtended.st.css';

export const SpinnerExtended = () => {
  return <Spinner className={classes.root} />;
};
