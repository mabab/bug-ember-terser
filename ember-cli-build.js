/* eslint-env node */

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let appOptions = {
    // Add options here
    fingerprint: {
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'svg', 'webp', 'json'],
      prepend: 'https://blabla.cdn.io/',
      generateAssetMap: true,
      fingerprintAssetMap: true,
    },
    sourcemaps: {
      enabled: true,
      extensions: ['js'],
    },
  };


  let app = new EmberApp(defaults, appOptions);
  return app.toTree();
};
