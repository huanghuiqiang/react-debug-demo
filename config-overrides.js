/* config-overrides.js */

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config.externals = {
      'react': 'window.React',
      'react-dom': 'window.ReactDOM',
    };
    return config;
  }