webpackHotUpdate(0,{400:function(module,exports,__webpack_require__){eval('"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(167);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar Cube = (function (_Component) {\n  function Cube(props) {\n    _classCallCheck(this, Cube);\n\n    _get(Object.getPrototypeOf(Cube.prototype), "constructor", this).call(this, props);\n\n    this.state = {\n      hidden: true\n    };\n  }\n\n  _inherits(Cube, _Component);\n\n  _createClass(Cube, [{\n    key: "handleClick",\n    value: function handleClick() {\n      this.setState({\n        hidden: false\n      });\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var value = this.props.count === -1 ? "&times" : this.props.count;\n      var bomb = this.props.count === -1 ? "bomb" : "";\n\n      var out = this.state.hidden ? "&middot;" : value;\n\n      return _react2["default"].createElement("span", { className: "Cube", onClick: this.handleClick.bind(this),\n        "data-x": this.props.x,\n        "data-y": this.props.y,\n        "data-z": this.props.z, dangerouslySetInnerHTML: { __html: out } });\n    }\n  }]);\n\n  return Cube;\n})(_react.Component);\n\nexports["default"] = Cube;\nmodule.exports = exports["default"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/cube.jsx\n ** module id = 400\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/cube.jsx?')}});