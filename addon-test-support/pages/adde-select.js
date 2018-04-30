import PageObject, { collection } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';
import { GTE_EMBER_1_13 } from 'ember-compatibility-helpers';
import AddeDropdownPage from '@addepar/pop-menu/test-support/pages/adde-dropdown';
import AddeTriggerPage from './adde-select/adde-trigger';

let selectedScope = '.adde-select-option[aria-selected';
if (!GTE_EMBER_1_13) {
  selectedScope += '="true"';
}
selectedScope += ']';

export default PageObject.extend({
  dropdown: AddeDropdownPage.extend({
    scope: '[data-test-select-dropdown]',

    content: {
      items: collection({
        scope: 'li'
      }),
      search: PageObject.extend({
        scope: '.adde-select-search input',
        get placeholderText() {
          return findElement(this).placeholder;
        }
      }),
      selected: PageObject.extend({
        scope: selectedScope
      })
    }
  }),
  trigger: AddeTriggerPage.extend({
    scope: '.adde-select-trigger'
  })
});
