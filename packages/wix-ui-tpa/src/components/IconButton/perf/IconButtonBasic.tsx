import * as React from 'react';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton } from '../IconButton';

export class IconButtonExtendedGood extends React.Component {
  render = () => <IconButton icon={<ShareIcon />} />;
}
