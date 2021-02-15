import * as React from 'react';
import { Dialog } from '../';
import { classes } from './DialogExtendedFixed.st.css';

export const DialogExtendedFixed = () => {
  return (
    <Dialog className={classes.dialogComponent} isOpen>
      This is the content!
    </Dialog>
  );
};
