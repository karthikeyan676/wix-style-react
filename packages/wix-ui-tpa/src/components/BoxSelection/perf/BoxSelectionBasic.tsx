import * as React from 'react';
import { BoxSelection } from '../';

export const BoxSelectionExtended = () => {
  return (
    <BoxSelection name="Test" onChange={() => {}}>
      <BoxSelection.Option checked id={'id'}>
        Item
      </BoxSelection.Option>
    </BoxSelection>
  );
};
