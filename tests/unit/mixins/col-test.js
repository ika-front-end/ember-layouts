import Em from 'ember';
import { test, module } from 'qunit';
import ColMixin from 'ember-ika-layouts/mixins/col';

var Component;

module('Testing Col Mixin', {
  beforeEach: function(){
    Component = Em.Component.extend(ColMixin,{});
  }
});

test('default col', function(assert) {
  var c = Component.create();
  Em.run(function(){
    c.append();
  });
  assert.ok(c.$().hasClass('col-md-3'));
  assert.ok(c.$().attr('class').indexOf('col-md-offset') === -1);
  assert.ok(c.$().attr('class').indexOf('col-md-pull') === -1);
  assert.ok(c.$().attr('class').indexOf('col-md-push') === -1);
});

test('set col', function(assert) {
  var c = Component.create();
  Em.run(function(){
    c.append();
    c.set('col', 2);
    c.set('offset', 2);
    c.set('push', 2);
    c.set('pull', 2);
  });
  assert.ok(c.$().hasClass('col-md-2'));
  assert.ok(c.$().hasClass('col-md-pull-2'));
  assert.ok(c.$().hasClass('col-md-push-2'));
  assert.ok(c.$().hasClass('col-md-offset-2'));
});
