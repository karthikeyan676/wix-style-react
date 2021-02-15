import * as React from 'react';
import { DatePicker } from '../';
import { classes } from './DatePickerExtended.st.css';

export const DatePickerExtended = () => {
  return (
    <DatePicker
      className={classes.root}
      value={new Date()}
      onChange={() => {}}
    />
  );
};
