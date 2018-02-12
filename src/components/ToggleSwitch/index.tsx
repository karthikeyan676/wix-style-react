import * as React from 'react';
import {ToggleSwitch as CoreToggleSwitch, ToggleSwitchProps} from 'wix-ui-core/StylableToggleSwitch';
import toggleSwitchStyles from './ToggleSwitch.st.css';
import {withStylable} from 'wix-ui-core';

export const ToggleSwitch = withStylable<ToggleSwitchProps>(CoreToggleSwitch, toggleSwitchStyles, () => null);
