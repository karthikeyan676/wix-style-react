import * as React from 'react';
import { Tags } from '../';

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
    />
  );
};
