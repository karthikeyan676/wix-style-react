import * as React from 'react';
import { LikeButton } from '../LikeButton';
import { classes } from './LikeButtonExtended.st.css';

export const LikeButtonExtended = () => {
  return (
    <LikeButton
      checked
      label="label"
      onChange={() => {}}
      className={classes.root}
    />
  );
};
