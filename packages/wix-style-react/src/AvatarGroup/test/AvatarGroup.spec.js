import React from 'react';
import {createRendererWithUniDriver, cleanup} from '../../../test/utils/unit';

import AvatarGroup from '../AvatarGroup';
import {avatarGroupPrivateDriverFactory} from './AvatarGroup.private.uni.driver';
import { avatarItems } from '../utils';

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
    const expectedTextContent = 'SD';
    const {driver} = render(<AvatarGroup items={avatarItems}/>);
    expect(await driver.getAvatarTextContentByIndex(1)).toBe(expectedTextContent);
  });
});
