function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "../../../web_modules/react.js";

var _ref = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
  clipRule: "evenodd"
});

function SvgHiChartSquareBar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), _ref);
}

export default SvgHiChartSquareBar;