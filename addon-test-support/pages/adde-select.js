import PageObject from 'ember-classy-page-object';
import AddeDropdownPage from '@addepar/pop-menu/test-support/pages/adde-dropdown';
import AddeTriggerPage from './adde-select/adde-trigger';

export default PageObject.extend({
  dropdown: AddeDropdownPage.extend({
    resetScope: true,
    scope: 'body .adde-dropdown'
  }),
  trigger: AddeTriggerPage.extend({
    scope: '.adde-select-trigger'
  })
});
