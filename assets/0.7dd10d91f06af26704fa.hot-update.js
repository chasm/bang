webpackHotUpdate(0,{399:function(module,exports){eval('"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar generateMinefield = function generateMinefield(f, x, y, z) {\n  return Array.apply(null, Array(x)).map(function () {\n    return Array.apply(null, Array(y)).map(function () {\n      return Array.apply(null, Array(z)).map(function () {\n        return Math.floor(Math.random() * f) % f === 0 ? -1 : 0;\n      });\n    });\n  });\n};\n\nexports.generateMinefield = generateMinefield;\nvar evaluateMinefield = function evaluateMinefield(cube) {\n  var getCount = function getCount(arr, x, y, z) {\n    var pos = [-1, 0, 1];\n\n    return pos.reduce(function (sum, dx) {\n      return pos.reduce(function (sum, dy) {\n        return pos.reduce(function (sum, dz) {\n          var v = arr[x + dx] && arr[x + dx][y + dy] && arr[x + dx][y + dy][z + dz];\n\n          var i = v === -1 && (dx !== 0 || dy !== 0 || dz !== 0) ? 1 : 0;\n\n          return sum + i;\n        });\n      });\n    });\n  };\n\n  cube.map(function (plane, x) {\n    console.log("plane x", plane, x);\n    return plane[x].map(function (line, y) {\n      console.log("line y", line, y);\n      return 0;\n    });\n  });\n  return cube;\n};\nexports.evaluateMinefield = evaluateMinefield;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/utils/index.js\n ** module id = 399\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/utils/index.js?')}});