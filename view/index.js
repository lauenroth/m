'use strict'
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var MeteorViewGenerator = yeoman.generators.NamedBase.extend({

  constructor: function () {
    // Calling the super constructor is important so our generator is correctly setup
    yeoman.generators.NamedBase.apply(this, arguments);

  },

  createView: function() {
    this.copy('_view.html', path.join('client/views/', this.name.toLowerCase() + '/' + this.name.toLowerCase() + '.html'));
    this.copy('_view.css', path.join('client/views/', this.name.toLowerCase() + '/' + this.name.toLowerCase() + '.css'));
    this.copy('_view.js', path.join('client/views/', this.name.toLowerCase() + '/' + this.name.toLowerCase() + '.js'));
  }

});

module.exports = MeteorViewGenerator;