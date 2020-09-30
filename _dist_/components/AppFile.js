function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../web_modules/react.js';
import AppRipple from './AppRipple.js';
/**
 * @typedef  {Object} AppFileProps Properties object for the AppFile component.
 * @property {string} className css classes to apply in the root component
 *
 * @param {AppFileProps} props component properties
 */

export default function AppFile(props) {
  const {
    className,
    children,
    ...inputProps
  } = props;
  return /*#__PURE__*/React.createElement("label", {
    className: `relative overflow-hidden
       flex items-center cursor-pointer
       rounded focus:outline-none font-medium uppercase
       ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "hidden",
    type: "file"
  }, inputProps)), children, /*#__PURE__*/React.createElement(AppRipple, null));
}