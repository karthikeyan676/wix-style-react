import React from 'react';
import Avatar from '../../Avatar';
import {dataHooks} from '../constants';

const MoreIndicator = ({className, size, text}) => {
  return (
      <Avatar
        dataHook={dataHooks.avatarGroupItem}
        data-indicator={dataHooks.avatarGroupMoreItem}
        className={className}
        size={size}
        text={text}
      />
  );
};

export default MoreIndicator;
