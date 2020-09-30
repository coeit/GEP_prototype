import React from '../../../../web_modules/react.js';
import MenuDrawer from './PlotsDrawer.js';
export default class PlotsLayout extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex max-w-screen min-h-full"
    }, /*#__PURE__*/React.createElement("main", {
      className: "flex flex-wrap p-6 mt-10 w-11/12 h-full"
    }, this.props.children), /*#__PURE__*/React.createElement(MenuDrawer, null));
  }

}