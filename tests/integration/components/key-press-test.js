import { Promise as EmberPromise } from 'rsvp';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, triggerEvent } from 'ember-native-dom-helpers';

moduleForComponent('key-press', 'Integration | Component | key press', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{key-press}}`);

  return new EmberPromise(resolve => {
    find('input').addEventListener('keypress', e => {
      assert.equal(e.keyCode, 13);
      resolve();
    });

    triggerEvent(find('input'), 'keypress', {
      key: 13
    });
  });
});
