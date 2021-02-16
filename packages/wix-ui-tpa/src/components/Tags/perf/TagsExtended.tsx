import * as React from 'react';
import { Tags } from '../';
import { classes } from './TagsExtended.st.css';

export const TagsExtended = () => {
  return (
    <Tags
      items={[
        {
          title: 'Title',
          checked: true,
          value: 'Value',
        },
      ]}
      onClick={() => {}}
      className={classes.root}
    />
  );
};
