import * as React from 'react';
import { Tabs } from '../Tabs';
import { classes } from './TabsExtended.st.css';

export const TabsExtended = () => {
  return (
    <Tabs
      items={[{ title: 'Title 1', id: 'tab-1' }]}
      className={classes.root}
      activeTabIndex={0}
      onTabClick={() => {}}
    />
  );
};
