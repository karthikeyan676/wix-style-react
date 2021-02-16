import * as React from 'react';
import { FloatingDropdown } from '..';
import { classes } from './FloatingDropdownExtended.st.css';

export const FloatingDropdownExtended = () => {
  return (
    <FloatingDropdown
      className={classes.root}
      onChange={() => {}}
      value={'1'}
      label={'Label'}
    />
  );
};
