import React from '../../../../web_modules/react.js';
import { Link, useRouteMatch } from '../../../../web_modules/react-router-dom.js';
import AppButton from '../../../components/AppButton.js';
import IconTrash from '../../../assets/svg/hi-trash.js';
import IconPencil from '../../../assets/svg/hi-pencil.js';
/**
 * Render group stats HTML element.
 *
 * @typedef  {Object} GroupItemStatProps Properties object for the GroupStat component
 * @property {string} label item label
 * @property {string} value item value
 *
 * @param {GroupItemStatProps} props component properties
 */

const GroupItemStat = props => {
  const {
    label,
    value
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: `flex mt-1 text-sm ${props.className}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "ml-1 text-gray-600"
  }, value));
};
/**
 * Render a Group item summary.
 *
 * @typedef {import('../store/types').Group} Group
 *
 * @typedef  {Object} GroupItemProps Properties object for the GroupItem component.
 * @property {string} className  css classest to apply in the root element
 * @property {number} groupIndex group index in the store
 * @property {Group}  group      group object in the store
 *
 * @param {GroupItemProps} props properties object
 */


export default function GroupItem(props) {
  const {
    className,
    group,
    groupIndex
  } = props; // const { path }     = useRouteMatch();

  const groupReplicates = group.samples.reduce((acc, sample) => acc += sample.replicates.length, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center mb-6 p-6
       shadow-lg
       bg-blue-200 hover:bg-blue-300
       ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg text-gray-800"
  }, group.name), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-2"
  }, /*#__PURE__*/React.createElement(GroupItemStat, {
    label: "Units:",
    value: group.countUnit
  }), /*#__PURE__*/React.createElement(GroupItemStat, {
    className: "ml-4",
    label: "Samples:",
    value: group.samples.length
  }), /*#__PURE__*/React.createElement(GroupItemStat, {
    className: "ml-4",
    label: "Replicates:",
    value: groupReplicates
  }))), /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center text-gray-500"
  }));
}