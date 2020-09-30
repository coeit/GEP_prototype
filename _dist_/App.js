import React from '../web_modules/react.js';
import { BrowserRouter } from '../web_modules/react-router-dom.js';
import AppRoutes from './App.routes.js';
import AppLayout from './layout/AppLayout.js';
export default function App() {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(AppLayout, null, /*#__PURE__*/React.createElement(AppRoutes, null)));
}