import * as React from 'react';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton } from '../IconButton';
import { classes } from './IconButtonExtendedGood.st.css';

export class IconButtonExtendedGood extends React.Component {
  render = () => <IconButton icon={<ShareIcon />} className={classes.root} />;
}
