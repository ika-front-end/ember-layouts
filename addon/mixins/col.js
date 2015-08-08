import Em from 'ember';

export default Em.Mixin.create({
  classNameBindings: ['colClass', 'offsetClass', 'pushClass', 'pullClass'],
  /**
   * 列值
   * 默认为3
   **/
  col: 3,
  colClass: Em.computed('col', function(){
    var col = this.get('col') || 4;
    return 'col-md-' + col;
  }),

  /**
   * 偏移值
   * 偏移多少列
   **/
  offset: 0,
  offsetClass: Em.computed('offset', function() {
    var offset = this.get('offset');
    if(!!offset) {
      return 'col-md-offset-' + offset;
    }
    return '';
  }),

  pull: 0,
  pullClass: Em.computed('pull', function() {
    var pull = this.get('pull');
    if(!!pull) {
      return 'col-md-pull-' + pull;
    }
    return '';
  }),

  push: 0,
  pushClass: Em.computed('push', function() {
    var push = this.get('push');
    if(!!push) {
      return 'col-md-push-' + push;
    }
    return '';
  })
});
