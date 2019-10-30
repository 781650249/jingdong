/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dropdown/dropdown.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dropdown/dropdown.js":
/*!******************************!*\
  !*** ./dropdown/dropdown.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  function DropDown(options) {\n    this.father = options.father; //$('#myJD') this指向的是DropDown\n\n    this.width = options.width;\n    this.title = options.title;\n    this.href = options.href;\n    this.menuList = options.menuList;\n    this.position = options.position || 'left';\n    this.direction = options.direction || 'y';\n    this.createDom();\n    this.initStyle();\n    this.bindEvent();\n  }\n\n  DropDown.prototype.createDom = function () {\n    var dropDownDiv = $('<div class = \"my-dropdown\"></div>');\n    this.menuList.forEach(function (menu, index) {\n      var oDl = $('<dl></dl>');\n      var items = menu.items;\n\n      if (menu.title) {\n        oDl.append($('<dt> ' + menu.title + '</dt> '));\n      }\n\n      items.forEach(function (item) {\n        oDl.append($('<dd><a href=\" ' + item.href + '\">' + item.name + '</a></dd>'));\n      });\n      dropDownDiv.append(oDl);\n    });\n    $(this.father).append($('<a class =\"dropDown-btn\" href =\"' + this.href + '\" >' + this.title + '</a>')).append(dropDownDiv);\n  };\n\n  DropDown.prototype.initStyle = function () {\n    var width = (this.width + 14) * 2;\n\n    if (this.direction == 'x') {\n      $('.my-dropdown', this.father).css({\n        display: 'none',\n        position: 'absolute',\n        width: 1184,\n        backgroundColor: '#fff',\n        border: '1px solid black',\n        left: this.position == 'right' ? -1 : 'auto',\n        right: this.position == 'right' ? -1 : 'auto',\n        right: -75,\n        zIndex: 100\n      });\n      var self = this;\n      $('.my-dropdown>dl', this.father).each(function (i) {\n        $(this).css({\n          width: self.menuList[i].width,\n          float: 'left',\n          borderRight: '1px solid #eee',\n          margin: 10\n        }).find('dd').css({\n          width: self.menuList[i].itemWidth\n        });\n      });\n    } else {\n      $('.my-dropdown', this.father).css({\n        position: 'absolute',\n        width: width,\n        backgroundColor: '#fff',\n        border: '1px solid black',\n        left: this.position == 'right' ? -1 : 'auto',\n        right: this.position == 'right' ? -1 : 'auto',\n        border: '1px solid #eee',\n        display: 'none',\n        zIndex: 100\n      });\n      $('.my-dropdown dl', this.father).css({\n        overflow: 'hidden',\n        borderBottom: '1px solid #ccc',\n        padding: '10px 0 10px 15px'\n      });\n    }\n\n    $('.my-dropdown dl dt', this.father).css({\n      fontWeight: 'bold',\n      color: '#666'\n    });\n    $('.my-dropdown dl dd', this.father).css({\n      width: this.width,\n      float: 'left',\n      whiteSpace: 'nowrap'\n    });\n  };\n\n  DropDown.prototype.bindEvent = function () {\n    var self = this;\n    $('.dropDown-btn', this.father).hover(function () {\n      $('.dropDown-btn', self.father).css({\n        'background-color': 'red'\n      });\n      $('.my-dropdown', self.father).show();\n    }, function () {\n      $(this).css({\n        'background-color': 'transparent'\n      });\n      $('.my-dropdown', self.father).hide();\n    });\n  };\n\n  $.fn.extend({\n    addDropdown: function (options) {\n      options.father = this;\n      new DropDown(options);\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./dropdown/dropdown.js?");

/***/ })

/******/ });