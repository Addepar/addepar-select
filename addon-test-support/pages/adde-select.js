import PageObject from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';
import AddeDropdownPage from '@addepar/pop-menu/test-support/pages/adde-dropdown';
import AddeTriggerPage from './adde-select/adde-trigger';

export default PageObject.extend({
  dropdown: AddeDropdownPage.extend({
    scope: '[data-test-select-dropdown]',

    content: {
      search: PageObject.extend({
        scope: '.adde-select-search input',
        // TODO make that a property not a function
        placeholderText() {
          return findElement(this).placeholder;
        }
      })
    }
  }),
  trigger: AddeTriggerPage.extend({
    scope: '.adde-select-trigger'
  })
});
