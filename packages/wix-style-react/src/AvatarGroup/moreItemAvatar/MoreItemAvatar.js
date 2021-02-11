import React from 'react';
import Avatar from '../../Avatar';
import { dataHooks } from '../constants';

const MoreItemAvatar = ({className, size, text}) => {
  const key = `${className}${size}${text}`;
  return (
    <Avatar
      dataHook={dataHooks.avatarGroupMoreItem}
      key={key}
      className={className}
      size={size}
      text={text}
    />
  );
};

export default MoreItemAvatar;
