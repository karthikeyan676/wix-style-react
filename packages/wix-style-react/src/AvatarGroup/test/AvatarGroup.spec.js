import React from 'react';
import {createRendererWithUniDriver, cleanup} from '../../../test/utils/unit';

import AvatarGroup from '../AvatarGroup';
import {avatarGroupPrivateDriverFactory} from './AvatarGroup.private.uni.driver';

const avatarItems = [
  {
    ariaLabel: 'Avatar for Roi Bendet',
    color: 'A1',
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    name: 'Roi Bendet',
    text: 'boom boom',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    imgProps: undefined,
    name: 'Roi Bendet',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    text: 'hello world',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    name: 'Tal Zaidman',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    name: 'Eran Egozi',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    name: 'Ofir Bendet',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    imgProps: undefined,
    name: 'Omer Bendet',
  },
];

describe(AvatarGroup.displayName, () => {
  const render = createRendererWithUniDriver(avatarGroupPrivateDriverFactory);
  afterEach(cleanup);

  it('should render', async () => {
    const {driver} = render(<AvatarGroup items={avatarItems}/>);
    expect(await driver.exists()).toBe(true);
  });

  it('should render 5 avatars by default', async () => {
    const {driver} = render(<AvatarGroup items={avatarItems}/>);
    expect(await driver.getAvatarsCount()).toBe(5);
  });

  it('should render 4 avatars if maxItems prop is set to 4', async () => {
    const {driver} = render(
      <AvatarGroup items={avatarItems} maxItems={4}/>,
    );
    expect(await driver.getAvatarsCount()).toBe(4);
  });

  describe('moreIndicator', () => {
    it('should render moreIndicator', async () => {
      const {driver} = render(<AvatarGroup items={avatarItems}/>);
      expect(await driver.getAvatarsCount()).toBe(5);
      expect(await driver.isMoreIndicatorExist()).toBe(true);
    });

    it('should not render moreIndicator', async () => {
      const {driver} = render(<AvatarGroup items={avatarItems} maxItems={8}/>);
      expect(await driver.getAvatarsCount()).toBe(8);
      expect(await driver.isMoreIndicatorExist()).toBe(false);
    });

    it('should return the number of the rest avatars on the moreIndicator avatar', async () => {
      const {driver} = render(<AvatarGroup items={avatarItems} maxItems={7}/>);
      const expectedText = '2+';
      expect(await driver.getAvatarsCount()).toBe(7);
      expect(await driver.getAvatarTextContentByIndex(6)).toBe(expectedText);
    });
  });

  it('should return the text content of the avatar', async () => {
    const AvatarGroupItems = [
      {
        name: 'Roi Bendet',
      },
      {
        name: 'Eran Egozi',
      },
    ];
    const expectedTextContent = 'EE';
    const {driver} = render(<AvatarGroup items={AvatarGroupItems}/>);
    expect(await driver.getAvatarTextContentByIndex(1)).toBe(expectedTextContent);
  });
});
