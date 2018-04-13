import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('adde-select/trigger', 'Integration | Component | adde select/trigger', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{adde-select/trigger}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  // this.render(hbs`
  //   {{#adde-select/trigger}}
  //     template block text
  //   {{/adde-select/trigger}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
