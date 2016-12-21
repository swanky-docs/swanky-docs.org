const devServer = require('swanky').devServer;

// Start swanky dev server
module.exports = devServer(null, {
  module: {
    loaders: [
      {
        test: /node_modules\/pixi\.js/,
        loader: 'ify-loader'
      }
    ]
  }
});
