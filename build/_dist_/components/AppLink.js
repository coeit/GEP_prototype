function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../web_modules/react.js';
import { Link } from '../../web_modules/react-router-dom.js';
import AppRipple from './AppRipple.js';
export default function AppLink(props) {
  const {
    className,
    ...linkProps
  } = props;
  return /*#__PURE__*/React.createElement(Link, _extends({
    className: `relative overflow-hidden flex items-center focus:outline-none ${className}`
  }, linkProps), props.children, /*#__PURE__*/React.createElement(AppRipple, null));
}