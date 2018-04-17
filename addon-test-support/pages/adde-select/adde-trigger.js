import PageObject, { clickable } from 'ember-classy-page-object';

export default PageObject.extend({
  trigger: {
    click: clickable('.adde-select-trigger')
  }
});
