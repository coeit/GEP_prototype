import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../common/index-6aa84179.js';
import { p as propTypes } from '../common/index-ce016b4a.js';

var factory = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = plotComponentFactory;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// The naming convention is:
//   - events are attached as `'plotly_' + eventName.toLowerCase()`
//   - react props are `'on' + eventName`
var eventNames = ['AfterExport', 'AfterPlot', 'Animated', 'AnimatingFrame', 'AnimationInterrupted', 'AutoSize', 'BeforeExport', 'ButtonClicked', 'Click', 'ClickAnnotation', 'Deselect', 'DoubleClick', 'Framework', 'Hover', 'LegendClick', 'LegendDoubleClick', 'Relayout', 'Relayouting', 'Restyle', 'Redraw', 'Selected', 'Selecting', 'SliderChange', 'SliderEnd', 'SliderStart', 'SunburstClick', 'Transitioning', 'TransitionInterrupted', 'Unhover'];
var updateEvents = ['plotly_restyle', 'plotly_redraw', 'plotly_relayout', 'plotly_relayouting', 'plotly_doubleclick', 'plotly_animated', 'plotly_sunburstclick']; // Check if a window is available since SSR (server-side rendering)
// breaks unnecessarily if you try to use it server-side.

var isBrowser = typeof window !== 'undefined';

function plotComponentFactory(Plotly) {
  var PlotlyComponent = /*#__PURE__*/function (_Component) {
    _inherits(PlotlyComponent, _Component);

    var _super = _createSuper(PlotlyComponent);

    function PlotlyComponent(props) {
      var _this;

      _classCallCheck(this, PlotlyComponent);

      _this = _super.call(this, props);
      _this.p = Promise.resolve();
      _this.resizeHandler = null;
      _this.handlers = {};
      _this.syncWindowResize = _this.syncWindowResize.bind(_assertThisInitialized(_this));
      _this.syncEventHandlers = _this.syncEventHandlers.bind(_assertThisInitialized(_this));
      _this.attachUpdateEvents = _this.attachUpdateEvents.bind(_assertThisInitialized(_this));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_this));
      _this.figureCallback = _this.figureCallback.bind(_assertThisInitialized(_this));
      _this.updatePlotly = _this.updatePlotly.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PlotlyComponent, [{
      key: "updatePlotly",
      value: function updatePlotly(shouldInvokeResizeHandler, figureCallbackFunction, shouldAttachUpdateEvents) {
        var _this2 = this;

        this.p = this.p.then(function () {
          if (_this2.unmounting) {
            return;
          }

          if (!_this2.el) {
            throw new Error('Missing element reference');
          } // eslint-disable-next-line consistent-return


          return Plotly.react(_this2.el, {
            data: _this2.props.data,
            layout: _this2.props.layout,
            config: _this2.props.config,
            frames: _this2.props.frames
          });
        }).then(function () {
          if (_this2.unmounting) {
            return;
          }

          _this2.syncWindowResize(shouldInvokeResizeHandler);

          _this2.syncEventHandlers();

          _this2.figureCallback(figureCallbackFunction);

          if (shouldAttachUpdateEvents) {
            _this2.attachUpdateEvents();
          }
        })["catch"](function (err) {
          if (_this2.props.onError) {
            _this2.props.onError(err);
          }
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.unmounting = false;
        this.updatePlotly(true, this.props.onInitialized, true);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this.unmounting = false; // frames *always* changes identity so fall back to check length only :(

        var numPrevFrames = prevProps.frames && prevProps.frames.length ? prevProps.frames.length : 0;
        var numNextFrames = this.props.frames && this.props.frames.length ? this.props.frames.length : 0;
        var figureChanged = !(prevProps.layout === this.props.layout && prevProps.data === this.props.data && prevProps.config === this.props.config && numNextFrames === numPrevFrames);
        var revisionDefined = prevProps.revision !== void 0;
        var revisionChanged = prevProps.revision !== this.props.revision;

        if (!figureChanged && (!revisionDefined || revisionDefined && !revisionChanged)) {
          return;
        }

        this.updatePlotly(false, this.props.onUpdate, false);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unmounting = true;
        this.figureCallback(this.props.onPurge);

        if (this.resizeHandler && isBrowser) {
          window.removeEventListener('resize', this.resizeHandler);
          this.resizeHandler = null;
        }

        this.removeUpdateEvents();
        Plotly.purge(this.el);
      }
    }, {
      key: "attachUpdateEvents",
      value: function attachUpdateEvents() {
        var _this3 = this;

        if (!this.el || !this.el.removeListener) {
          return;
        }

        updateEvents.forEach(function (updateEvent) {
          _this3.el.on(updateEvent, _this3.handleUpdate);
        });
      }
    }, {
      key: "removeUpdateEvents",
      value: function removeUpdateEvents() {
        var _this4 = this;

        if (!this.el || !this.el.removeListener) {
          return;
        }

        updateEvents.forEach(function (updateEvent) {
          _this4.el.removeListener(updateEvent, _this4.handleUpdate);
        });
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this.figureCallback(this.props.onUpdate);
      }
    }, {
      key: "figureCallback",
      value: function figureCallback(callback) {
        if (typeof callback === 'function') {
          var _this$el = this.el,
              data = _this$el.data,
              layout = _this$el.layout;
          var frames = this.el._transitionData ? this.el._transitionData._frames : null;
          var figure = {
            data: data,
            layout: layout,
            frames: frames
          };
          callback(figure, this.el);
        }
      }
    }, {
      key: "syncWindowResize",
      value: function syncWindowResize(invoke) {
        var _this5 = this;

        if (!isBrowser) {
          return;
        }

        if (this.props.useResizeHandler && !this.resizeHandler) {
          this.resizeHandler = function () {
            return Plotly.Plots.resize(_this5.el);
          };

          window.addEventListener('resize', this.resizeHandler);

          if (invoke) {
            this.resizeHandler();
          }
        } else if (!this.props.useResizeHandler && this.resizeHandler) {
          window.removeEventListener('resize', this.resizeHandler);
          this.resizeHandler = null;
        }
      }
    }, {
      key: "getRef",
      value: function getRef(el) {
        this.el = el;

        if (this.props.debug && isBrowser) {
          window.gd = this.el;
        }
      } // Attach and remove event handlers as they're added or removed from props:

    }, {
      key: "syncEventHandlers",
      value: function syncEventHandlers() {
        var _this6 = this;

        eventNames.forEach(function (eventName) {
          var prop = _this6.props['on' + eventName];
          var handler = _this6.handlers[eventName];
          var hasHandler = Boolean(handler);

          if (prop && !hasHandler) {
            _this6.addEventHandler(eventName, prop);
          } else if (!prop && hasHandler) {
            // Needs to be removed:
            _this6.removeEventHandler(eventName);
          } else if (prop && hasHandler && prop !== handler) {
            // replace the handler
            _this6.removeEventHandler(eventName);

            _this6.addEventHandler(eventName, prop);
          }
        });
      }
    }, {
      key: "addEventHandler",
      value: function addEventHandler(eventName, prop) {
        this.handlers[eventName] = prop;
        this.el.on(this.getPlotlyEventName(eventName), this.handlers[eventName]);
      }
    }, {
      key: "removeEventHandler",
      value: function removeEventHandler(eventName) {
        this.el.removeListener(this.getPlotlyEventName(eventName), this.handlers[eventName]);
        delete this.handlers[eventName];
      }
    }, {
      key: "getPlotlyEventName",
      value: function getPlotlyEventName(eventName) {
        return 'plotly_' + eventName.toLowerCase();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          id: this.props.divId,
          style: this.props.style,
          ref: this.getRef,
          className: this.props.className
        });
      }
    }]);

    return PlotlyComponent;
  }(_react.Component);

  PlotlyComponent.propTypes = {
    data: _propTypes["default"].arrayOf(_propTypes["default"].object),
    config: _propTypes["default"].object,
    layout: _propTypes["default"].object,
    frames: _propTypes["default"].arrayOf(_propTypes["default"].object),
    revision: _propTypes["default"].number,
    onInitialized: _propTypes["default"].func,
    onPurge: _propTypes["default"].func,
    onError: _propTypes["default"].func,
    onUpdate: _propTypes["default"].func,
    debug: _propTypes["default"].bool,
    style: _propTypes["default"].object,
    className: _propTypes["default"].string,
    useResizeHandler: _propTypes["default"].bool,
    divId: _propTypes["default"].string
  };
  eventNames.forEach(function (eventName) {
    PlotlyComponent.propTypes['on' + eventName] = _propTypes["default"].func;
  });
  PlotlyComponent.defaultProps = {
    debug: false,
    useResizeHandler: false,
    data: [],
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  };
  return PlotlyComponent;
}

});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(factory);

export default __pika_web_default_export_for_treeshaking__;
