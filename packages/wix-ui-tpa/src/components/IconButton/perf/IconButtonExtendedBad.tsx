import * as React from 'react';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton } from '../IconButton';
import { classes } from './IconButtonExtendedBad.st.css';

export class IconButtonExtendedBad extends React.Component {
  render = () => <IconButton icon={<ShareIcon />} className={classes.root} />;
}
