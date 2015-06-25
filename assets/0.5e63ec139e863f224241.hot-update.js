webpackHotUpdate(0,{73:function(module,exports,__webpack_require__){eval('"use strict";\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }\n\n__webpack_require__(74);\n\nvar _react = __webpack_require__(167);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(318);\n\nvar _utils = __webpack_require__(399);\n\nvar _cube = __webpack_require__(400);\n\nvar _cube2 = _interopRequireDefault(_cube);\n\n__webpack_require__(390);\n\nvar App = (function (_Component) {\n  function App() {\n    _classCallCheck(this, App);\n\n    _get(Object.getPrototypeOf(App.prototype), "constructor", this).apply(this, arguments);\n  }\n\n  _inherits(App, _Component);\n\n  _createClass(App, [{\n    key: "render",\n    value: function render() {\n      var mines = (0, _utils.evaluateMinefield)((0, _utils.generateMinefield)(7, 8, 10, 12));\n\n      var out = mines.map(function (x, i) {\n        return _react2["default"].createElement(\n          "section",\n          { className: "Board" },\n          x.map(function (y, j) {\n            return _react2["default"].createElement(\n              _reactBootstrap.Row,\n              null,\n              y.map(function (z, k) {\n                return _react2["default"].createElement(_cube2["default"], { count: z, x: x, y: y, z: z });\n              })\n            );\n          })\n        );\n      });\n\n      return _react2["default"].createElement(\n        _reactBootstrap.Grid,\n        { className: "Bang" },\n        out\n      );\n    }\n  }]);\n\n  return App;\n})(_react.Component);\n\n_react2["default"].render(_react2["default"].createElement(App, null), document.getElementById("app"));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/app.jsx\n ** module id = 73\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/app.jsx?')}});