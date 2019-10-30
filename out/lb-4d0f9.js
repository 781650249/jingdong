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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lb/lb.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lb/lb.js":
/*!******************!*\
  !*** ./lb/lb.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  function Slider(options) {\n    //根据 轮播图属性全部保存到轮播图对象身上\n    this.wrap = options.wrap;\n    this.imgList = options.imgList;\n    this.imgNum = this.imgList.length;\n    this.imgWidth = options.imgWidth;\n    this.width = options.width || $(this.wrap).width();\n    this.height = options.height || $(this.wrap).height();\n    this.animateType = options.animateType || 'animate';\n    this.isAuto = options.isAuto;\n    this.direction = options.direction || 'right';\n    this.nowIndex = 0;\n    this.flag = false;\n    this.createDom(); //创建轮播图的结构\n\n    this.initStyle(); //初始化轮播图样式\n\n    this.bindEvent(); //绑定轮播图事件\n\n    if (this.isAuto) {\n      this.autoMove();\n    }\n  }\n\n  Slider.prototype.createDom = function () {\n    var oUl = $('<ul class = \"slider\"></ul>');\n    var oSpot = $('<div class=\"spot\"></div>');\n    this.imgList.forEach(function (ele, index) {\n      var oLi = $('<li><a href=\"#\"><img src = \"' + ele + '\"></img></a></li>');\n      var oSpan = $('<span></span>');\n      oLi.appendTo(oUl);\n      oSpan.appendTo(oSpot);\n    });\n\n    if (this.animateType == 'animate') {\n      $('<li><a href =\"#\"><img src =\" ' + this.imgList[0] + '\"></img></a></li>').appendTo(oUl);\n    }\n\n    var leftBtn = $('<div class= \"left-btn\">&lt</div>');\n    var rightBtn = $('<div class= \"right-btn\">&gt</div>');\n    oUl.appendTo(this.wrap);\n    oSpot.appendTo(this.wrap);\n    leftBtn.appendTo(this.wrap);\n    rightBtn.appendTo(this.wrap);\n  };\n\n  Slider.prototype.initStyle = function () {\n    $(this.wrap).css({\n      overflow: 'hidden',\n      position: 'relative'\n    });\n    $('*', this.wrap).css({\n      listStyle: 'none',\n      margin: 0,\n      padding: 0\n    });\n    $('.slider', this.wrap).css({\n      width: this.animateType == 'animate' ? (this.imgNum + 1) * this.width : this.width,\n      height: this.height,\n      position: 'absolute'\n    });\n\n    if (this.animateType == 'animate') {\n      $('.slider > li').css({\n        width: this.width,\n        height: this.height,\n        float: 'left'\n      });\n    } else if (this.animateType == 'fade') {\n      $('.slider > li', this.wrap).css({\n        width: this.width,\n        height: this.height,\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        dispaly: 'none'\n      }).eq(this.nowIndex).css({\n        dispaly: 'block'\n      });\n    }\n\n    ;\n    $('.slider>li a, .slider>li a img', this.wrap).css({\n      dispaly: 'inline-block',\n      width: this.width,\n      height: this.height\n    });\n    $('.left-btn , .right-btn', this.wrap).css({\n      position: 'absolute',\n      textAlign: 'center',\n      height: 30,\n      width: 50,\n      top: '50%',\n      lineHeight: '30px',\n      cursor: 'pointer',\n      backgroundColor: 'rgba(0, 0, 0, 0.5)',\n      color: '#fff',\n      marginTop: -15\n    });\n    $('.right-btn', this.wrap).css({\n      right: 0\n    });\n    $('.spot').css({\n      position: 'absolute',\n      bottom: 0,\n      left: '50%',\n      marginLeft: -16 * this.imgNum / 2\n    });\n    $('.spot > span').css({\n      display: 'inline-block',\n      width: 10,\n      height: 10,\n      margin: 3,\n      borderRadius: '50%',\n      backgroundColor: '#fff',\n      cursor: 'pointer'\n    }).eq(this.nowIndex).css({\n      backgroundColor: 'red'\n    });\n  };\n\n  Slider.prototype.bindEvent = function () {\n    var self = this;\n    $('.left-btn', this.wrap).click(function (e) {\n      self.move('prev');\n    });\n    $('.right-btn', this.wrap).click(function (e) {\n      self.move('next');\n    });\n    $('.spot span', this.wrap).click(function () {\n      self.move($(this).index());\n    });\n    $(this.wrap).mouseenter(function () {\n      clearInterval(self.timer);\n    }).mouseleave(function () {\n      if (self.isAuto) {\n        self.autoMove();\n      }\n    });\n  };\n\n  Slider.prototype.move = function (dir) {\n    if (this.flag) {\n      return false;\n    }\n\n    ;\n    this.flag = true;\n\n    switch (dir) {\n      case 'prev':\n        if (this.animateType == 'animate') {\n          if (this.nowIndex == 0) {\n            console.log(nowIndex);\n            $('.slider', this.wrap).css({\n              left: -this.imgNum * this.width\n            });\n            this.nowIndex = this.imgNum - 1;\n          } else {\n            this.nowIndex--;\n          }\n        } else if (this.animateType == 'fade') {\n          if (this.nowIndex == 0) {\n            this.nowIndex = this.imgNum - 1;\n          } else {\n            this.nowIndex--;\n          }\n        }\n\n        break;\n\n      case 'next':\n        if (this.animateType == 'animate' && this.nowIndex == this.imgNum) {\n          $('.slider', this.wrap).css({\n            left: 0\n          });\n          this.nowIndex = 1;\n        } else if (this.animateType == 'fade' && this.nowIndex == this.imgNum - 1) {\n          this.nowIndex = 0;\n        } else {\n          this.nowIndex++;\n        }\n\n        break;\n\n      default:\n        this.nowIndex = dir;\n        break;\n    }\n\n    var self = this;\n\n    if (this.animateType == 'animate') {\n      $('.slider', this.wrap).animate({\n        left: -this.nowIndex * this.width\n      }, function () {\n        self.flag = false;\n      });\n    } else if (this.animateType = 'fade') {\n      $('.slider li', this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function () {\n        self.flag = false;\n      });\n    }\n\n    $('.spot > span', this.wrap).css({\n      backgroundColor: '#fff'\n    }).eq(this.nowIndex % this.imgNum).css({\n      backgroundColor: 'red'\n    });\n  };\n\n  Slider.prototype.autoMove = function () {\n    var self = this;\n    this.timer = setInterval(function () {\n      if (self.direction = 'left') {\n        $('.left-btn', self.wrap).trigger('click');\n      } else {\n        $('.right-btn', self.wrap).trigger('click');\n      }\n    }, 3000);\n  };\n\n  $.fn.extend({\n    Slider: function (options) {\n      options.wrap = this; //创建轮播图的包裹层 插入轮播图的位置\n\n      new Slider(options);\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./lb/lb.js?");

/***/ })

/******/ });