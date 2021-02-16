import * as React from 'react';
import { SectionNotification } from '../SectionNotification';
import { classes } from './SectionNotification.st.css';

export const SectionNotificationPerf = () => {
  return (
    <SectionNotification className={classes.root}>
      <SectionNotification.Text>Notification</SectionNotification.Text>
    </SectionNotification>
  );
};
