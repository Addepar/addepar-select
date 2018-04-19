import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import AddeSelectPage from '@addepar/select/test-support/pages/adde-select';

moduleForComponent('adde-select', 'Integration | Component | adde select', {
  integration: true
});

test('Click in the trigger of a closed select opens the dropdown', async function(assert) {
  assert.expect(2);

  this.options = ['Paris', 'Tokyo'];
  let select = AddeSelectPage.create({
    scope: '[data-test-select]'
  });

  this.render(hbs`{{adde-select options=options}}`);
  assert.notOk(select.dropdown.isOpen, 'The dropdown is not visible by default');

  await select.trigger.click();
  assert.ok(select.dropdown.isOpen, 'The dropdown is open after clicking on the trigger');
});

test('Search functionality is enabled by default', async function(assert) {
  assert.expect(1);

  this.options = ['Paris', 'Tokyo'];
  let select = AddeSelectPage.create({
    scope: '[data-test-select]'
  });

  this.render(hbs`{{adde-select options=options}}`);

  await select.trigger.click();
  assert.ok(select.dropdown.content.search.isPresent, 'The search box is rendered');
});

test('The search functionality can be disabled by passing `searchEnabled=false`', async function(assert) {
  assert.expect(2);

  this.options = ['Paris', 'Tokyo'];
  let select = AddeSelectPage.create({
    scope: '[data-test-select]'
  });

  this.render(hbs`{{adde-select options=options searchEnabled=false}}`);

  await select.trigger.click();
  assert.ok(select.dropdown.isOpen, 'Dropdown is rendered');
  assert.notOk(select.dropdown.content.search.isPresent, 'The search box is NOT rendered');
});

test('If a `searchPlaceholder` is provided, it shows on the searchbox of single selects while nothing is there', async function(assert) {
  assert.expect(1);

  let select = AddeSelectPage.create({
    scope: '[data-test-select]'
  });
  this.options = ['Paris', 'Tokyo'];
  this.searchPlaceholder = 'Search something';
  this.render(hbs`{{adde-select options=options searchPlaceholder=searchPlaceholder}}`);

  await select.trigger.click();
  assert.equal(select.dropdown.content.search.placeholderText(), 'Search something', 'The searchbox has the proper placeholder');
});

test('A placeholder can be defined', function(assert) {
  assert.expect(2);

  this.options = ['Paris', 'Tokyo'];
  this.render(hbs`{{adde-select options=options}}`);
  assert.equal(this.$('.adde-select-placeholder').length, 0, 'Nothing is rendered when no placeholder is defined');

  this.placeholder = 'Type something';
  this.render(hbs`{{adde-select options=options placeholder=placeholder}}`);
  assert.equal(this.$('.adde-select-placeholder').text(), 'Type something', 'The placeholder is rendered');
});
