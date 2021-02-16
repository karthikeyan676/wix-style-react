import * as React from 'react';
import { Tag } from '../';
import { classes } from './TagExtended.st.css';

export const TagExtended = () => {
  return (
    <Tag isRemovable onRemove={() => {}} className={classes.root}>
      Tag
    </Tag>
  );
};
