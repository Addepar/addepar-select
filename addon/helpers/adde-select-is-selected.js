import { helper } from './component-helper';
import { isEqual } from '@ember/utils';

export function addeSelectIsSelected([option, selected]/* , hash*/) {
  if (selected === undefined || selected === null) {
    return false;
  }
  return isEqual(option, selected);
}

export default helper(addeSelectIsSelected);
