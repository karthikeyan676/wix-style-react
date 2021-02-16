import * as React from 'react';
import { TextArea } from '../TextArea';
import { classes } from './TextAreaExtended.st.css';

export const TextAreaExtended = () => {
  return (
    <TextArea
      value={'Text'}
      ariaLabel={'Test'}
      className={classes.root}
      onChange={() => {}}
    />
  );
};
