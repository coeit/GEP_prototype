import React from '../../../../web_modules/react.js';
import { useParams } from '../../../../web_modules/react-router-dom.js';
export default function SampleView(props) {
  const {
    group,
    sample
  } = useParams();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, " SampleView works!  "), /*#__PURE__*/React.createElement("p", null, " Group: ", group, "   "), /*#__PURE__*/React.createElement("p", null, " Sample: ", sample, " "));
}