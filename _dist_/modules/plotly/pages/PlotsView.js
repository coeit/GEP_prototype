var _class;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../web_modules/react.js';
import { observer } from '../../../../web_modules/mobx-react.js';
import createPlotlyComponent from '../../../../web_modules/react-plotlyjs/factory.js';
import { store } from '../../../store/index.js';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

let PlotlyComponent = observer(_class = class PlotlyComponent extends React.Component {
  render() {
    return store.plots.length > 0 && store.plots.map((plot, index) => {
      var _plot$layout, _plot$layout$title;

      return /*#__PURE__*/React.createElement(Plot, _extends({
        key: `${plot === null || plot === void 0 ? void 0 : (_plot$layout = plot.layout) === null || _plot$layout === void 0 ? void 0 : (_plot$layout$title = _plot$layout.title) === null || _plot$layout$title === void 0 ? void 0 : _plot$layout$title.text}-${index}`,
        className: "w-1/2 h-1/2 mt-10"
      }, plot));
    });
  }

}) || _class;

export { PlotlyComponent as default };