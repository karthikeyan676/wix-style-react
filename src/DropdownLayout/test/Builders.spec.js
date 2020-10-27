import React from 'react';
import DropdownLayout from '../DropdownLayout';
import { dropdownLayoutDriverFactory as dropdownLayoutUniDriverFactory } from '../DropdownLayout.uni.driver';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import { listItemActionBuilder } from '../../ListItemAction';
import { ListItemActionDriverFactory } from '../../ListItemAction/ListItemAction.uni.driver';

import { listItemSectionBuilder } from '../../ListItemSection';
import { listItemSectionDriverFactory } from '../../ListItemSection/ListItemSection.uni.driver';

import { listItemSelectBuilder } from '../../ListItemSelect';
import { listItemSelectDriverFactory } from '../../ListItemSelect/ListItemSelect.uni.driver';

import { listItemEditableBuilder } from '../../ListItemEditable';
import { listItemEditableDriverFactory } from '../../ListItemEditable/ListItemEditable.uni.driver';

describe('Builders', () => {
  describe('[async]', () => {
    runTests(createRendererWithUniDriver(dropdownLayoutUniDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);

    it('should render ListItemAction within DropdownLayout', async () => {
      const dataHook = 'action-builder';
      const title = 'action option 1';

      const options = [
        listItemActionBuilder({
          id: 0,
          title,
          dataHook,
        }),
      ];

      const listItemActionTestkitFactory = uniTestkitFactoryCreator(
        ListItemActionDriverFactory,
      );

      const { driver } = render(<DropdownLayout visible options={options} />);

      const wrapper = await driver.getOptionElementById(0);
      const testkit = listItemActionTestkitFactory({ wrapper, dataHook });

      expect(await testkit.getTitleText()).toBe(title);
    });

    it('should render ListItemSection within DropdownLayout', async () => {
      const dataHook = 'section-builder';
      const title = 'section title';

      const options = [
        listItemSectionBuilder({
          id: 0,
          title,
          dataHook,
        }),
      ];

      const listItemSectionTestkitFactory = uniTestkitFactoryCreator(
        listItemSectionDriverFactory,
      );

      const { driver } = render(<DropdownLayout visible options={options} />);

      const wrapper = await driver.getOptionElementById(0);
      const testkit = listItemSectionTestkitFactory({ wrapper, dataHook });

      expect(await testkit.getTitle()).toBe(title);
    });

    it('should render ListItemSelect within DropdownLayout', async () => {
      const dataHook = 'select-builder';
      const title = 'section title';

      const options = [
        listItemSelectBuilder({
          id: 0,
          title,
          dataHook,
        }),
      ];

      const listItemSelectTestkitFactory = uniTestkitFactoryCreator(
        listItemSelectDriverFactory,
      );

      const { driver } = render(<DropdownLayout visible options={options} />);

      const wrapper = await driver.getOptionElementById(0);
      const testkit = listItemSelectTestkitFactory({ wrapper, dataHook });

      expect(await testkit.getTitle()).toBe(title);
    });

    it('should render ListItemEditable within DropdownLayout', async () => {
      const dataHook = 'editable-builder';
      const placeholder = 'editable placeholder';

      const options = [
        listItemEditableBuilder({
          id: 0,
          placeholder,
          onApprove: () => {},
          onCancel: () => {},
          dataHook,
        }),
      ];

      const listItemEditableTestkitFactory = uniTestkitFactoryCreator(
        listItemEditableDriverFactory,
      );

      const { driver } = render(<DropdownLayout visible options={options} />);

      const wrapper = await driver.getOptionElementById(0);
      const testkit = listItemEditableTestkitFactory({ wrapper, dataHook });

      expect(await testkit.getPlaceholder()).toBe(placeholder);
    });

    it('should render custom builder within DropdownLayout', async () => {
      const dataHook = 'custom-builder';
      const title = 'Custom Option 1';

      const customBuilderFunction = ({ id, dataHook, title, disabled }) => ({
        id,
        disabled,
        overrideStyle: true,
        value: ({ disabled, selected, hovered, ...rest }) => (
          <div data-hook={dataHook}>{title}</div>
        ),
      });

      const options = [customBuilderFunction({ id: 0, dataHook, title })];

      const customDriverFactory = base => ({
        getTitle: () => base._prop('innerHTML'),
      });

      const customTestkitFactory = uniTestkitFactoryCreator(
        customDriverFactory,
      );

      const { driver } = render(<DropdownLayout visible options={options} />);

      const wrapper = await driver.getOptionElementById(0);
      const testkit = customTestkitFactory({ wrapper, dataHook });

      expect(await testkit.getTitle()).toBe(title);
    });
  }
});