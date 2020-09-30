import React from '../../../../web_modules/react.js';
import DataStorage from './DataSidebar.js';
export default function HomeLayout(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("main", {
    className: "flex justify-center mt-10 mr-6 px-6 md:px-12 w-full max-w-screen-md"
  }, props.children), /*#__PURE__*/React.createElement(DataStorage, null));
}