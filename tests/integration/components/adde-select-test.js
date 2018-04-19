import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import PageObject, { collection } from 'ember-classy-page-object';
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

test('Each option of the select is the result of yielding an item', async function(assert) {
  assert.expect(4);

  let select = AddeSelectPage.extend({
    scope: '[data-test-select]',
    dropdown: PageObject.extend({
      content: {
        items: collection({
          scope: 'li'
        })
      }
    })
  }).create();
  this.options = ['Paris', 'London', 'Tokyo'];
  this.render(
    hbs`
    {{#adde-select data-test-select=true options=options as |option|}}
      {{option}}
    {{/adde-select}}`
  );

  await select.trigger.click();
  assert.equal(select.dropdown.content.items.length, 3, 'There is as many options in the markup as in the supplied array');
  assert.equal(select.dropdown.content.items.eq(0).text, 'Paris');
  assert.equal(select.dropdown.content.items.eq(1).text, 'London');
  assert.equal(select.dropdown.content.items.eq(2).text, 'Tokyo');
});
