import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import AddeSelectPage from '@addepar/select/test-support/pages/adde-select';

moduleForComponent('adde-select', 'Integration | Component | adde select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{adde-select options=['Paris', 'Tokyo']}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  // this.render(hbs`
  //   {{#adde-select options=['Paris', 'Tokyo']}}
  //     template block text
  //   {{/adde-select}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});

test('Click in the trigger of a closed select opens the dropdown', async function(assert) {
  this.set('options', ['Paris', 'Tokyo']);
  this.render(hbs`{{adde-select options=options}}`);

  let select = AddeSelectPage.create({
    scope: '[data-test-select]'
  });
  assert.notOk(select.dropdown.isOpen, 'The dropdown is not visible by default');

  await select.trigger.click();
  assert.ok(select.dropdown.isOpen, 'The dropdown is open after clicking on the trigger');

  await select.trigger.click();
  assert.notOk(select.dropdown.isOpen, 'The dropdown is closed after clicking on the trigger');
});

test('A placeholder can be defined', function(assert) {
  this.render(hbs`{{adde-select options=['Paris', 'Tokyo']}}`);
  assert.equal(this.$('.adde-select-placeholder').length, 0, 'Nothing is rendered when no placeholder is defined');

  this.render(hbs`{{adde-select options=['Paris', 'Tokyo'] placeholder='Type something'}}`);
  assert.equal(this.$('.adde-select-placeholder').text(), 'Type something', 'The placeholder is rendered');
});
