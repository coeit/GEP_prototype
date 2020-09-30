function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../web_modules/react.js';
import AppRipple from './AppRipple.js';
export default function AppButton(props) {
  const {
    className,
    ...buttonProps
  } = props;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `relative overflow-hidden
         flex items-center cursor-pointer
         rounded focus:outline-none
         font-medium uppercase
         ${className}`
  }, buttonProps), props.children, /*#__PURE__*/React.createElement(AppRipple, null));
}