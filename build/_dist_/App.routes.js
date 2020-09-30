import React, { lazy, Suspense } from '../web_modules/react.js';
import { Route, Redirect, Switch } from '../web_modules/react-router-dom.js';
const DataHome = /*#__PURE__*/lazy(() => import("./modules/data/DataHome.js"));
const PlotsHome = /*#__PURE__*/lazy(() => import("./modules/plotly/PlotsHome.js"));
export default function AppRoutes() {
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement("div", null, "Loading...")
  }, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React.createElement(Redirect, {
    to: "/data"
  })), /*#__PURE__*/React.createElement(Route, {
    path: "/plots",
    component: PlotsHome
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/data",
    component: DataHome
  })));
}