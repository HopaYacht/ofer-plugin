'use strict';

System.register(['./ofer-plugin'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources('./ofer-plugin');
  }

  _export('configure', configure);

  return {
    setters: [function (_oferPlugin) {
      var _exportObj = {};

      for (var _key in _oferPlugin) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _oferPlugin[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {}
  };
});