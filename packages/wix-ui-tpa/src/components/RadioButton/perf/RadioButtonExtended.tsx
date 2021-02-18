import * as React from 'react';
import { RadioButton } from '../';
import { classes } from './RadioButtonExtended.st.css';

export const RadioButtonExtended = () => {
  return (
    <RadioButton
      checked
      label={'label'}
      onChange={() => {}}
      value={'1'}
      className={classes.root}
    />
  );
};
