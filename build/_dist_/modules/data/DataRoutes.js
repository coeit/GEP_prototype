import React, { lazy } from '../../../web_modules/react.js';
import { Route, Switch, useRouteMatch } from '../../../web_modules/react-router-dom.js';
const DataView = /*#__PURE__*/lazy(() => import("./pages/DataView.js"));
const GroupView = /*#__PURE__*/lazy(() => import("./pages/GroupView.js"));
const SampleView = /*#__PURE__*/lazy(() => import("./pages/SampleView.js"));
export default function AppRoutes() {
  const {
    path
  } = useRouteMatch();
  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: path,
    component: DataView
  }), /*#__PURE__*/React.createElement(Route, {
    path: `${path}/group/:groupIndex/sample/:sampleIndex?`,
    component: SampleView
  }), /*#__PURE__*/React.createElement(Route, {
    path: `${path}/group/:groupIndex?`,
    component: GroupView
  }));
}