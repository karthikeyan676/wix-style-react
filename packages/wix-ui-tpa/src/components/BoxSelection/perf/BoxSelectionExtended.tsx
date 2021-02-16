import * as React from 'react';
import { BoxSelection } from '../';
import { classes } from './BoxSelectionExtended.st.css';

export const BoxSelectionExtended = () => {
  return (
    <BoxSelection name="Test" className={classes.root} onChange={() => {}}>
      <BoxSelection.Option checked id={'id'} className={classes.option}>
        Item
      </BoxSelection.Option>
    </BoxSelection>
  );
};
