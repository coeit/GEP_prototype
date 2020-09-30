import React, { Fragment } from '../../web_modules/react.js';
import NavBar from './AppNavbar.js';
export default function AppLayout(props) {
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement("div", {
    className: "mt-12"
  }, props.children));
}