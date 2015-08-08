import Em from 'ember';
import { test, module } from 'qunit';
import ColMixin from 'ember-ika-layouts/mixins/col';

var Component;

module('Testing Col Mixin', {
  beforeEach: function(){
    Component = Em.Component.extend(ColMixin,{});
  }
});

test('set col', function(assert) {
  var c = Component.create();
  Em.run(function(){
    c.append();
    c.set('col', 2);
  });
  assert.ok(c.$().hasClass('col-md-2'));
});
