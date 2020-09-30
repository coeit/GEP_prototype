var _dec, _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { action, computed, observable } from '../../web_modules/mobx.js';
import { computeAverage, computeVariance, createBarPlot } from '../utils/plotsHelper.js';
let DataStore = (_dec = computed({
  keepAlive: true
}), (_class = (_temp = class DataStore {
  constructor() {
    _initializerDefineProperty(this, "groups", _descriptor, this);

    _initializerDefineProperty(this, "plots", _descriptor2, this);
  }

  get accessionIds() {
    console.log('I am running!');

    if (this.groups.length) {
      if (this.groups[0].samples.length) {
        if (this.groups[0].samples[0].replicates.length) {
          return Object.keys(this.groups[0].samples[0].replicates[0]);
        }
      }
    }

    return [];
  }
  /**
   * Add a new group to the store.
   * @param {Group} group
   */


  addGroup(group) {
    this.groups.push(group);
  }
  /**
   * Add a new sample to an existing group.
   * @param {string} groupName name of the group
   * @param {Sample} sample
   */


  addSample(groupName, sample) {
    let foundGroup = this.groups.find(group => group.name === groupName);
    foundGroup.samples.push(sample);
  }
  /**
   * Add replicates to an existing sample within a group.
   * @param {string}      groupName  name of the group
   * @param {string}      sampleName name of the sample
   * @param {Replicate[]} replicates array of replicates
   */


  addReplicates(groupName, sampleName, replicates) {
    let foundGroup = this.groups.find(group => group.name === groupName);
    let foundSample = foundGroup.samples.find(sample => sample.name === sampleName);
    foundSample.replicates.push(...replicates);
  }
  /**
   * @param {object} groupView
   * @param {array} replicates
   */


  checkAndAddReplicates(groupView, replicates) {
    let groupIndex = this.groups.findIndex(group => group.name === groupView.groupName);

    if (groupIndex !== -1) {
      let sampleIndex = this.groups[groupIndex].samples.findIndex(sample => sample.name === groupView.sampleName);

      if (sampleIndex !== -1) {
        this.groups[groupIndex].samples[sampleIndex].replicates.push(...replicates);
      } else {
        let newSample = {
          name: groupView.sampleName,
          xTickValue: groupView.xTickValue,
          replicates: replicates
        };
        this.groups[groupIndex].samples.push(newSample);
      }
    } else {
      let newGroup = {
        name: groupView.groupName,
        countUnit: groupView.countUnit,
        samples: [{
          name: groupView.sampleName,
          xTickValue: groupView.xTickValue,
          replicates: replicates
        }]
      };
      this.groups.push(newGroup);
    }
  }

  addBarPlot(accessionId, showlegend) {
    /**
     * {
     *   [groupName]: {
     *      [sampleName]: {
     *        average:,
     *        variance:,
     *      }
     *   }
     * }
     */
    let plotData = {};
    this.groups.forEach(group => {
      plotData[group.name] = {};
      group.samples.forEach(sample => {
        plotData[group.name][sample.name] = {
          average: computeAverage(sample.replicates, accessionId)
        };
        plotData[group.name][sample.name].variance = computeVariance(sample.replicates, accessionId, plotData[group.name][sample.name].average);
      }); // console.log(plotData);
    });
    console.log(plotData);
    this.plots.push(createBarPlot(plotData, accessionId, showlegend, this.groups[0].countUnit));
  } // @computed get hasGroup(groupName) {
  //   return this.groups.find(group => group.name === groupName);
  // }
  // @computed get hasSample(groupName, sampleName) {
  //   return this.groups[groupName].samples.find(sample => sample.name === sampleName);
  // }


}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "groups", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "plots", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "accessionIds", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "accessionIds"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addGroup", [action], Object.getOwnPropertyDescriptor(_class.prototype, "addGroup"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addSample", [action], Object.getOwnPropertyDescriptor(_class.prototype, "addSample"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addReplicates", [action], Object.getOwnPropertyDescriptor(_class.prototype, "addReplicates"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkAndAddReplicates", [action], Object.getOwnPropertyDescriptor(_class.prototype, "checkAndAddReplicates"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addBarPlot", [action], Object.getOwnPropertyDescriptor(_class.prototype, "addBarPlot"), _class.prototype)), _class));
export class Group {
  /** @type {string} */

  /** @type {CountUnit} */

  /** @type {Sample[]} */
  constructor(state) {
    this.name = void 0;
    this.countUnit = void 0;
    this.samples = void 0;
    this.name = state.name;
    this.countUnit = state.countUnit;
    this.samples = state.samples;
  }

}
export class Sample {
  constructor() {
    this.name = void 0;
    this.xTickValue = void 0;
    this.replicates = void 0;
  }

}
export const store = new DataStore();