'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _oferPlugin = require('./ofer-plugin');

Object.keys(_oferPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _oferPlugin[key];
    }
  });
});
exports.configure = configure;
function configure(config) {
  config.globalResources('./ofer-plugin');
}