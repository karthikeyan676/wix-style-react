import * as React from 'react';
import { Event } from '../';
import { classes } from './EventWiringExtended.st.css';

export const EventWiringExtended = () => {
  return (
    <Event className={classes.root} time="20:30" title="Blink 182 Concert" />
  );
};
