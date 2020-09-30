import React from '../../../../web_modules/react.js';
import IconFile from '../../../assets/svg/hi-document.js';
import AppButton from '../../../components/AppButton.js';
import AppCheckbox from '../../../components/AppCheckbox.js';
import AppFile from '../../../components/AppFile.js';
import AppSelect from '../../../components/AppSelect.js';
import AppText from '../../../components/AppText.js';
import { store } from '../../../store/index.js';
import { parseCsv } from '../../../utils/fileHelper.js';
/**
 * Render a single group as a JSX.Element
 *
 * @typedef  {Object} GroupViewProps Properties object for the GroupVIew component.
 * @property {string} className css classes to apply in the root element
 *
 * @param {GroupViewProps} props component props
 */

export default class GroupView extends React.Component {
  constructor() {
    super();

    this.handleCancel = () => {
      this.props.history.push('/data');
    };

    this.handleSubmit = async event => {
      event.preventDefault();
      const {
        separator,
        header,
        accessionColumn,
        countColumn
      } = this.state;
      let replicates = await Promise.all(this.state.replicates.map(replicate => parseCsv(replicate, {
        separator,
        header,
        accessionColumn,
        countColumn
      })));
      store.checkAndAddReplicates(this.state, replicates);
      this.props.history.push('/data'); // store.groups.push(new Group({
      //   name: this.state.groupName,
      //   countUnit: this.state.countUnit,
      //   samples: [
      //     {
      //       name: this.state.sampleName,
      //       xTickValue: this.state.xTickValue,
      //       replicates,
      //     }
      //   ]
      // }));
    };

    this.state = {
      groupName: '',
      countUnit: 'raw',
      // Sample
      sampleName: '',
      xTickValue: 0,
      // Replicate
      replicates: [],
      accessionColumn: 0,
      countColumn: 0,
      header: false,
      separator: ''
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      className: `w-full ${this.props.className || ''}`,
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex"
    }, /*#__PURE__*/React.createElement(AppText, {
      className: "w-1/2",
      label: "Group name",
      value: this.state.groupName,
      onChange: event => this.setState({
        groupName: event.target.value
      })
    }), /*#__PURE__*/React.createElement(AppSelect, {
      className: "w-1/2 ml-2",
      label: "Count unit",
      value: this.state.countUnit,
      options: [{
        label: 'Raw',
        value: 'raw'
      }, {
        label: 'RPKM',
        value: 'rpkm'
      }, {
        label: 'TPM',
        value: 'tmp'
      }],
      onChange: event => this.setState({
        countUnit: event.target.value
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex mt-4"
    }, /*#__PURE__*/React.createElement(AppText, {
      className: "w-1/2",
      placeholder: "e.g. DAS-1",
      label: "Sample name",
      value: this.state.sampleName,
      onChange: event => this.setState({
        sampleName: event.target.value
      })
    }), /*#__PURE__*/React.createElement(AppText, {
      className: "ml-2 w-1/2",
      placeholder: "1..N",
      label: "Sample X-value",
      value: this.state.xTickValue,
      onChange: event => this.setState({
        xTickValue: event.target.value
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex mt-4"
    }, /*#__PURE__*/React.createElement(AppSelect, {
      className: "w-1/3",
      placeholder: "1..N",
      label: "separator",
      value: this.state.separator,
      options: [{
        label: 'Auto',
        value: ''
      }, {
        label: 'TAB',
        value: '\t'
      }, {
        label: 'CSV',
        value: ','
      }],
      onChange: event => this.setState({
        separator: event.target.value
      })
    }), /*#__PURE__*/React.createElement(AppText, {
      className: "ml-2 w-1/3",
      placeholder: "1..N",
      label: "ID column",
      value: this.state.accessionColumn,
      onChange: event => this.setState({
        accessionColumn: event.target.value
      })
    }), /*#__PURE__*/React.createElement(AppText, {
      className: "ml-2 w-1/3",
      placeholder: "1..N",
      label: "Count column",
      value: this.state.countColumn,
      onChange: event => this.setState({
        countColumn: event.target.value
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center mt-4"
    }, /*#__PURE__*/React.createElement(AppCheckbox, {
      className: "w-1/3",
      label: "Header",
      onChange: event => this.setState({
        header: event.target.checked
      })
    }), /*#__PURE__*/React.createElement(AppFile, {
      className: "flex justify-center ml-3 py-2 px-5 w-2/3 secondary-blue",
      multiple: true,
      onChange: event => this.setState({
        replicates: [...event.target.files]
      })
    }, /*#__PURE__*/React.createElement(IconFile, {
      className: "w-6 h-6 mr-3"
    }), "Upload Replicant")), /*#__PURE__*/React.createElement("div", {
      className: "flex mt-6 mx-1"
    }, /*#__PURE__*/React.createElement(AppButton, {
      className: "py-2 px-5 primary-blue",
      type: "Submit",
      onClick: this.handleSubmit
    }, "Save"), /*#__PURE__*/React.createElement(AppButton, {
      className: "ml-3 py-2 px-5 tertiary-pink",
      type: "Button",
      value: "Cancel",
      onClick: this.handleCancel
    }, "Cancel")));
  }

}