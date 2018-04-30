import { helper as componentHelper } from '@ember/component/helper';
import { GTE_EMBER_1_13 } from 'ember-compatibility-helpers';
// eslint-disable-next-line
import Ember from 'ember';

export function helper(fn) {
  if (GTE_EMBER_1_13) {
    return componentHelper(fn);
  } else {
    let compatFn = function() {
      return fn.call(null, arguments);
    };
    return Ember.Handlebars.makeBoundHelper(compatFn);
  }
}
