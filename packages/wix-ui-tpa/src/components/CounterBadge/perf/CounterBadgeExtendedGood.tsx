import * as React from 'react';
import { CounterBadge } from '..';
import { classes } from './CounterBadgeExtendedBad.st.css';

export const CounterBadgeExtendedBad = () => {
  return <CounterBadge className={classes.root} value={20} />;
};
