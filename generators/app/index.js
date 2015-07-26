'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  paths: function () {
    this.destinationRoot('chapter03');
  },

  writing: {
    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      )
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      )
      this.fs.copy(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      )
      this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('index.js')
      )
      this.fs.copy(
        this.templatePath('_range.js'),
        this.destinationPath('range.js')
      )
      this.fs.copy(
        this.templatePath('_array.js'),
        this.destinationPath('array.js')
      )
      this.fs.copy(
        this.templatePath('_list.js'),
        this.destinationPath('list.js')
      )

    }
  }
});
