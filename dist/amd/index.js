define(['exports', './ofer-plugin'], function (exports, _oferPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_oferPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _oferPlugin[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./ofer-plugin');
  }
});