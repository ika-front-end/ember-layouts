/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ika-layouts',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/normalize.css/normalize.css');
    app.import('vendor/styles/header.css');
    app.import('vendor/styles/scaffolding.css');
  }
};
