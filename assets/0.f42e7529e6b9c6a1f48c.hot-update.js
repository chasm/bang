webpackHotUpdate(0,{399:function(module,exports,__webpack_require__){eval('"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(401);\n\nvar generateMinefield = function generateMinefield(f, x, y, z) {\n  return Array.apply(null, Array(x)).map(function () {\n    return Array.apply(null, Array(y)).map(function () {\n      return Array.apply(null, Array(z)).map(function () {\n        return Math.floor(Math.random() * f) % f === 0 ? -1 : 0;\n      });\n    });\n  });\n};\n\nexports.generateMinefield = generateMinefield;\nvar evaluateMinefield = function evaluateMinefield(cube) {\n  var getCount = function getCount(arr, x, y, z) {\n    var pos = [-1, 0, 1];\n\n    var neighborhood = pos.map(function (x) {\n      return pos.map(function (y) {\n        return pos.map(function (z) {\n          return arr[x] && arr[x][y] && arr[x][y][z];\n        });\n      });\n    });\n\n    console.log("neighborhood for " + x + ", " + y + ", " + z, (0, _lodash.filter)(flatten(neighborhood, true), function (x) {\n      return x === -1;\n    }));\n\n    return 0;\n  };\n\n  return cube.map(function (plane, x) {\n    return plane.map(function (row, y) {\n      return row.map(function (cell, z) {\n        return cell === -1 ? -1 : getCount(cube, x, y, z);\n      });\n    });\n  });\n};\nexports.evaluateMinefield = evaluateMinefield;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/utils/index.js\n ** module id = 399\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/utils/index.js?')}});