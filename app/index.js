'use strict';

var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
// var chalk  = require('chalk');


var MeteorGenerator = yeoman.generators.Base.extend({

  promptUser: function() {
    var done = this.async();

    // hello Yeoman!
    // console.log(this.yeoman);


    // get options
    var prompts = [{
      type: 'list',
      name: 'styleType',
      message: 'How do you wanna use styles?',
      choices: ['CSS', 'SASS', 'LESS'],
      default: 'CSS'
    },{
      type: 'list',
      name: 'styleFile',
      message: 'How do you wanna store your styles?',
      choices: ['One style file per template', 'One file to rule them all'],
      default: 0
    },{
      type: 'list',
      name: 'scriptType',
      message: 'Do you wanna use JavaScript or CoffeScript?',
      choices: ['JavaScript', 'CoffeScript'],
      default: 'JavaScript'
    }];

    var whatchaWannaDo = [{
      type: 'list',
      name: 'task',
      message: 'What do you wanna do?',
      choices: ['init app', 'create view']
    }]

    this.prompt(whatchaWannaDo, function (task) {
      this.task = task.task

      this.app_name = 'Test app';
    //   this.styleType = props.styleType;
    //   this.styleFile = props.styleFile;
    //   this.scriptType = props.scriptType;

      done();
    }.bind(this));
  },

  // create folder structure
  createFolders: function() {

    if (this.task == 'init app') {

      this.mkdir('client');
      this.mkdir('client/helpers');
      this.mkdir('client/views');
      this.mkdir('client/views/_layout');
      this.mkdir('client/views/_loading');

      this.mkdir('lib');

      this.mkdir('public');
      this.mkdir('public/images');

      this.mkdir('server');
    }

  },

  copyFiles: function() {

    if (this.task == 'init app') {
      this.copy('client/helpers/config.js', 'client/helpers/config.js');
      this.copy('client/helpers/errors.js', 'client/helpers/errors.js');

      this.copy('client/views/_layout/layout.css', 'client/views/_layout/layout.css');
      this.copy('client/views/_layout/layout.html', 'client/views/_layout/layout.html');
      this.copy('client/views/_layout/layout.js', 'client/views/_layout/layout.js');

      this.copy('client/views/_loading/loading.css', 'client/views/_loading/loading.css');
      this.copy('client/views/_loading/loading.html', 'client/views/_loading/loading.html');
      this.copy('client/views/_loading/loading.js', 'client/views/_loading/loading.js');

      this.copy('client/views/_main.html', 'client/views/main.html');
      this.copy('client/views/main.js', 'client/views/_layout/layout.js');
    }
  }

});


module.exports = MeteorGenerator;

