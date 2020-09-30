import React, { lazy } from '../../../web_modules/react.js';
import { Route, Switch, useRouteMatch } from '../../../web_modules/react-router-dom.js';
const PlotsView = /*#__PURE__*/lazy(() => import("./pages/PlotsView.js"));
export default function AppRoutes() {
  const {
    path
  } = useRouteMatch();
  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: path,
    component: PlotsView
  }));
}