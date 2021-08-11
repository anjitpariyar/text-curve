"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _titleModule = _interopRequireDefault(require("./title.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Title = _ref => {
  let {
    text,
    arc,
    radius,
    className
  } = _ref;
  const characters = text.split("");
  const degree = arc / characters.length;
  return /*#__PURE__*/_react.default.createElement("h2", {
    className: _titleModule.default.Title + " " + className,
    style: {
      height: "".concat(radius / 1.5, "px")
    }
  }, characters.map((char, i) => /*#__PURE__*/_react.default.createElement("span", {
    key: "heading-span-".concat(i),
    style: {
      height: "".concat(radius, "px"),
      transform: "rotate(".concat(degree * i - arc / 2, "deg)"),
      transformOrigin: "0 ".concat(radius, "px 0"),
      position: "absolute"
    }
  }, char)));
};

Title.propTypes = {
  text: _propTypes.default.string.isRequired,
  arc: _propTypes.default.number,
  // how curved do you want the text
  radius: _propTypes.default.number // how big do you want the curve

};
Title.defaultProps = {
  arc: 120,
  radius: 400,
  text: "Test",
  className: "test"
};
var _default = Title;
exports.default = _default;