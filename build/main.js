require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var path = __webpack_require__(1);
var _ = __webpack_require__(18);

// All configurations will extend these options
// ============================================
var all = {
    env: "development",
    // Root path of server
    root: path.normalize(__dirname + '/../../..'),
    // Server port
    port: 3000,
    ip: ''
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, __webpack_require__(11) || {});
/* WEBPACK VAR INJECTION */}.call(exports, "server/config/environment"))

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa-session2");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    publicPath: '/'
    /* extend (config, ctx) {
       if (ctx.isClient) {
         config.module.rules.push({
           enforce: 'pre',
           test: /\.(js|vue)$/,
           loader: 'eslint-loader',
           exclude: /(node_modules)/
         })
       }
     } */
  }
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Redis = __webpack_require__(12);

var _require = __webpack_require__(3),
    Store = _require.Store;

var RedisStore = function (_Store) {
  _inherits(RedisStore, _Store);

  function RedisStore(redisConfig) {
    _classCallCheck(this, RedisStore);

    var _this = _possibleConstructorReturn(this, (RedisStore.__proto__ || Object.getPrototypeOf(RedisStore)).call(this));

    _this.redis = new Redis(redisConfig);
    return _this;
  }

  _createClass(RedisStore, [{
    key: 'get',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(sid, ctx) {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.redis.get('SESSION:' + sid);

              case 2:
                data = _context.sent;
                return _context.abrupt('return', JSON.parse(data));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: 'set',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(session) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$sid = _ref3.sid,
            sid = _ref3$sid === undefined ? this.getID(24) : _ref3$sid,
            _ref3$maxAge = _ref3.maxAge,
            maxAge = _ref3$maxAge === undefined ? 1000000 : _ref3$maxAge;

        var ctx = arguments[2];
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.redis.set('SESSION:' + sid, JSON.stringify(session), 'EX', maxAge / 1000);

              case 3:
                _context2.next = 7;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2['catch'](0);

              case 7:
                return _context2.abrupt('return', sid);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      function set(_x4) {
        return _ref2.apply(this, arguments);
      }

      return set;
    }()
  }, {
    key: 'destroy',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(sid, ctx) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.redis.del('SESSION:' + sid);

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function destroy(_x5, _x6) {
        return _ref4.apply(this, arguments);
      }

      return destroy;
    }()
  }]);

  return RedisStore;
}(Store);

module.exports = RedisStore;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Koa = __webpack_require__(13);
var koaJson = __webpack_require__(15);
var onerror = __webpack_require__(16);
var bodyParser = __webpack_require__(14);
var resource = __webpack_require__(17);
var path = __webpack_require__(1);
var config = __webpack_require__(2);

var app = new Koa();

onerror(app);
app.use(bodyParser());
app.use(koaJson());
app.use(resource(path.join(config.root, config.appPath)));
if (app.env === 'development') {
  app.use(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(ctx.url);
              _context.next = 3;
              return next();

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

module.exports = app;

/***/ },
/* 7 */
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 7;


/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


// Development specific configuration
// ==================================

process.env.DEBUG = 'dev';

module.exports = {
    db: {
        mongo: {
            uri: 'mongodb://localhost/work'
        },
        mysql: {
            host: '172.16.45.254',
            user: 'root',
            password: 'cooxm',
            database: 'mysql',
            connectionLimit: 10
        },
        redis: {
            port: 6379,
            host: '172.16.45.254',
            db: 3,
            options: {
                return_buffers: false,
                auth_pass: ''
            }
        }
    },
    appPath: "src"
};

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("ioredis");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("koa-json");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("koa-onerror");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _this = this;

    var nuxtConfig, nuxt;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:

            // Import and Set Nuxt.js options
            nuxtConfig = __webpack_require__(4);

            nuxtConfig.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new Nuxt(nuxtConfig);


            app.keys = ['keys', 'keykeys'];
            app.use(session({
              key: 'koa:sess',
              maxAge: config.session_time,
              overwrite: true,
              httpOnly: true,
              signed: true,
              store: new Store(config.db.redis)
            }));

            // app.use(async(ctx, next) => {
            //   ctx.execSql = query;
            //   await next();
            // })

            // routes
            fs.readdirSync(path.join(__dirname, 'routes')).forEach(function (file) {
              if (~file.indexOf('.js')) app.use(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).routes());
            });

            // Build in development

            if (!nuxtConfig.dev) {
              _context2.next = 9;
              break;
            }

            _context2.next = 9;
            return new Builder(nuxt).build();

          case 9:
            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.on('error', function (error, ctx) {
              console.log('something error ' + JSON.stringify(ctx.onerror));
            });

            http.createServer(app.callback()).listen(config.port).on('listening', function () {
              console.log('server listening on: ' + config.port);
            });

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = __webpack_require__(6);
var config = __webpack_require__(2);
var session = __webpack_require__(3);
var Store = __webpack_require__(5);
//const query = require('./config/mysql-async.js');
var http = __webpack_require__(9);
var fs = __webpack_require__(8);
var path = __webpack_require__(1);
//const mongo = require('./config/mongo_db_connect.js');

var _require = __webpack_require__(10),
    Nuxt = _require.Nuxt,
    Builder = _require.Builder;

start();
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }
/******/ ]);
//# sourceMappingURL=main.map