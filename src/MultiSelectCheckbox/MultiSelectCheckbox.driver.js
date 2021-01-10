import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const multiSelectCheckboxDriverFactory = ({ element }) => {
  WithDeprecationWarning(multiSelectCheckboxDriverFactory);

  const {
    driver,
    inputDriver,
    dropdownLayoutDriver,
  } = inputWithOptionsDriverFactory({ element });

  const getLabels = (delimiter = `, `) =>
    inputDriver.getValue().split(delimiter);

  const multiSelectCheckboxDriver = Object.assign(driver, {
    getNumOfLabels: () => getLabels().length,
    getLabels: delimiter => getLabels(delimiter),
    getLabelAt: (index, delimiters) => getLabels(delimiters)[index],
  });

  return {
    driver: multiSelectCheckboxDriver,
    inputDriver,
    dropdownLayoutDriver,
  };
};

export default multiSelectCheckboxDriverFactory;
