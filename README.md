# generator-webpack-quick [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generates a quick webpack bootstrap web application for prototyping

## Installation

First, install [Yeoman](http://yeoman.io) and generator-webpack-quick using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-webpack-quick
```

Then generate your new project:

```bash
yo webpack-quick
```
## Getting started

To start, just run :
```bash
npm start
```
This will automatically open your browser and start the webpack-development-server, which refreshes your build on file change.

## But Why ?

There are *loads* of generators for webpack and react, but all of them focus on large scale production applications, and are generally overkill when wanting to experiment around, or maybe make something simple. The fact of the matter is, you dont have to use complex architecture or a gigantic project structure to get a simple project up and running, but at the same time, its still quite a task to get even simple boilerplate for running ES6 or React. This generator :

- Comes prepackaged with `.jshintrc` for code quality.
- Sourcemaps included.
- Has the option for installing jsx plugins in case you want to use react.
- Has the option of including sass.
- Uses only webpack and npm scripts for all build tasks.

## Deploying a web application

Just run :
```sh
npm run build
```
And your website is ready to go, with minified and concatenated scripts. Just push to the `gh-pages` branch of your repo and view your site online.

## License

MIT © [sohamkamani](sohamkamani.com)


[npm-image]: https://badge.fury.io/js/generator-webpack-quick.svg
[npm-url]: https://npmjs.org/package/generator-webpack-quick
[travis-image]: https://travis-ci.org/sohamkamani/generator-webpack-quick.svg?branch=master
[travis-url]: https://travis-ci.org/sohamkamani/generator-webpack-quick
[daviddm-image]: https://david-dm.org/sohamkamani/generator-webpack-quick.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/sohamkamani/generator-webpack-quick
