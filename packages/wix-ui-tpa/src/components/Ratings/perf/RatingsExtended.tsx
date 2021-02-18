import * as React from 'react';
import { Ratings } from '../index';
import { classes } from './RatingsExtended.st.css';

export const RatingsExtended = () => {
  return (
    <Ratings
      name={'Name'}
      value={4}
      onSelect={() => {}}
      className={classes.root}
    />
  );
};
