/* eslint-disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/beta/testkits/enzyme.template.js
 * AND GENERATED BY `wuf export-teskits`
 */
/* eslint-disable no-unused-vars */
import {
  enzymeTestkitFactoryCreator,
  enzymeUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/enzyme';

const load = module => {
  const MODULE_META_KEYS = ['__esModule'];

  const moduleFields = Object.keys(module).reduce((total, key) => {
    if (!MODULE_META_KEYS.includes(key)) {
      return total.concat(module[key]);
    }
    return total;
  }, []);

  let defaultOrFirstExport;
  if (module.default) {
    defaultOrFirstExport = module.default;
  } else if (moduleFields.length === 1) {
    defaultOrFirstExport = moduleFields[0];
  } else {
    defaultOrFirstExport = module;
  }
  return defaultOrFirstExport;
};
export const PopoverMenuTestkit = enzymeUniTestkitFactoryCreator(load(require('../../src/beta/PopoverMenu/PopoverMenu.uni.driver')));