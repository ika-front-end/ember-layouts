import Em from 'ember';

export default Em.Mixin.create({
  /**
   * 如果isFluid为true则是流式布局
   **/
  classNameBindings: ['isFluid:container-fluid:container'],

  isFluid: false
});
