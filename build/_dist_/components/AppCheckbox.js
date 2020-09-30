function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../web_modules/react.js';
export default function AppText(props) {
  const {
    className,
    label,
    ...inputProps
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: `relative flex items-center
         ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: props.label,
    type: "checkbox"
  }, inputProps)), /*#__PURE__*/React.createElement("label", {
    className: "ml-2",
    htmlFor: props.label
  }, label));
}