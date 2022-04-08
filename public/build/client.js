"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["client"],{

/***/ "./assets/client.js":
/*!**************************!*\
  !*** ./assets/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Client */ "./assets/components/Client.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application




react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Client__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById('client'));

/***/ }),

/***/ "./assets/components/Client.js":
/*!*************************************!*\
  !*** ./assets/components/Client.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _js_temporal_polyfill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @js-temporal/polyfill */ "./node_modules/@js-temporal/polyfill/dist/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Client = /*#__PURE__*/function (_Component) {
  _inherits(Client, _Component);

  var _super = _createSuper(Client);

  function Client() {
    var _this;

    _classCallCheck(this, Client);

    _this = _super.call(this);
    _this.id = document.querySelector('#client').dataset.id;
    _this.state = {
      client: {}
    };
    return _this;
  }

  _createClass(Client, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getClient();
    }
  }, {
    key: "getClient",
    value: function getClient() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_15___default().get("http://localhost:8000/api/client/" + this.id).then(function (client) {
        _this2.setState({
          client: client.data
        });
      });
    }
  }, {
    key: "getAge",
    value: function getAge(birthdate) {
      if (!birthdate) {
        return 0;
      }

      var age = (_js_temporal_polyfill__WEBPACK_IMPORTED_MODULE_16__.Temporal.Now.instant().epochSeconds - birthdate.timestamp) / 60 / 60 / 24 / 365;
      return Math.round(age);
    }
  }, {
    key: "render",
    value: function render() {
      var client = this.state.client;
      var possessions = this.state.client.possessions;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("section", {
        className: "row-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h2", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "Fiche client")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
        className: "text-center",
        key: client.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h4", null, client.firstname, " ", client.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", null, this.getAge(client.birthdate), " ans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", null, client.adress), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", null, "Tel.: ", client.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", null, "E-mail: ", client.email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("table", {
        className: "table table-bordered table-hover table-striped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("thead", {
        className: "table-dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("th", {
        scope: "col"
      }, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("th", {
        scope: "col"
      }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("th", {
        scope: "col"
      }, "Valeur"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tbody", null, possessions === null || possessions === void 0 ? void 0 : possessions.map(function (possession) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("tr", {
          key: possession.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, possession.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, possession.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("td", null, possession.value));
      })))));
    }
  }]);

  return Client;
}(react__WEBPACK_IMPORTED_MODULE_14__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_map_js-node_modules-39f2f2"], () => (__webpack_exec__("./assets/client.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtELFVBQVUsQ0FBQ0UsS0FBaEIsQ0FISixDQUR3QjtBQUFBLE9BQTNCLENBREwsQ0FSSixDQWJKLENBREosQ0FESjtBQW9DSDs7OztFQWxFZ0IvQjs7QUFxRXJCLGlFQUFlSixNQUFmOzs7Ozs7Ozs7OztBQ3pFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2xpZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENsaWVudCBmcm9tICcuL2NvbXBvbmVudHMvQ2xpZW50JztcbiAgICBcblJlYWN0RE9NLnJlbmRlcig8Q2xpZW50Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnQnKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVGVtcG9yYWwgfSBmcm9tICdAanMtdGVtcG9yYWwvcG9seWZpbGwnO1xuICAgIFxuY2xhc3MgQ2xpZW50IGV4dGVuZHMgQ29tcG9uZW50IFxue1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsaWVudCcpLmRhdGFzZXQuaWQ7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGNsaWVudDoge30gfTtcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2xpZW50KCk7XG4gICAgfVxuICAgIFxuICAgIGdldENsaWVudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2NsaWVudC9gKyB0aGlzLmlkKS50aGVuKGNsaWVudCA9PiB7XG4gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGllbnQ6IGNsaWVudC5kYXRhIH0pO1xuICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0QWdlKGJpcnRoZGF0ZSkge1xuICAgICAgICBpZiAoIWJpcnRoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFnZSA9IChUZW1wb3JhbC5Ob3cuaW5zdGFudCgpLmVwb2NoU2Vjb25kcyAtIChiaXJ0aGRhdGUudGltZXN0YW1wKSkvNjAvNjAvMjQvMzY1XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFnZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuc3RhdGUuY2xpZW50O1xuICAgICAgICBjb25zdCBwb3NzZXNzaW9ucyA9IHRoaXMuc3RhdGUuY2xpZW50LnBvc3Nlc3Npb25zO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PHNwYW4+RmljaGUgY2xpZW50PC9zcGFuPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIga2V5PXtjbGllbnQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsaWVudC5maXJzdG5hbWV9IHtjbGllbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLmdldEFnZShjbGllbnQuYmlydGhkYXRlKX0gYW5zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjbGllbnQuYWRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWwuOiB7Y2xpZW50LnBob25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FLW1haWw6IHtjbGllbnQuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRhYmxlLWRhcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5WYWxldXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3NzZXNzaW9ucz8ubWFwKHBvc3Nlc3Npb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cG9zc2Vzc2lvbi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Bvc3Nlc3Npb24ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwb3NzZXNzaW9uLnR5cGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cG9zc2Vzc2lvbi52YWx1ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuICAgIFxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJDbGllbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ29tcG9uZW50IiwiYXhpb3MiLCJUZW1wb3JhbCIsImlkIiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJzdGF0ZSIsImNsaWVudCIsImdldENsaWVudCIsImdldCIsInRoZW4iLCJzZXRTdGF0ZSIsImRhdGEiLCJiaXJ0aGRhdGUiLCJhZ2UiLCJOb3ciLCJpbnN0YW50IiwiZXBvY2hTZWNvbmRzIiwidGltZXN0YW1wIiwiTWF0aCIsInJvdW5kIiwicG9zc2Vzc2lvbnMiLCJmaXJzdG5hbWUiLCJuYW1lIiwiZ2V0QWdlIiwiYWRyZXNzIiwicGhvbmUiLCJlbWFpbCIsIm1hcCIsInBvc3Nlc3Npb24iLCJ0eXBlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9