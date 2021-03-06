import React, { useEffect } from 'react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import ColorPicker from '../index';
import { colorPickerUniDriverFactory } from '../ColorPicker.uni.driver';
import { snap, visualize } from 'storybook-snapper';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const dataHook = 'interactive';

const colorPickerTestkitDriver = uniTestkitFactoryCreator(
  colorPickerUniDriverFactory,
);

const getDriver = () =>
  colorPickerTestkitDriver({
    wrapper: document.body,
    dataHook,
  });

const ColorPickerWrapper = ({ componentDidMount, ...rest }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  }, [componentDidMount]);

  return <ColorPicker dataHook={dataHook} {...rest} />;
};

const defaultProps = {
  value: '#3899eb',
  emptyPlaceholder: 'No Fill',
};
// showConverter={false} showInput={false}
const tests = [
  {
    describe: 'ColorPicker',
    its: [
      {
        it: 'should render with input and converter',
        props: { ...defaultProps },
      },
      {
        it: 'should render with input and  without converter',
        props: {
          ...defaultProps,
          showConverter: false,
        },
      },
      {
        it: 'should render without input and converter',
        props: {
          ...defaultProps,
          showInput: false,
          showConverter: false,
        },
      },
      {
        it: 'should render the RGB inputs when clicking on the RGB tab',
        props: {
          ...defaultProps,
          showConverter: true,
        },
        componentDidMount: async () => {
          await getDriver().selectRgbTab();
        },
      },
      {
        it: 'should render the HSB inputs when clicking on the HSB tab',
        props: {
          ...defaultProps,
          showConverter: true,
        },
        componentDidMount: async () => {
          await getDriver().selectHsbTab();
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    visualize(describe, () => {
      snap(it, done => (
        <ColorPickerWrapper
          {...props}
          componentDidMount={componentDidMount}
          onDone={done}
        />
      ));
    });
  });
});

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    visualize(`Layout And Spacing| ColorPicker/${describe}`, () => {
      snap(it, done => (
        <WixStyleReactProvider
          features={{ reducedSpacingAndImprovedLayout: true }}
        >
          <ColorPickerWrapper
            {...props}
            componentDidMount={componentDidMount}
            onDone={done}
          />
        </WixStyleReactProvider>
      ));
    });
  });
});
