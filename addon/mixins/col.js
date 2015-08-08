import Em from 'ember';

export default Em.Mixin.create({
  col: 3,
  classNameBindings: ['colClass'],
  colClass: Em.computed('col' ,function(){
    var col = this.get('col') || 4;
    return 'col-md-' + col;
  })
});
