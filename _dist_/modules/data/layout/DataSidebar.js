import React, { Fragment } from '../../../../web_modules/react.js';
import AppButton from '../../../components/AppButton.js';
import AppDrawer from '../../../components/AppDrawer.js';
import AppFile from '../../../components/AppFile.js';
import IconLeft from '../../../assets/svg/hi-chevron-left.js';
import IconFile from '../../../assets/svg/hi-document.js';
import IconDownload from '../../../assets/svg/hi-download.js';
import { store } from '../../../store/index.js';
/**
 * @typedef {Object} DataStorageProps Properties object for the DataStorage component.
 * @property {() => void} onLoad callback after loading files
 *
 * @param {DataStorageProps} props component properties
 */

export default class DataStorage extends React.Component {
  constructor() {
    super();

    this.handleLoadFile = event => {
      // Get the file ref
      const file = event.target.files.item(0); // Reset file input (allow consecutive uploads of the same file)

      event.target.value = null; // Accept JSON mime-type only

      if (!file || file.type !== 'application/json') return; // Use FileReader API to parse the input file

      const fr = new FileReader();
      fr.readAsText(file, 'utf-8');

      fr.onload = () => {
        // Update store
        store.groups.push(...JSON.parse(fr.result)); // Close drawer

        this.setState({
          show: false
        });
      };

      fr.onerror = err => console.log(err);
    };

    this.handleExport = () => {
      const blob = new Blob([JSON.stringify(store.groups, null, 2)], {
        type: 'application/json'
      });
      this.setState({
        exportUrl: URL.createObjectURL(blob)
      });
    };

    this.state = {
      show: false,
      exportUrl: null
    };
  }
  /**
   * Appends the groups of an exported data file to the current store.
   * @param {React.ChangeEvent<HTMLInputElement>} event file input event
   */


  render() {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("nav", {
      className: "fixed right-0 py-4 flex flex-col items-center justify-center h-full bg-gray-400"
    }, /*#__PURE__*/React.createElement(AppButton, {
      className: "rounded-full h-full",
      onClick: () => this.setState({
        show: true
      })
    }, /*#__PURE__*/React.createElement(IconLeft, {
      className: "w-6 h-6 text-white"
    }))), /*#__PURE__*/React.createElement(AppDrawer, {
      className: "z-50 w-1/2 md:w-1/3 lg:w-1/4",
      show: this.state.show,
      setShow: () => this.setState({
        show: false
      })
    }, /*#__PURE__*/React.createElement(AppFile, {
      className: "flex justify-center m-2 py-2 px-5 primary-blue",
      onChange: this.handleLoadFile
    }, /*#__PURE__*/React.createElement(IconFile, {
      className: "w-6 h-6 mr-3"
    }), "Import Data"), /*#__PURE__*/React.createElement("a", {
      className: "flex justify-center m-2 py-2 px-5 primary-blue font-medium uppercase",
      target: "_blank",
      rel: "noreferrer",
      href: this.state.exportUrl,
      download: "data.json",
      onClick: this.handleExport
    }, /*#__PURE__*/React.createElement(IconDownload, {
      className: "w-6 h-6 mr-3"
    }), "Export Data")));
  }

}