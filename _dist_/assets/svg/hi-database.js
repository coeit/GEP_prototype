function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "../../../web_modules/react.js";

var _ref = /*#__PURE__*/React.createElement("path", {
  d: "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
});

var _ref2 = /*#__PURE__*/React.createElement("path", {
  d: "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
});

var _ref3 = /*#__PURE__*/React.createElement("path", {
  d: "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
});

function SvgHiDatabase(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), _ref, _ref2, _ref3);
}

export default SvgHiDatabase;