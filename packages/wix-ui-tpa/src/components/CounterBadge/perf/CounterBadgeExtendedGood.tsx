import * as React from 'react';
import { CounterBadge } from '..';
import { classes } from './CounterBadgeExtendedGood.st.css';

export const CounterBadgeExtendedGood = () => {
  return <CounterBadge className={classes.root} value={20} />;
};
