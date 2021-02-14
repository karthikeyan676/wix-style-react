import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

type contentType = 'text' | 'placeholder' | 'image'

export interface AvatarGroupUniDriver extends BaseUniDriver {
  getAvatarsCount(): Promise<number>;
  getAvatarTextContentByIndex(index: number): Promise<string>;
  getAvatarContentTypeByIndex(index: number): Promise<contentType>;
  getMoreIndicatorContent(): Promise<string>;
  isMoreIndicatorExist(): Promise<boolean>;
  hover(): Promise<void>;
}
