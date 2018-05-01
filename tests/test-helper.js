import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import { start } from 'ember-cli-qunit';
import registerRAFWaiter from 'ember-raf-scheduler/test-support/register-waiter';
import { GTE_EMBER_1_13 } from 'ember-compatibility-helpers';

if (!GTE_EMBER_1_13) {
  let initializer = window.require('dummy/initializers/vertical-collection-legacy-compat').default;
  initializer.initialize();
}

registerRAFWaiter();
setResolver(resolver);
start();
