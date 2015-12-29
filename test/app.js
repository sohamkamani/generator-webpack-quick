'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-webpack-quick-test with using react and sass', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({useReact: true, useSass : true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.jshintrc',
      '.tern-project',
      'index.html',
      'src/app.jsx',
      'src/index.js',
      'styles/main.scss',
      '.gitignore',
      'main.js'
    ]);
    assert.noFile([
      'styles/main.css'
    ]);
  });
});

describe('generator-webpack-quick-test without using react', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({useReact: false, useSass : true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.jshintrc',
      '.tern-project',
      'index.html',
      'src/index.js',
      '.gitignore',
      'main.js'
    ]);
    assert.noFile([
      'src/app.jsx'
    ]);
  });
});

describe('generator-webpack-quick-test without using react or sass', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({useReact: false, useSass : false})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.jshintrc',
      '.tern-project',
      'index.html',
      'src/index.js',
      '.gitignore',
      'main.js',
      'styles/main.css'
    ]);
    assert.noFile([
      'styles/main.scss',
      'src/app.jsx',
    ]);
  });
});
