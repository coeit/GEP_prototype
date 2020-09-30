function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from '../../web_modules/react.js';
/**
 * @typedef  {Object}   AppSelectProps
 * @property {string}   className css classes to apply in root
 * @property {string[]} options   select options
 *
 * @param {AppSelectProps} props component properties
 */

export default function AppSelect(props) {
  const {
    className,
    options,
    ...selectProps
  } = props;
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: `group ${className}`,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "py-3 px-4 w-full rounded border-2 border-transparent hover:border-blue-400 focus:border-blue-600 shadow-xs bg-gray-100 text-gray-800 text-sm focus:outline-none focus:bg-white group-hover:bg-white",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, selectProps), options === null || options === void 0 ? void 0 : options.map((opt, index) => /*#__PURE__*/React.createElement("option", {
    key: `${opt.value}-${index}`,
    value: opt.value
  }, opt.label))), /*#__PURE__*/React.createElement("label", {
    htmlFor: props.label,
    className: `px-1 py-1 text-sm
           ${focus ? 'text-blue-500' : hover ? 'text-gray-800' : 'text-gray-600'}`
  }, props.label));
}