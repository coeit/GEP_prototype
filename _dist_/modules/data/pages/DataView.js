var _class;

import React from '../../../../web_modules/react.js';
import { observer } from '../../../../web_modules/mobx-react.js';
import AppLink from '../../../components/AppLink.js';
import IconAdd from '../../../assets/svg/hi-plus.js';
import GroupItem from '../components/GroupItem.js';
import { store } from '../../../store/index.js';

let DataView = observer(_class = class DataView extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: `container font-abeeze ${this.props.className || ''}`
    }, store.groups.map((group, index) => /*#__PURE__*/React.createElement(GroupItem, {
      key: `${group.name}-${index}`,
      group: group,
      groupIndex: index
    })), /*#__PURE__*/React.createElement(AppLink, {
      className: "group flex justify-center",
      to: `${this.props.location.pathname}/group/`
    }, /*#__PURE__*/React.createElement(IconAdd, {
      className: "w-24 text-gray-500 group-hover:text-blue-700"
    })));
  }

}) || _class;

export { DataView as default };