module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015' <% if(info.useReact){ %>, 'react' <%}%>]
      }
    }, {
      test: /\.<% if(info.useSass){ %>s<%}%>css$/,
      loader: 'style!css<% if(info.useSass){ %>!sass!<%}%>'
    }]
  }
};
