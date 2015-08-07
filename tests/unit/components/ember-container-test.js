import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('em-container', 'EmContainerComponent', {});

test('isFluid', function(assert){
  var component = this.subject();
  component.set('isFluid', true);
  assert.ok(this.$().hasClass('container-fluid'));
});

test('default class is container', function(assert) {
  assert.ok(this.$().hasClass('container'));
});
