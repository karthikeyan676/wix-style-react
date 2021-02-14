import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { MobileDrawer } from './';

visualize('MobileDrawer', () => {
  story('simple', () => {
    snap('default props', <MobileDrawer isOpen>Children</MobileDrawer>);
  });
});
