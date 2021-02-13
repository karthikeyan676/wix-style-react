import * as React from 'react';
import * as examples from './examples';
import {
  description,
  header,
  api,
  divider,
  importExample,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { MobileDrawer } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'MobileDrawer',
  component: storyComponent(MobileDrawer),
  componentPath: '../MobileDrawer.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-MobileDrawer',
    children: 'Example MobileDrawer Child',
  }),
  exampleProps: {
    isOpen: true,
    onRequestClose: () => console.log('CloseMobileDrawer clicked'),
    children: <div>Example MobileDrawer Child</div>,
  },
  dataHook: 'storybook-MobileDrawer',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'MobileDrawers provide access to destinations and functionality menus, such as Action Menus, Filter Dropdown etc. This component should be used on mobile only.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          code({
            title: 'MobileDrawer Action Menu Example',
            source: examples.exampleActionMenu,
          }),

          code({
            title: 'MobileDrawer Social Menu Example',
            source: examples.exampleSocailMenu,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
