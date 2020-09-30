function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "../../../web_modules/react.js";

var _ref = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
  clipRule: "evenodd"
});

function SvgHiMenu(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), _ref);
}

export default SvgHiMenu;