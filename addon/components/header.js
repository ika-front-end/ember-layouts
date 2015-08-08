import Ember from 'ember';
import ContainerMixin from 'ember-ika-layouts/mixins/container';

export default Ember.Component.extend(ContainerMixin, {
  classNames: ['clearfix'],
  tagName: 'header',
  /**
   * 用户
   * @type {String}
   */
  userName: '',

  /**
   * app名称
   * @type {String}
   */
  appName: ''
});
