const buildConfig = require('swanky').buildConfig;

// Retrieve webpack build configuration
module.exports = buildConfig(null, {
  module: {
    loaders: [
      { test: /node_modules\/pixi\.js/,
        loader: 'ify-loader'
      }
    ]
  }
});
