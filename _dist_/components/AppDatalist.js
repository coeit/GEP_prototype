import React from '../../web_modules/react.js';
import AppText from './AppText.js';
export default class AppDatalist extends React.Component {
  constructor() {
    super();

    this.handleItemClick = accession => {
      this.setState({
        focus: false
      });
      this.props.onSelect(accession);
    };

    this.closeDropDown = () => {
      if (!this.state.focus) this.setState({
        focus: false
      });
    };

    this.state = {
      focus: false
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "relative group"
    }, /*#__PURE__*/React.createElement(AppText, {
      className: "group:",
      label: "Accession ID",
      value: this.props.value,
      onFocus: () => this.setState({
        focus: true
      }),
      onBlur: () => this.setState({
        focus: false
      }),
      onChange: e => this.props.onChange(e.target.value)
    }), /*#__PURE__*/React.createElement("ul", {
      className: `absolute py-4 z-40 w-full
             shadow-outer bg-white
             ${this.state.focus ? 'visible' : 'hidden'}`
    }, this.props.options.map((opt, index) => /*#__PURE__*/React.createElement("li", {
      key: `${opt}-${index}`,
      className: "px-3 py-1 hover:bg-gray-200 cursor-default",
      value: opt,
      onMouseDown: () => this.handleItemClick(opt)
    }, opt))));
  }

}