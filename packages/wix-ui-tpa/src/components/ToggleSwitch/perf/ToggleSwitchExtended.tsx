import * as React from 'react';
import { ToggleSwitch } from '../ToggleSwitch';
import { classes } from './ToggleSwitchExtended.st.css';

export const ToggleSwitchExtended = () => {
  return <ToggleSwitch className={classes.root} onChange={() => {}} checked />;
};
