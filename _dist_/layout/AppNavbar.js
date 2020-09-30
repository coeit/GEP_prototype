import React from '../../web_modules/react.js';
import { Link } from '../../web_modules/react-router-dom.js';
import IconHome from '../assets/svg/hi-collection.js';
import IconPlots from '../assets/svg/hi-chart-square-bar.js';
export default function MenuBar(props) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "fixed top-0 flex items-center px-6 py-3 z-50 w-full shadow-lg bg-blue-700"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/data",
    className: "flex items-center font-medium text-xl text-white"
  }, /*#__PURE__*/React.createElement(IconHome, {
    className: "w-6 h-6"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-3"
  }, "Data")), /*#__PURE__*/React.createElement(Link, {
    to: "/plots",
    className: "flex items-center ml-12 font-medium text-xl text-white"
  }, /*#__PURE__*/React.createElement(IconPlots, {
    className: "w-6 h-6"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-3"
  }, "Plots")));
}