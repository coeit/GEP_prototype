
const code = ".js-plotly-plot .plotly .modebar {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n/* .js-plotly-plot .plotly .modebar--hover > :not(.watermark) {\n  @apply opacity-100;\n} */\n\n.js-plotly-plot .plotly .modebar-group {\n  display: flex;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);