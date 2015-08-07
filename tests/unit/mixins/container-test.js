import Em from 'ember';
import { test, module } from 'qunit';
import ContainerMixin from 'ember-ika-layouts/mixins/container';

var Component;

module('Testing Container Mixin', {
 beforeEach: function(){
   Component = Em.Component.extend(ContainerMixin,{
   });
 }
});

test('isFluid', function(assert){
  var c = Component.create();
  c.set('isFluid', true);
  Em.run(function(){
    c.append();
  });
  assert.ok(c.$().hasClass('container-fluid'));
});

test('default class is container', function(assert) {
  var c = Component.create();
  Em.run(function() {
    c.append();
  });
  assert.ok(c.$().hasClass('container'));
});
