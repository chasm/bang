webpackHotUpdate(0,{399:function(module,exports){eval('"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar generateMinefield = function generateMinefield(f, x, y, z) {\n  return Array.apply(null, Array(x)).map(function () {\n    return Array.apply(null, Array(y)).map(function () {\n      return Array.apply(null, Array(z)).map(function () {\n        return Math.floor(Math.random() * f) % f === 0 ? -1 : 0;\n      });\n    });\n  });\n};\n\nexports.generateMinefield = generateMinefield;\nvar evaluateMinefield = function evaluateMinefield(m) {\n  var getCount = function getCount(a, x, y, z) {\n    var pos = [-1, 0, 1];\n\n    pos.reduce(function (sum, dx) {\n      return pos.reduce(function (sum, dy) {\n        return pos.reduce(function (sum, dz) {\n          var v = a[(x + dx, y + dy, z + dz)];\n\n          return v > -1 && (dx !== 0 || dy !== 0 || dz !== 0) ? 1 : 0;\n        });\n      });\n    });\n  };\n\n  return m.map(function (a, x) {\n    return a.map(function (b, y) {\n      return b.map(function (c, z) {\n        return c > -1 ? getCount(m, x, y, z) : x;\n      });\n    });\n  });\n};\nexports.evaluateMinefield = evaluateMinefield;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/utils/index.js\n ** module id = 399\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/utils/index.js?')}});