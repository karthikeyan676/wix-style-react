import React from 'react';
import Avatar from '../../Avatar';
import {classes} from '../AvatarGroup.st.css';
import {dataHooks} from '../constants';

const MoreIndicator = ({className, size, text}) => {
  return (
    <div className={classes.avatarContainer}>
      <Avatar
        dataHook={dataHooks.avatarGroupItem}
        data-indicator={dataHooks.avatarGroupMoreItem}
        className={className}
        size={size}
        text={text}
      />
    </div>
  );
};

export default MoreIndicator;
