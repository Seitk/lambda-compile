var Promise = require('bluebird');

exports.handler = function(event, context, callback) {
  if (event.name.indexOf('.css') > 0) {
    var Sass = require('node-sass');
    var autoprefixer = require('autoprefixer');
    var postcss      = require('postcss');
    var CleanCSS = require('clean-css');

    new Promise(function(resolve) {
      resolve(Sass.renderSync({ data: event.content }));
    })
    .then(function(result) {
      return postcss([ autoprefixer ]).process(result.css.toString(), { from: undefined });
    })
    .then(function(result) {
      return new CleanCSS({ sourceMap: false }).minify(result.css);
    })
    .then(function(result) {
      callback((result.errors.length > 0 ? result.errors : undefined), { content: result.styles.trim() });
    })
    .catch(function(error) {
      callback(error, undefined);
    });
  } else if (event.name.indexOf('.js') > 0) {
    var UglifyJS = require("uglify-js");
    var result = UglifyJS.minify(event.content);
    callback(result.error, { content: result.code.trim() });
  } else {
    callback('Unsupported format');
  }
};

