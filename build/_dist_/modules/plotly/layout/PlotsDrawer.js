import React, { Fragment } from '../../../../web_modules/react.js';
import IconLeft from '../../../assets/svg/hi-chevron-left.js';
import AppButton from '../../../components/AppButton.js';
import AppCheckbox from '../../../components/AppCheckbox.js';
import AppDrawer from '../../../components/AppDrawer.js';
import AppDatalist from '../../../components/AppDatalist.js';
import { store } from '../../../store/index.js';
/**
 * @typedef {Object} DataStorageProps Properties object for the DataStorage component.
 * @property {() => void} onLoad callback after loading files
 *
 * @param {DataStorageProps} props component properties
 */

export default class PlotMenuDrawer extends React.Component {
  constructor() {
    var _store$accessionIds$;

    super();

    this.searchAccessionIds = accession => {
      let accessionIdsView = [];

      for (let i = 0; i < store.accessionIds.length; i++) {
        if (store.accessionIds[i].includes(accession)) accessionIdsView.push(store.accessionIds[i]);
        if (accessionIdsView.length >= 10) break;
      }

      this.setState({
        accessionIdsView
      });
    };

    this.selectAccession = accession => {
      this.setState({
        accession
      });
      this.searchAccessionIds(accession);
    };

    this.handleSubmit = event => {
      // Prevent default form submit event
      event.preventDefault(); // Add plot

      store.addBarPlot(this.state.accession, this.state.showlegend); // Close the drawer

      this.setState({
        showDrawer: false
      });
    };

    this.handleReset = event => {
      // Close the drawer
      this.setState({
        showDrawer: false
      });
    };

    this.state = {
      accessionIds: store.accessionIds,
      accessionIdsView: store.accessionIds.slice(0, 10),
      showDrawer: false,
      showlegend: false,
      accession: (_store$accessionIds$ = store.accessionIds[0]) !== null && _store$accessionIds$ !== void 0 ? _store$accessionIds$ : ''
    };
  }

  render() {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("nav", {
      className: "fixed right-0 py-4 flex flex-col items-center justify-center h-full bg-gray-400"
    }, /*#__PURE__*/React.createElement(AppButton, {
      className: "rounded-full h-full",
      onClick: () => this.setState({
        showDrawer: true
      })
    }, /*#__PURE__*/React.createElement(IconLeft, {
      className: "w-6 h-6 text-white"
    }))), /*#__PURE__*/React.createElement(AppDrawer, {
      className: "z-50 p-3 w-1/2 md:w-1/3 lg:w-1/4",
      show: this.state.showDrawer,
      setShow: () => this.setState({
        showDrawer: false
      })
    }, /*#__PURE__*/React.createElement("form", {
      className: "flex flex-col w-full"
    }, /*#__PURE__*/React.createElement(AppDatalist, {
      value: this.state.accession,
      options: this.state.accessionIdsView,
      onChange: this.selectAccession,
      onSelect: this.selectAccession
    }), /*#__PURE__*/React.createElement(AppCheckbox, {
      onChange: event => this.setState({
        showlegend: event.target.checked
      }),
      label: "Show legend"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex justify-end w-full"
    }, /*#__PURE__*/React.createElement(AppButton, {
      className: "px-5 py-2 primary-blue",
      type: "Submit",
      onClick: this.handleSubmit
    }, "Save"), /*#__PURE__*/React.createElement(AppButton, {
      className: "px-5 py-2 primary-pink ml-3",
      type: "Button",
      value: "Reset",
      onClick: this.handleReset
    }, "Reset")))));
  }

}