import {
  baseUniDriverFactory,
  countByHook,
  findByHookAtIndex,
  findByHook
} from '../../test/utils/unidriver';
import {dataHooks} from './constants';
import {avatarUniDriverFactory} from '../Avatar/Avatar.uni.driver'

export const avatarGroupDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the number Of displayed Avatars
     * @returns {Promise<number>}
     */
    getAvatarsCount: () => countByHook(base, dataHooks.avatarGroupItem),

    /**
     * Gets the text content
     * @param {number} index Avatar index
     * @returns {Promise<string>}
     */
    getAvatarTextContentByIndex: async index =>
      await findByHookAtIndex(base, dataHooks.avatarGroupItem, index).text(),

    /**
     * Gets the content type
     * @param {number} index Avatar index
     * @returns {Promise<string>}
     */
    getAvatarContentTypeByIndex: async index => {
      const avatarBase = await findByHookAtIndex(base, dataHooks.avatarCore, index) // getContentType is available on core avatar element
      const avatarDriver = await avatarUniDriverFactory(avatarBase);
      return await avatarDriver.getContentType();
    },

    /**
     * Gets the moreIndicator content
     * @returns {Promise<string>}
     */
    getMoreIndicatorContent: async () =>
      await (await base.$(`[data-indicator=${dataHooks.avatarGroupMoreItem}]`)).text(),

    /**
     * Checks whether the moreIndicatior exists
     * @returns {Promise<boolean>}
     */
    isMoreIndicatorExist: async () =>
      await (await base.$(`[data-indicator=${dataHooks.avatarGroupMoreItem}]`)).exists()
  };
};