'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var assign = require('object-assign');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('quick webpack') + ' generator!'
    ));

    var prompts = [{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      default: this.appname.replace(/\s/g, '-'),
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
    },{
      type: 'confirm',
      name: 'useSass',
      message: 'Would you like to use SASS?',
      default: true
    }, {
      type: 'confirm',
      name: 'useReact',
      message: 'Would you like to use React?',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    var self = this;
    var mv = function (from, to) {
      self.fs.move(self.destinationPath(from), self.destinationPath(to));
    };
    self.fs.copyTpl(
      self.templatePath('**/*'),
      self.destinationPath('.'), {
        info: assign({
          name: self.user.git.name(),
          email: self.user.git.email(),
        }, self.props)
      }
    );
    mv('_tern-project', '.tern-project');
    mv('_gitignore', '.gitignore');
    mv('_jshintrc', '.jshintrc');
    mv('_package.json', 'package.json');
    if (!self.props.useReact) {
      self.fs.delete(self.destinationPath('src/app.jsx'));
    }
    if (!self.props.useSass) {
      mv('styles/main.scss', 'styles/main.css');
    }
  },
  gitInit: function () {
    this.spawnCommandSync('git', ['init']);
  },
  install: function () {
    this.installDependencies({
      bower: false
    });
  }

});
