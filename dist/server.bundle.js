/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TOGGLE_ADD_WARNING = exports.TOGGLE_SPINNER_OFF = exports.TOGGLE_SPINNER_ON = undefined;
	exports.toggleAddWarning = toggleAddWarning;
	exports.toggleSpinnerOn = toggleSpinnerOn;
	exports.toggleSpinnerOff = toggleSpinnerOff;

	var _apiCaller = __webpack_require__(9);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var TOGGLE_SPINNER_ON = exports.TOGGLE_SPINNER_ON = 'TOGGLE_SPINNER_ON';
	var TOGGLE_SPINNER_OFF = exports.TOGGLE_SPINNER_OFF = 'TOGGLE_SPINNER_OFF';
	var TOGGLE_ADD_WARNING = exports.TOGGLE_ADD_WARNING = 'TOGGLE_ADD_WARNING';

	// Export Actions

	function toggleAddWarning() {
	  return {
	    type: TOGGLE_ADD_WARNING
	  };
	}

	function toggleSpinnerOn() {
	  return {
	    type: TOGGLE_SPINNER_ON
	  };
	}

	function toggleSpinnerOff() {
	  return {
	    type: TOGGLE_SPINNER_OFF
	  };
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_TEMPLATES = exports.ADD_LISTS = exports.TOGGLE_LIST_ITEM = exports.ADD_LIST_ITEM = exports.ADD_LIST = undefined;
	exports.addPost = addPost;
	exports.addListRequest = addListRequest;
	exports.addListItem = addListItem;
	exports.addListItemRequest = addListItemRequest;
	exports.toggleListItem = toggleListItem;
	exports.toggleListItemRequest = toggleListItemRequest;
	exports.addLists = addLists;
	exports.addTemplates = addTemplates;
	exports.fetchPosts = fetchPosts;
	exports.fetchDemoLists = fetchDemoLists;
	exports.fetchList = fetchList;
	exports.fetchTemplates = fetchTemplates;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;

	var _apiCaller = __webpack_require__(9);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	var _AppActions = __webpack_require__(6);

	var _reactRouter = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var ADD_LIST = exports.ADD_LIST = 'ADD_LIST';
	var ADD_LIST_ITEM = exports.ADD_LIST_ITEM = 'ADD_LIST_ITEM';
	var TOGGLE_LIST_ITEM = exports.TOGGLE_LIST_ITEM = 'TOGGLE_LIST_ITEM';
	var ADD_LISTS = exports.ADD_LISTS = 'ADD_LISTS';
	var ADD_TEMPLATES = exports.ADD_TEMPLATES = 'ADD_TEMPLATES';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';

	// Export Actions
	function addPost(list) {
	  return {
	    type: ADD_LIST,
	    list: list
	  };
	}

	function addListRequest(list) {
	  var endpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'lists/find_or_create';

	  return function (dispatch) {
	    return (0, _apiCaller2.default)(endpoint, 'post', {
	      list: {
	        verb: list.verb,
	        action: list.action
	      }
	    }).then(function (res) {
	      if (res.list) {
	        dispatch(addPost(res.list));
	        _reactRouter.browserHistory.push('/lists/' + res.list.cuid);
	      } else {
	        dispatch((0, _AppActions.toggleAddWarning)());
	      }
	    });
	  };
	}

	function addListItem(list) {
	  return {
	    type: ADD_LIST_ITEM,
	    list: list
	  };
	}

	function addListItemRequest(props) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists/' + props.cuid, 'post', {
	      item: props.text
	    }).then(function (res) {
	      return dispatch(addListItem(res.list));
	    });
	  };
	}

	function toggleListItem(list) {
	  return {
	    type: TOGGLE_LIST_ITEM,
	    list: list
	  };
	}

	function toggleListItemRequest(props) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists/' + props.cuid + '/toggle/' + props.list_item_id, 'put').then(function (res) {
	      return dispatch(toggleListItem(res.list));
	    });
	  };
	}

	function addLists(lists) {
	  return {
	    type: ADD_LISTS,
	    lists: lists
	  };
	}

	function addTemplates(templates) {
	  return {
	    type: ADD_TEMPLATES,
	    templates: templates
	  };
	}

	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists').then(function (res) {
	      dispatch(addLists(res.lists));
	      dispatch((0, _AppActions.toggleSpinnerOff)());
	    });
	  };
	}

	function fetchDemoLists() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists/demo').then(function (res) {
	      dispatch(addLists(res.lists));
	    });
	  };
	}

	function fetchList(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists/' + cuid).then(function (res) {
	      dispatch(addPost(res.list));
	    });
	  };
	}

	function fetchTemplates() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('templates').then(function (res) {
	      dispatch(addTemplates(res.templates));
	    });
	  };
	}

	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}

	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;

	var _PostActions = __webpack_require__(7);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// Initial State
	var initialState = {
	  data: []
	};

	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {

	    case _PostActions.ADD_LIST:
	      return {
	        data: [action.list].concat(_toConsumableArray(state.data))
	      };

	    case _PostActions.ADD_LIST_ITEM:
	      return {
	        data: [action.list]
	      };

	    case _PostActions.TOGGLE_LIST_ITEM:
	      return {
	        data: [action.list]
	      };

	    case _PostActions.ADD_LISTS:
	      return {
	        data: action.lists
	      };

	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };

	    default:
	      return state;
	  }
	};

	/* Selectors */

	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};

	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};

	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(79);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(17);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];

	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    credentials: 'same-origin',
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;

	    if (!response.ok) {
	      return Promise.reject(json);
	    }

	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = exports.getAuth = undefined;

	var _redux = __webpack_require__(10);

	var _UserActions = __webpack_require__(29);

	var UserActions = _interopRequireWildcard(_UserActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var isLogin = function isLogin() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	  var action = arguments[1];

	  switch (action.type) {
	    case UserActions.TOGGLE_LOGIN_MODE:
	      return !state;
	    default:
	      return state;
	  }
	};

	var message = function message() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var action = arguments[1];

	  switch (action.type) {
	    case UserActions.TOGGLE_LOGIN_MODE:
	    case UserActions.MANUAL_LOGIN_USER:
	    case UserActions.SIGNUP_USER:
	    case UserActions.LOGOUT_USER:
	    case UserActions.LOGIN_SUCCESS_USER:
	    case UserActions.SIGNUP_SUCCESS_USER:
	      return '';
	    case UserActions.LOGIN_ERROR_USER:
	    case UserActions.SIGNUP_ERROR_USER:
	      return action.message;
	    default:
	      return state;
	  }
	};

	var isWaiting = function isWaiting() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var action = arguments[1];

	  switch (action.type) {
	    case UserActions.MANUAL_LOGIN_USER:
	    case UserActions.SIGNUP_USER:
	    case UserActions.LOGOUT_USER:
	      return true;
	    case UserActions.LOGIN_SUCCESS_USER:
	    case UserActions.SIGNUP_SUCCESS_USER:
	    case UserActions.LOGOUT_SUCCESS_USER:
	    case UserActions.LOGIN_ERROR_USER:
	    case UserActions.SIGNUP_ERROR_USER:
	    case UserActions.LOGOUT_ERROR_USER:
	      return false;
	    default:
	      return state;
	  }
	};

	var authenticated = function authenticated() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var action = arguments[1];

	  switch (action.type) {
	    case UserActions.LOGIN_SUCCESS_USER:
	    case UserActions.SIGNUP_SUCCESS_USER:
	    case UserActions.LOGOUT_ERROR_USER:
	      return true;
	    case UserActions.LOGIN_ERROR_USER:
	    case UserActions.SIGNUP_ERROR_USER:
	    case UserActions.LOGOUT_SUCCESS_USER:
	      return false;
	    default:
	      return state;
	  }
	};

	var data = function data() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var action = arguments[1];

	  switch (action.type) {
	    default:
	      return state;
	  }
	};

	var userReducer = (0, _redux.combineReducers)({
	  isLogin: isLogin,
	  isWaiting: isWaiting,
	  authenticated: authenticated,
	  message: message,
	  data: data
	});

	exports.default = userReducer;

	/* Selectors */

	var getAuth = exports.getAuth = function getAuth(state) {
	  return state.user.authenticated;
	};

	var getUser = exports.getUser = function getUser(state) {
	  return state.user.data;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _q = __webpack_require__(14);

	var Q = _interopRequireWildcard(_q);

	var _listItem = __webpack_require__(31);

	var _listItem2 = _interopRequireDefault(_listItem);

	var _list = __webpack_require__(30);

	var _list2 = _interopRequireDefault(_list);

	var _hasha = __webpack_require__(74);

	var _hasha2 = _interopRequireDefault(_hasha);

	var _lodash = __webpack_require__(4);

	var _ = _interopRequireWildcard(_lodash);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = Q.Promise;

	var Schema = _mongoose2.default.Schema;


	var listTemplate = new Schema({
	  actions: [String],
	  items: [_listItem2.default.schema],
	  sha: { type: 'String' },
	  dateAdded: { type: 'Date', default: Date.now, required: true },
	  dateModified: { type: 'Date', default: Date.now, required: false }
	});

	listTemplate.virtual('name').get(function () {
	  return this.actions[0];
	});

	listTemplate.pre('save', function (next) {
	  //update sha
	  if (this.items) {
	    this.sha = (0, _hasha2.default)(_.map(this.items, 'text'));
	  } else {
	    this.sha = undefined;
	  }
	  next();
	});

	listTemplate.methods.addListItems = function (items, cb) {
	  var _this = this;

	  var newItem = void 0;
	  items.forEach(function (item) {
	    newItem = new _listItem2.default({ text: item });
	    _this.items.push(newItem);
	  });
	  return this.save(cb);
	};

	listTemplate.query.byItems = function (items) {
	  //create sha
	  var itemSha = (0, _hasha2.default)(items);
	  return this.findOne({ sha: itemSha });
	};

	listTemplate.statics.newWithItems = function (action, items) {
	  var newTemplate = new this({
	    actions: [action]
	  });
	  newTemplate.sha = (0, _hasha2.default)(items);
	  newTemplate.addListItems(items);
	  return newTemplate;
	};

	listTemplate.set('toJSON', { virtuals: true });

	exports.default = _mongoose2.default.model('ListTemplate', listTemplate);

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("q");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var secrets = {
	  wolframAlphaId: process.env.WA_APP_ID,
	  session: process.env.SESSION_SECRET,
	  google: {
	    clientID: process.env.GOOGLE_CLIENT_ID,
	    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	    callbackURL: process.env.GOOGLE_CALLBACK_URL
	  }
	};

	exports.default = secrets;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var userSchema = new Schema({
	  email: { type: String, unique: true, lowercase: true },
	  tokens: Array,
	  name: { type: String, default: '' },
	  picture: { type: String, default: '' },
	  oauthID: { type: Number },
	  active: { type: Boolean, default: true }
	});

	exports.default = _mongoose2.default.model('User', userSchema);

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;

	var _reactIntl = __webpack_require__(34);

	var _intl = __webpack_require__(75);

	var _intl2 = _interopRequireDefault(_intl);

	var _intlLocalesSupported = __webpack_require__(76);

	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

	__webpack_require__(77);

	var _en = __webpack_require__(86);

	var _en2 = _interopRequireDefault(_en);

	var _en3 = __webpack_require__(51);

	var _en4 = _interopRequireDefault(_en3);

	__webpack_require__(78);

	var _fr = __webpack_require__(87);

	var _fr2 = _interopRequireDefault(_fr);

	var _fr3 = __webpack_require__(52);

	var _fr4 = _interopRequireDefault(_fr3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};

	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


	// need Intl polyfill, Intl not supported in Safari


	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}

	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;

	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }

	    return messages;
	  }, {});
	}

	// bring in intl polyfill, react-intl, and app-specific language data

	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);

	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddWarning = exports.getShowSpinner = undefined;

	var _redux = __webpack_require__(10);

	var _AppActions = __webpack_require__(6);

	var appActions = _interopRequireWildcard(_AppActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var showSpinner = function showSpinner() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var action = arguments[1];

	  switch (action.type) {
	    case appActions.TOGGLE_SPINNER_ON:
	      return true;
	    case appActions.TOGGLE_SPINNER_OFF:
	      return false;
	    default:
	      return state;
	  }
	};

	// Import Actions


	var showAddWarning = function showAddWarning() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var action = arguments[1];

	  switch (action.type) {
	    case appActions.TOGGLE_ADD_WARNING:
	      return !state;
	    default:
	      return state;
	  }
	};

	var AppReducer = (0, _redux.combineReducers)({
	  showSpinner: showSpinner,
	  showAddWarning: showAddWarning
	});

	/* Selectors */

	// Get showAddPost
	var getShowSpinner = exports.getShowSpinner = function getShowSpinner(state) {
	  return state.app.showSpinner;
	};

	var getShowAddWarning = exports.getShowAddWarning = function getShowAddWarning(state) {
	  return state.app.showAddWarning;
	};

	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _reactHelmet = __webpack_require__(11);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _ListItemCreateWidget = __webpack_require__(60);

	var _ListItemCreateWidget2 = _interopRequireDefault(_ListItemCreateWidget);

	var _ToDoList = __webpack_require__(62);

	var _ToDoList2 = _interopRequireDefault(_ToDoList);

	var _reactBootstrap = __webpack_require__(1);

	var _lodash = __webpack_require__(4);

	var _ = _interopRequireWildcard(_lodash);

	var _ListItem = {
	  "single-post": "_3WBNyo3Y-Wlonpx9TraFNs",
	  "post-title": "c7bLRaDpcvPhJK3BKe3qC",
	  "author-name": "_3VfLYmYD8sUI0xpN-5LmMC",
	  "post-desc": "_1O528nqTevN8pxpQgaXbf5",
	  "post-action": "_28oILnUIpYzOtEeQ24QiMH",
	  "divider": "bMpRb9kdQ1-Ghr58o6Qtl",
	  "post-detail": "sEvv7fb_Sc9V6H0ba2nl9"
	};

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _PostActions = __webpack_require__(7);

	var _AppActions = __webpack_require__(6);

	var _PostReducer = __webpack_require__(8);

	var _UserReducer = __webpack_require__(12);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Actions


	// Import Selectors


	var PostDetailPage = function (_Component) {
	  _inherits(PostDetailPage, _Component);

	  function PostDetailPage() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PostDetailPage);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostDetailPage.__proto__ || Object.getPrototypeOf(PostDetailPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleAddListItem = function (text) {
	      var cuid = _this.props.list.cuid;
	      _this.props.dispatch((0, _PostActions.addListItemRequest)({ cuid: cuid, text: text }));
	    }, _this.handleToggleListItem = function (listItem) {
	      var cuid = _this.props.list.cuid;
	      var list_item_id = listItem._id;
	      _this.props.dispatch((0, _PostActions.toggleListItemRequest)({ cuid: cuid, list_item_id: list_item_id }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PostDetailPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _AppActions.toggleSpinnerOff)());
	    }
	  }, {
	    key: 'percentComplete',
	    value: function percentComplete() {
	      var numItems = this.items.length;
	      var numComplete = _.filter(this.items, 'complete').length;
	      return _.round(numComplete * 100 / numItems) || 0;
	    }
	  }, {
	    key: 'belongsToUser',
	    value: function belongsToUser() {
	      return _.includes(this.props.list._users, this.props.user._id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: this.props.list.name
	      }), _jsx(_reactBootstrap.Grid, {}, void 0, _jsx(_reactBootstrap.Row, {
	        className: 'show-grid'
	      }, void 0, _jsx(_reactBootstrap.Col, {
	        xs: 12,
	        md: 6,
	        mdOffset: 3
	      }, void 0, _jsx('div', {}, void 0, _jsx('h3', {}, void 0, 'I want to ', _jsx('strong', {}, void 0, this.props.list.name)), _jsx(_reactBootstrap.ProgressBar, {
	        striped: true,
	        now: this.props.list.percentComplete,
	        label: this.props.list.percentComplete + '% Complete!'
	      })), _jsx(_ToDoList2.default, {
	        readOnly: !this.belongsToUser(),
	        todos: this.props.list.items,
	        toggleListItem: this.handleToggleListItem
	      }), this.belongsToUser() ? _jsx(_ListItemCreateWidget2.default, {
	        addListItem: this.handleAddListItem
	      }) : null))));
	    }
	  }]);

	  return PostDetailPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in sever side.


	PostDetailPage.need = [function (params) {
	  return (0, _PostActions.fetchList)(params.cuid);
	}];

	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    list: (0, _PostReducer.getPost)(state, props.params.cuid),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _reactBootstrap = __webpack_require__(1);

	var _PostList = __webpack_require__(59);

	var _PostList2 = _interopRequireDefault(_PostList);

	var _PostCreateWidget = __webpack_require__(58);

	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

	var _PostActions = __webpack_require__(7);

	var _TemplateActions = __webpack_require__(27);

	var _AppActions = __webpack_require__(6);

	var _AppReducer = __webpack_require__(23);

	var _PostReducer = __webpack_require__(8);

	var _TemplateReducer = __webpack_require__(28);

	var _UserReducer = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	({
	  "wantto-header": "_1LGOl9m-UpD3PZyyYTTdcE"
	});

	// Import Components


	// Import Actions


	// Import Selectors

	var _ref2 = _jsx(_reactBootstrap.Row, {
	  className: 'show-grid'
	}, void 0, _jsx(_reactBootstrap.Col, {
	  xs: 12,
	  md: 10,
	  mdOffset: 1
	}, void 0, _jsx('h1', {
	  className: 'wantto-header'
	}, void 0, 'I want to')));

	var PostListPage = function (_Component) {
	  _inherits(PostListPage, _Component);

	  function PostListPage() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PostListPage);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostListPage.__proto__ || Object.getPrototypeOf(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
	      if (confirm('Do you want to delete this post')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
	      }
	    }, _this.handleAddList = function (verb, action) {
	      _this.props.dispatch((0, _PostActions.addListRequest)({ verb: verb, action: action }));
	    }, _this.handleAddEmptyList = function (verb, action) {
	      _this.props.dispatch((0, _PostActions.addListRequest)({ verb: verb, action: action }, 'lists'));
	    }, _this.handleToggleAddWarning = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddWarning)());
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PostListPage, [{
	    key: 'componentDidMount',


	    // constructor(props) {
	    //   super(props);
	    //   this.props.dispatch(toggleSpinnerOn());
	    // }

	    value: function componentDidMount() {
	      this.props.dispatch((0, _PostActions.fetchPosts)());
	      this.props.dispatch((0, _TemplateActions.fetchTemplates)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx(_reactBootstrap.Grid, {}, void 0, _ref2, _jsx(_reactBootstrap.Row, {
	        className: 'show-grid'
	      }, void 0, _jsx(_reactBootstrap.Col, {
	        xs: 12,
	        md: 8,
	        mdOffset: 2
	      }, void 0, _jsx(_PostCreateWidget2.default, {
	        toggleAddWarning: this.handleToggleAddWarning,
	        showAddWarning: this.props.showAddWarning,
	        addPost: this.handleAddList,
	        addEmptyList: this.handleAddEmptyList,
	        showAddPost: true,
	        templates: this.props.templates
	      }), _jsx(_PostList2.default, {
	        handleDeletePost: this.handleDeletePost,
	        posts: this.props.posts
	      }))))));
	    }
	  }]);

	  return PostListPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in sever side.


	PostListPage.need = [function () {
	  return (0, _PostActions.fetchPosts)();
	}, function () {
	  return (0, _TemplateActions.fetchTemplates)();
	}];

	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    posts: (0, _PostReducer.getPosts)(state),
	    templates: (0, _TemplateReducer.getTemplates)(state),
	    showAddWarning: (0, _AppReducer.getShowAddWarning)(state),
	    authorized: (0, _UserReducer.getAuth)(state)
	  };
	}

	PostListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _reactBootstrap = __webpack_require__(1);

	var _UnAuthWidget = __webpack_require__(65);

	var _UnAuthWidget2 = _interopRequireDefault(_UnAuthWidget);

	var _PostActions = __webpack_require__(7);

	var _PostReducer = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Components


	// Import Actions


	// Import Selectors


	var UnAuthPage = function (_Component) {
	  _inherits(UnAuthPage, _Component);

	  function UnAuthPage() {
	    _classCallCheck(this, UnAuthPage);

	    return _possibleConstructorReturn(this, (UnAuthPage.__proto__ || Object.getPrototypeOf(UnAuthPage)).apply(this, arguments));
	  }

	  _createClass(UnAuthPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PostActions.fetchDemoLists)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx(_UnAuthWidget2.default, {
	        lists: this.props.lists
	      });
	    }
	  }]);

	  return UnAuthPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in sever side.


	UnAuthPage.need = [function () {
	  return (0, _PostActions.fetchDemoLists)();
	}];

	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    lists: (0, _PostReducer.getPosts)(state)
	  };
	}

	UnAuthPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(UnAuthPage);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ADD_TEMPLATES = undefined;
	exports.addTemplates = addTemplates;
	exports.fetchTemplates = fetchTemplates;

	var _apiCaller = __webpack_require__(9);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var ADD_TEMPLATES = exports.ADD_TEMPLATES = 'ADD_TEMPLATES';

	// Export Actions

	function addTemplates(templates) {
	  return {
	    type: ADD_TEMPLATES,
	    templates: templates
	  };
	}

	function fetchTemplates() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('templates').then(function (res) {
	      dispatch(addTemplates(res.templates));
	    });
	  };
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTemplates = undefined;

	var _TemplateActions = __webpack_require__(27);

	// Initial State
	var initialState = { data: [] };

	var TemplateReducer = function TemplateReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {

	    case _TemplateActions.ADD_TEMPLATES:
	      return {
	        data: action.templates
	      };

	    default:
	      return state;
	  }
	};

	/* Selectors */

	// get all templates
	var getTemplates = exports.getTemplates = function getTemplates(state) {
	  return state.templates.data;
	};

	// Export Reducer
	exports.default = TemplateReducer;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LOGOUT_ERROR_USER = exports.LOGOUT_SUCCESS_USER = exports.LOGOUT_USER = exports.SIGNUP_ERROR_USER = exports.SIGNUP_SUCCESS_USER = exports.SIGNUP_USER = exports.LOGIN_ERROR_USER = exports.LOGIN_SUCCESS_USER = exports.MANUAL_LOGIN_USER = exports.TOGGLE_LOGIN_MODE = undefined;
	exports.beginLogout = beginLogout;
	exports.logoutSuccess = logoutSuccess;
	exports.logoutError = logoutError;
	exports.toggleLoginMode = toggleLoginMode;
	exports.logOut = logOut;

	var _reactRouterRedux = __webpack_require__(15);

	var _apiCaller = __webpack_require__(9);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TOGGLE_LOGIN_MODE = exports.TOGGLE_LOGIN_MODE = 'TOGGLE_LOGIN_MODE';
	var MANUAL_LOGIN_USER = exports.MANUAL_LOGIN_USER = 'MANUAL_LOGIN_USER';
	var LOGIN_SUCCESS_USER = exports.LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER';
	var LOGIN_ERROR_USER = exports.LOGIN_ERROR_USER = 'LOGIN_ERROR_USER';
	var SIGNUP_USER = exports.SIGNUP_USER = 'SIGNUP_USER';
	var SIGNUP_SUCCESS_USER = exports.SIGNUP_SUCCESS_USER = 'SIGNUP_SUCCESS_USER';
	var SIGNUP_ERROR_USER = exports.SIGNUP_ERROR_USER = 'SIGNUP_ERROR_USER';
	var LOGOUT_USER = exports.LOGOUT_USER = 'LOGOUT_USER';
	var LOGOUT_SUCCESS_USER = exports.LOGOUT_SUCCESS_USER = 'LOGOUT_SUCCESS_USER';
	var LOGOUT_ERROR_USER = exports.LOGOUT_ERROR_USER = 'LOGOUT_ERROR_USER';

	function beginLogout() {
	  return { type: LOGOUT_USER };
	}

	function logoutSuccess() {
	  return { type: LOGOUT_SUCCESS_USER };
	}

	function logoutError() {
	  return { type: LOGOUT_ERROR_USER };
	}

	function toggleLoginMode() {
	  return { type: TOGGLE_LOGIN_MODE };
	}

	function logOut() {
	  return function (dispatch) {
	    dispatch(beginLogout());

	    return (0, _apiCaller2.default)('logout', 'post').then(function (response) {
	      dispatch(logoutSuccess());
	      dispatch((0, _reactRouterRedux.push)('/login'));
	    }).catch(function (err) {
	      dispatch(logoutError());
	    });
	  };
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _q = __webpack_require__(14);

	var Q = _interopRequireWildcard(_q);

	var _listItem = __webpack_require__(31);

	var _listItem2 = _interopRequireDefault(_listItem);

	var _listTemplate = __webpack_require__(13);

	var _listTemplate2 = _interopRequireDefault(_listTemplate);

	var _lodash = __webpack_require__(4);

	var _ = _interopRequireWildcard(_lodash);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = Q.Promise;

	var Schema = _mongoose2.default.Schema;


	var listSchema = new Schema({
	  cuid: { type: 'String', required: true },
	  verb: { type: 'String', required: true },
	  action: { type: 'String', required: true },
	  _template: { type: Schema.Types.ObjectId, ref: 'ListTemplate' },
	  items: [_listItem2.default.schema],
	  _users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	  dateAdded: { type: 'Date', default: Date.now, required: true },
	  dateModified: { type: 'Date', default: Date.now, required: false }
	});

	listSchema.virtual('name').get(function () {
	  return this.verb + ' every ' + this.action;
	});

	listSchema.virtual('percentComplete').get(function () {
	  var numItems = this.items.length;
	  var numComplete = _.filter(this.items, 'complete').length;
	  return _.round(numComplete * 100 / numItems) || 0;
	});

	listSchema.query.forUser = function (user) {
	  return this.find({ _users: user._id });
	};

	listSchema.methods.addListItem = function (item) {
	  var list = this;
	  //update listtemplate
	  return _listTemplate2.default.findOne({ _id: this._template }).exec().then(function (template) {
	    if (!template) {
	      return Q.reject();
	    }
	    var newItem = new _listItem2.default({ text: item });
	    list.items.push(newItem);
	    template.items.push(newItem);
	    template.save();
	    list.addItemToOtherLists(item);
	    return list.save();
	  }).then(function (newList) {
	    return newList;
	  }).catch(function (err) {
	    console.log(err);
	    return Q.reject(err);
	  });
	};

	listSchema.methods.addItemsFromTemplate = function (template, cb) {
	  this.items = _.clone(template.items);
	  this._template = template._id;
	  return this.save(cb);
	};

	listSchema.methods.addItemToOtherLists = function (itemText) {

	  this.constructor.find({ _template: this._template, _id: { $ne: this._id } }).exec().then(function (lists) {
	    lists.forEach(function (list) {
	      list.items.push(new _listItem2.default({ text: itemText }));
	      list.save();
	    });
	  });
	};

	listSchema.statics.demoLists = function () {
	  return [{ name: 'watch every Harry Potter movie' }, { name: 'visit every castle in Scotland' }, { name: 'read every Stephen King novel' }, { name: 'run a 5k in every US state' }, { name: 'visit every country in Europe' }];
	};

	listSchema.set('toJSON', { virtuals: true });

	exports.default = _mongoose2.default.model('List', listSchema);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var listItemSchema = new Schema({
	  text: { type: 'String', required: true },
	  complete: { type: 'Boolean', default: false, required: false },
	  dateModified: { type: 'Date', required: false }
	});

	exports.default = _mongoose2.default.model('ListItem', listItemSchema);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});

	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactIntl = __webpack_require__(34);

	var _reactRedux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _App = __webpack_require__(53);

	var _App2 = _interopRequireDefault(_App);

	var _AppActions = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(25);
	  __webpack_require__(24);
	  __webpack_require__(26);
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	function createRoutes(store) {

	  var requireAuth = function requireAuth(nextState, replace, callback) {
	    var _store$getState = store.getState(),
	        authenticated = _store$getState.user.authenticated;

	    if (!authenticated) {
	      replace({
	        pathname: '/login',
	        state: { nextPathname: nextState.location.pathname }
	      });
	    } else {
	      store.dispatch((0, _AppActions.toggleSpinnerOn)());
	    }
	    callback();
	  };

	  var redirectAuth = function redirectAuth(nextState, replace, callback) {
	    var _store$getState2 = store.getState(),
	        authenticated = _store$getState2.user.authenticated;

	    if (authenticated) {
	      store.dispatch((0, _AppActions.toggleSpinnerOn)());
	      replace({
	        pathname: '/'
	      });
	    }
	    callback();
	  };

	  return _jsx(_reactRouter.Route, {
	    path: '/',
	    component: _App2.default
	  }, void 0, _jsx(_reactRouter.IndexRoute, {
	    onEnter: requireAuth,
	    getComponent: function getComponent(nextState, cb) {
	      Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(25).default);
	      }).bind(null, __webpack_require__));
	    }
	  }), _jsx(_reactRouter.Route, {
	    path: '/login',
	    onEnter: redirectAuth,
	    getComponent: function getComponent(nextState, cb) {
	      Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(26).default);
	      }).bind(null, __webpack_require__));
	    }
	  }), _jsx(_reactRouter.Route, {
	    onEnter: requireAuth,
	    path: '/lists/:cuid',
	    getComponent: function getComponent(nextState, cb) {
	      Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(24).default);
	      }).bind(null, __webpack_require__));
	    }
	  }));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Main store function
	                                                                                                                                                                                                                                                                               */


	exports.configureStore = configureStore;

	var _redux = __webpack_require__(10);

	var _reduxThunk = __webpack_require__(94);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(54);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(66);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reactRouterRedux = __webpack_require__(15);

	var _reduxLogger = __webpack_require__(93);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var history = arguments[1];

	  // Middleware and store enhancers
	  var middleware = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];
	  var store = void 0;
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    middleware.push((0, _reduxLogger2.default)());
	    // middleware.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
	    store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
	      return f;
	    }));
	  } else {
	    store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), function (f) {
	      return f;
	    }));
	  }
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  _post2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }

	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

	    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

	    _post2.default.create([post1, post2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};

	var _post = __webpack_require__(32);

	var _post2 = _interopRequireDefault(_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(19);

	var _passport = __webpack_require__(20);

	var _passport2 = _interopRequireDefault(_passport);

	var _post = __webpack_require__(69);

	var PostController = _interopRequireWildcard(_post);

	var _list = __webpack_require__(67);

	var ListController = _interopRequireWildcard(_list);

	var _listTemplate = __webpack_require__(68);

	var ListTemplateController = _interopRequireWildcard(_listTemplate);

	var _user = __webpack_require__(70);

	var UserController = _interopRequireWildcard(_user);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = new _express.Router();

	router.use(function (req, res, next) {
	  req.isAuthenticated();
	  console.log('middleware auth? ', req.isAuthenticated());
	  next();
	});

	// lists
	router.route('/lists').get(ListController.getLists);
	router.route('/lists/demo').get(ListController.getDemoLists);
	router.route('/lists').post(ListController.addEmptyList);
	router.route('/lists/find_or_create').post(ListController.findOrCreateListTemplate);
	router.route('/lists/:cuid/toggle/:list_item_id').put(ListController.toggleListItem);
	router.route('/lists/:cuid').get(ListController.getList);
	router.route('/lists/:cuid').post(ListController.addListItem);

	// templates
	router.route('/templates').get(ListTemplateController.getTemplates);

	// users
	router.route('/logout').post(UserController.logout);

	exports.default = router;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(72);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(21);
	var cssnext = __webpack_require__(81);
	var postcssFocus = __webpack_require__(82);
	var postcssReporter = __webpack_require__(83);

	module.exports = {

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("connect-mongo");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("passport-google-oauth");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'MERN Starter Blog',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _App = {
	  "Loader__background": "_2VjePRjlapoYxn9_iIVScL"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(11);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactLoaderAdvanced = __webpack_require__(88);

	var _reactLoaderAdvanced2 = _interopRequireDefault(_reactLoaderAdvanced);

	var _Header = __webpack_require__(55);

	var _Header2 = _interopRequireDefault(_Header);

	var _UserActions = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Components


	// actions


	var _ref = _jsx('span', {});

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.handleLogout = function () {
	      _this.props.dispatch((0, _UserActions.logOut)());
	    };

	    _this.state = { isMounted: false };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'do everything',
	        titleTemplate: '%s - do everything',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_reactLoaderAdvanced2.default, {
	        messageStyle: { color: '#91170a', fontSize: '48px', fontWeight: '900' },
	        contentBlur: 8,
	        show: this.props.showSpinner
	      }, void 0, this.props.user.authenticated ? _jsx(_Header2.default, {
	        user: this.props.user.data,
	        logout: this.handleLogout
	      }) : _ref, _jsx('div', {
	        className: 'container'
	      }, void 0, this.props.children))));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    user: store.user,
	    showSpinner: store.app.showSpinner
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(90);

	var _reduxDevtoolsLogMonitor = __webpack_require__(92);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(91);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	exports.Header = Header;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _reactBootstrap = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Header(props, context) {
	  return _jsx(_reactBootstrap.Navbar, {}, void 0, _jsx(_reactBootstrap.Navbar.Header, {}, void 0, _jsx(_reactBootstrap.Navbar.Brand, {}, void 0, _jsx(_reactRouter.Link, {
	    to: '/'
	  }, void 0, 'do', _jsx('strong', {
	    style: { color: '#91170a' }
	  }, void 0, 'everything')))), _jsx(_reactBootstrap.Nav, {
	    pullRight: true
	  }, void 0, _jsx(_reactBootstrap.NavDropdown, {
	    title: props.user.name,
	    id: 'basic-nav-dropdown'
	  }, void 0, _jsx(_reactBootstrap.MenuItem, {
	    onClick: props.logout
	  }, void 0, 'log out'))));
	}

	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = Header;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.switchLanguage = switchLanguage;

	var _setup = __webpack_require__(22);

	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _setup = __webpack_require__(22);

	var _IntlActions = __webpack_require__(56);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var initLocale = global.navigator && global.navigator.language || 'en';

	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});

	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line


	        return _extends({}, state, actionWithoutType);
	      }

	    default:
	      return state;
	  }
	};

	exports.default = IntlReducer;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostCreateWidget = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(1);

	var _reactBootstrapTypeahead = __webpack_require__(84);

	var _reactBootstrapTypeahead2 = _interopRequireDefault(_reactBootstrapTypeahead);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style
	({
	  "bootstrap-typeahead-input-main": "_34I4xmy1Hu2SnZgmL9GN8J",
	  "wantto-input": "P7nRVfjQmYl4z0f7mdCxQ",
	  "form-control": "_2fe0eCsTdLTEPa97k20fr9",
	  "bootstrap-typeahead-input-hint": "_15UmI0nfpXeOi0tsHDqHIb",
	  "wantto-form-button-container": "_2X_GDNQgIM1Pj5Mw0PRqve",
	  "wantto-form-container": "DPwACO5eRWwXQflgA8fr2",
	  "wantto-alert": "LJZRNhpQFW_nr0TLyEQvm",
	  "wantto-alert-buttons": "_3YT4nPsP_I-pLWnlEx96ey"
	});

	var _ref = _jsx('span', {}, void 0, ' or ');

	var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
	  _inherits(PostCreateWidget, _Component);

	  function PostCreateWidget(props) {
	    _classCallCheck(this, PostCreateWidget);

	    var _this = _possibleConstructorReturn(this, (PostCreateWidget.__proto__ || Object.getPrototypeOf(PostCreateWidget)).call(this, props));

	    _this.addList = function () {
	      if (_this.verbRef.value && _this.state.selected.length) {
	        _this.setState({ isLoading: true });
	        _this.props.addPost(_this.verbRef.value, _this.state.selected);
	      }
	    };

	    _this.addEmptyList = function () {
	      if (_this.verbRef.value && _this.state.selected.length) {
	        _this.props.addEmptyList(_this.verbRef.value, _this.state.selected);
	        _this.handleAlertDismiss();
	      }
	    };

	    _this.handleAlertDismiss = function () {
	      _this.clearFields();
	      _this.props.toggleAddWarning();
	      _this.setState({ isLoading: false });
	    };

	    _this.state = {
	      selected: '',
	      isLoading: false };
	    return _this;
	  }

	  _createClass(PostCreateWidget, [{
	    key: 'clearFields',
	    value: function clearFields() {
	      this.verbRef.value = '';
	      this.refs.typeahead.getInstance().clear();
	    }
	  }, {
	    key: 'renderAlert',
	    value: function renderAlert() {
	      return _jsx(_reactBootstrap.Alert, {
	        bsStyle: 'warning',
	        className: 'wantto-alert',
	        onDismiss: this.handleAlertDismiss
	      }, void 0, _jsx('h4', {}, void 0, 'No results found for ', _jsx('strong', {}, void 0, this.state.selected), '.'), _jsx('div', {
	        className: 'wantto-alert-buttons'
	      }, void 0, _jsx(_reactBootstrap.Button, {
	        bsStyle: 'primary',
	        onClick: this.addEmptyList
	      }, void 0, 'Create an empty list'), _ref, _jsx(_reactBootstrap.Button, {
	        onClick: this.handleAlertDismiss
	      }, void 0, 'Try again')));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Panel, {}, void 0, _jsx(_reactBootstrap.Form, {
	        inline: true,
	        className: 'wantto-form-container'
	      }, void 0, _jsx('h2', {}, void 0, _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.FormControl, {
	        className: 'wantto-input',
	        inputRef: function inputRef(ref) {
	          _this2.verbRef = ref;
	        },
	        type: 'text',
	        placeholder: 'climb'
	      })), ' every ', _jsx(_reactBootstrap.FormGroup, {}, void 0, _react2.default.createElement(_reactBootstrapTypeahead2.default, {
	        ref: 'typeahead',
	        options: this.props.templates,
	        placeholder: 'mountain',
	        labelKey: 'name',
	        allowNew: true,
	        newSelectionPrefix: '',
	        onInputChange: function onInputChange(selected) {
	          return _this2.setState({ selected: selected });
	        }
	      })), ' ', _jsx(_reactBootstrap.Button, {
	        disabled: this.state.isLoading || this.props.showAddWarning,
	        onClick: !this.state.isLoading ? this.addList : null
	      }, void 0, this.state.isLoading && !this.props.showAddWarning ? 'Creating...' : 'Create List'))), this.props.showAddWarning ? this.renderAlert() : ''));
	    }
	  }]);

	  return PostCreateWidget;
	}(_react.Component);

	exports.default = PostCreateWidget;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _PostListItem = __webpack_require__(61);

	var _PostListItem2 = _interopRequireDefault(_PostListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PostList(props) {
	  return _jsx('div', {
	    className: 'listView'
	  }, void 0, props.posts.map(function (post) {
	    return _jsx(_PostListItem2.default, {
	      post: post,
	      onDelete: function onDelete() {
	        return props.handleDeletePost(post.cuid);
	      }
	    }, post.cuid);
	  }));
	}

	exports.default = PostList;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItemCreateWidget = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListItemCreateWidget = exports.ListItemCreateWidget = function (_Component) {
	  _inherits(ListItemCreateWidget, _Component);

	  function ListItemCreateWidget() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ListItemCreateWidget);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListItemCreateWidget.__proto__ || Object.getPrototypeOf(ListItemCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addListItem = function () {
	      if (_this.textRef.value) {
	        _this.props.addListItem(_this.textRef.value);
	        _this.textRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ListItemCreateWidget, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Form, {}, void 0, _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.InputGroup, {}, void 0, _jsx(_reactBootstrap.FormControl, {
	        inputRef: function inputRef(ref) {
	          _this2.textRef = ref;
	        },
	        type: 'text'
	      }), _jsx(_reactBootstrap.InputGroup.Button, {}, void 0, _jsx(_reactBootstrap.Button, {
	        onClick: this.addListItem
	      }, void 0, 'Add'))))));
	    }
	  }]);

	  return ListItemCreateWidget;
	}(_react.Component);

	exports.default = ListItemCreateWidget;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ListItem(props) {
	  return _jsx('div', {}, void 0, _jsx('h3', {}, void 0, _jsx(_reactRouter.Link, {
	    to: '/lists/' + props.post.cuid
	  }, void 0, props.post.name)));
	}

	exports.default = ListItem;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _ToDoListItem = __webpack_require__(63);

	var _ToDoListItem2 = _interopRequireDefault(_ToDoListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ToDoList(props) {
	  return _jsx('div', {}, void 0, props.todos.map(function (todo) {
	    return _jsx(_ToDoListItem2.default, {
	      readOnly: props.readOnly,
	      todo: todo,
	      toggleListItem: props.toggleListItem
	    }, todo._id);
	  }));
	}

	exports.default = ToDoList;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ToDoListItem = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(1);

	var _reactFontawesome = __webpack_require__(85);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ToDoListItem = exports.ToDoListItem = function (_Component) {
	  _inherits(ToDoListItem, _Component);

	  function ToDoListItem() {
	    _classCallCheck(this, ToDoListItem);

	    return _possibleConstructorReturn(this, (ToDoListItem.__proto__ || Object.getPrototypeOf(ToDoListItem)).apply(this, arguments));
	  }

	  _createClass(ToDoListItem, [{
	    key: 'checked',
	    value: function checked() {
	      return this.props.todo.complete;
	    }
	  }, {
	    key: 'toggleCheckbox',
	    value: function toggleCheckbox() {
	      this.props.toggleListItem(this.props.todo);
	    }
	  }, {
	    key: 'renderCheckbox',
	    value: function renderCheckbox() {
	      var _this2 = this;

	      return _jsx(_reactBootstrap.Checkbox, {
	        defaultChecked: this.checked(),
	        onChange: function onChange() {
	          return _this2.toggleCheckbox();
	        }
	      }, void 0, this.props.todo.text);
	    }
	  }, {
	    key: 'renderReadOnly',
	    value: function renderReadOnly() {
	      var styles = this.checked() ? {} : { visibility: 'hidden' };
	      return _jsx('span', {}, void 0, _jsx(_reactFontawesome2.default, {
	        style: styles,
	        name: 'check'
	      }), ' ', this.props.todo.text);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('h4', {}, void 0, this.props.readOnly ? this.renderReadOnly() : this.renderCheckbox()));
	    }
	  }]);

	  return ToDoListItem;
	}(_react.Component);

	exports.default = ToDoListItem;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactTypist = __webpack_require__(89);

	var _reactTypist2 = _interopRequireDefault(_reactTypist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('span', {});

	var RestartingTypist = function (_Component) {
	  _inherits(RestartingTypist, _Component);

	  function RestartingTypist(props) {
	    _classCallCheck(this, RestartingTypist);

	    var _this = _possibleConstructorReturn(this, (RestartingTypist.__proto__ || Object.getPrototypeOf(RestartingTypist)).call(this, props));

	    _this.done = function () {
	      _this.props.onTypingDone();
	      _this.timeouts.push(setTimeout(function () {
	        _this.setState({ typing: false }, function () {
	          _this.timeouts.push(setTimeout(function () {
	            return _this.setState({ typing: true });
	          }, _this.props.timeout || 1200));
	        });
	      }, _this.props.timeout || 3600));
	    };

	    _this.state = { typing: true };
	    return _this;
	  }

	  _createClass(RestartingTypist, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.timeouts = [];
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.timeouts.forEach(window.clearTimeout);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          timeout = _props.timeout,
	          props = _objectWithoutProperties(_props, ['children', 'timeout']);

	      return this.state.typing ? _react2.default.createElement(
	        _reactTypist2.default,
	        _extends({}, props, { onTypingDone: this.done }),
	        children
	      ) : _ref;
	    }
	  }]);

	  return RestartingTypist;
	}(_react.Component);

	exports.default = RestartingTypist;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UnAuthWidget = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _RestartingTypist = __webpack_require__(64);

	var _RestartingTypist2 = _interopRequireDefault(_RestartingTypist);

	var _reactBootstrap = __webpack_require__(1);

	var _lodash = __webpack_require__(4);

	var _ = _interopRequireWildcard(_lodash);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	({
	  "Typist": "_3nOdbN7cERl5ZYNO00QN6N",
	  "wanttoText": "_3otUwzd_vnJ_x_GNh3drIC",
	  "jumbo": "_3nLz65GY3ZPKK_ifkOYvT6",
	  "button-container": "_2HvnC9KzfFLJUPa1Iw0Y1l",
	  "action-text": "_2KV0MTiVTuoiicwEax6lG4"
	});

	var _ref = _jsx('p', {}, void 0, 'Keep track of what you want to do - with help from the rest of the internet.');

	var _ref2 = _jsx('p', {}, void 0, _jsx(_reactBootstrap.Button, {
	  bsStyle: 'primary',
	  href: '/auth/google'
	}, void 0, 'Login with Google'));

	var UnAuthWidget = exports.UnAuthWidget = function (_Component) {
	  _inherits(UnAuthWidget, _Component);

	  function UnAuthWidget(props) {
	    _classCallCheck(this, UnAuthWidget);

	    var _this = _possibleConstructorReturn(this, (UnAuthWidget.__proto__ || Object.getPrototypeOf(UnAuthWidget)).call(this, props));

	    _this.changeList = function () {
	      var newIndex = _.random(_this.props.lists.length - 1);
	      _this.setState({ listIndex: newIndex });
	    };

	    _this.state = { listIndex: 0 };
	    return _this;
	  }

	  _createClass(UnAuthWidget, [{
	    key: 'currentList',
	    value: function currentList() {
	      if (this.props.lists.length) {
	        return this.props.lists[this.state.listIndex].name;
	      } else {
	        return;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Jumbotron, {
	        className: 'jumbo'
	      }, void 0, _jsx('h1', {
	        className: 'wanttoText'
	      }, void 0, 'I want to ', _jsx(_RestartingTypist2.default, {
	        onTypingDone: this.changeList,
	        className: 'action-text'
	      }, void 0, this.currentList())), _jsx('h2', {}, void 0, 'do', _jsx('strong', {
	        style: { color: '#91170a' }
	      }, void 0, 'everything')), _ref, _ref2));
	    }
	  }]);

	  return UnAuthWidget;
	}(_react.Component);

	exports.default = UnAuthWidget;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(10);

	var _reactRouterRedux = __webpack_require__(15);

	var _AppReducer = __webpack_require__(23);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _PostReducer = __webpack_require__(8);

	var _PostReducer2 = _interopRequireDefault(_PostReducer);

	var _TemplateReducer = __webpack_require__(28);

	var _TemplateReducer2 = _interopRequireDefault(_TemplateReducer);

	var _IntlReducer = __webpack_require__(57);

	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

	var _UserReducer = __webpack_require__(12);

	var _UserReducer2 = _interopRequireDefault(_UserReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  templates: _TemplateReducer2.default,
	  intl: _IntlReducer2.default,
	  user: _UserReducer2.default,
	  routing: _reactRouterRedux.routerReducer
	});

	// Import Reducers
	/**
	 * Root Reducer
	 */

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDemoLists = getDemoLists;
	exports.getLists = getLists;
	exports.addEmptyList = addEmptyList;
	exports.findOrCreateListTemplate = findOrCreateListTemplate;
	exports.getList = getList;
	exports.addListItem = addListItem;
	exports.deleteList = deleteList;
	exports.toggleListItem = toggleListItem;

	var _list = __webpack_require__(30);

	var _list2 = _interopRequireDefault(_list);

	var _listTemplate = __webpack_require__(13);

	var _listTemplate2 = _interopRequireDefault(_listTemplate);

	var _cuid = __webpack_require__(33);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _wolframHelper = __webpack_require__(73);

	var _q = __webpack_require__(14);

	var Q = _interopRequireWildcard(_q);

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = Q.Promise;

	function getDemoLists(req, res) {
	  res.json({ lists: _list2.default.demoLists() });
	}

	function getLists(req, res) {
	  if (!req.user) {
	    res.json({ lists: [] });
	    return;
	  }

	  _list2.default.find().forUser(req.user).sort('-dateAdded').exec(function (err, lists) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ lists: lists });
	  });
	}

	/**
	 * Save a list
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addEmptyList(req, res) {

	  if (!req.body.list.verb || !req.body.list.action) {
	    res.status(403).end();
	  }

	  var newList = new _list2.default(req.body.list);
	  newList.cuid = (0, _cuid2.default)();
	  newList._users.push(req.user);

	  var newTemplate = new _listTemplate2.default({ actions: [req.body.list.action] });
	  newTemplate.save(function (err, template) {
	    if (err) {
	      console.error("Error:", err);
	    }
	    console.log('template:', template);
	    console.log('creating a new empty template');
	    handleCreateFromTemplate(res, newList, template);
	  });
	}

	/**
	 * Find or create a list template
	 * @param req
	 * @param res
	 * @returns void
	 */
	function findOrCreateListTemplate(req, res) {

	  if (!req.body.list.verb || !req.body.list.action) {
	    res.status(403).end();
	  }

	  var newList = new _list2.default(req.body.list);
	  newList.cuid = (0, _cuid2.default)();
	  newList._users.push(req.user);
	  var items = void 0;

	  //search ListTemplate for matching actions
	  _listTemplate2.default.findOne({ actions: req.body.list.action }).exec(function (err, template) {
	    //if we have a template with that action already, create
	    // a new list based on it
	    if (template) {
	      console.log('template found by name');
	      handleCreateFromTemplate(res, newList, template);
	      return true;
	    } else {
	      _wolframHelper.waClient.query((0, _wolframHelper.formatQuery)(req.body.list.action), _wolframHelper.QUERY_OPTIONS).then(function (resp) {
	        items = (0, _wolframHelper.formatResponse)(resp);
	        if (!items) {
	          res.status(422).send('No results');
	          return Q.reject();
	        }
	        //look to see if we have any templates with these items already
	        return _listTemplate2.default.find().byItems(items).exec();
	      }).then(function (template) {
	        if (template) {
	          console.log('template found by items');
	          //update template to include name
	          template.actions.push(req.body.list.action);
	          template.save();
	          //create new list from template
	          handleCreateFromTemplate(res, newList, template);
	        } else {
	          //create a new ListTemplate
	          var newTemplate = _listTemplate2.default.newWithItems(req.body.list.action, items);
	          console.log('creating a new template');
	          handleCreateFromTemplate(res, newList, newTemplate);
	        }
	      }).catch(function (err) {
	        console.log('error', err);
	        res.status(500).send(err);
	      });
	    }
	  }).catch(function (err) {
	    console.log('error', err);
	    res.status(500).send(err);
	  });
	}

	/**
	 * Get a single list
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getList(req, res) {
	  _list2.default.findOne({ cuid: req.params.cuid }).exec(function (err, list) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ list: list });
	  });
	}

	function addListItem(req, res) {

	  _list2.default.findOne({ cuid: req.params.cuid }).exec().then(function (list) {
	    return list.addListItem(req.body.item);
	  }).then(function (list) {
	    res.json({ list: list });
	  }).catch(function (err) {
	    res.status(500).send(err);
	  });
	}

	/**
	 * Delete a list
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deleteList(req, res) {
	  _list2.default.findOne({ cuid: req.params.cuid }).exec(function (err, list) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    list.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

	function toggleListItem(req, res) {

	  _list2.default.findOne({ cuid: req.params.cuid }, function (err, list) {
	    var todo = list.items.id(req.params.list_item_id);

	    todo.dateModified = Date.now();
	    todo.complete = !todo.complete;
	    list.save(function (err, todo) {
	      if (err) {
	        console.error("Error:", err);
	        res.status(500).send(err);
	      }
	      res.json({ list: list });
	    });
	  });
	}

	function handleCreateFromTemplate(res, list, template) {
	  list.addItemsFromTemplate(template, function (err, saved) {
	    if (err) {
	      console.log('error', err);
	      res.status(500).send(err);
	    }
	    res.json({ list: saved });
	    return true;
	  });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTemplates = getTemplates;

	var _listTemplate = __webpack_require__(13);

	var _listTemplate2 = _interopRequireDefault(_listTemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get all list templates
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getTemplates(req, res) {
	  _listTemplate2.default.find().sort('actions').exec(function (err, templates) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ templates: templates });
	  });
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;

	var _post = __webpack_require__(32);

	var _post2 = _interopRequireDefault(_post);

	var _cuid = __webpack_require__(33);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _limax = __webpack_require__(80);

	var _limax2 = _interopRequireDefault(_limax);

	var _sanitizeHtml = __webpack_require__(95);

	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}

	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }

	  var newPost = new _post2.default(req.body.post);

	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}

	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}

	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logout = logout;

	var _user = __webpack_require__(18);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function logout(req, res) {
	  req.logout();
	  res.status(200).send();

	  // console.log('this is req user before', req.user)
	  // req.logout();
	  // console.log('this is req user after', req.user)
	  // res.redirect('/');
	  // res.cookie("sessionId", "", { expires: new Date() });
	  // console.log('res cookie?', res.cookie('sessionId'))
	  // req.session.destroy(function (err) {
	  //   console.log('error: ', err)
	  //   res.clearCookie('sessionId', { path: '/' });
	  //   console.log('res cookie?', res.cookie('sessionId'))
	  //   // res.cookie("sessionId", "", { expires: new Date() });
	  //   // res.clearCookie('sessionId', {path:'/'});
	  //   res.redirect('/'); //Inside a callback… bulletproof!
	  // });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	// passport


	var _express = __webpack_require__(19);

	var _express2 = _interopRequireDefault(_express);

	var _expressSession = __webpack_require__(45);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _connectMongo = __webpack_require__(44);

	var _connectMongo2 = _interopRequireDefault(_connectMongo);

	var _compression = __webpack_require__(43);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(42);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(47);

	var _path2 = _interopRequireDefault(_path);

	var _IntlWrapper = __webpack_require__(35);

	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

	var _lodash = __webpack_require__(4);

	var _ = _interopRequireWildcard(_lodash);

	var _webpack = __webpack_require__(21);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(41);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(49);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(50);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _passport = __webpack_require__(20);

	var _passport2 = _interopRequireDefault(_passport);

	var _secrets = __webpack_require__(16);

	var _secrets2 = _interopRequireDefault(_secrets);

	var _passportGoogleOauth = __webpack_require__(46);

	var _user = __webpack_require__(18);

	var _user2 = _interopRequireDefault(_user);

	var _store = __webpack_require__(37);

	var _reactRedux = __webpack_require__(3);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(48);

	var _reactRouter = __webpack_require__(5);

	var _reactHelmet = __webpack_require__(11);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(36);

	var _fetchData = __webpack_require__(40);

	var _post = __webpack_require__(39);

	var _post2 = _interopRequireDefault(_post);

	var _dummyData = __webpack_require__(38);

	var _dummyData2 = _interopRequireDefault(_dummyData);

	var _config = __webpack_require__(17);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }

	  // feed some dummy data in DB.
	  (0, _dummyData2.default)();
	});

	var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);
	var db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/ReactWebpackNode';

	var sessionStore = new MongoStore({
	  url: db,
	  autoReconnect: true
	});
	var sess = {
	  resave: false,
	  saveUninitialized: false,
	  secret: _secrets2.default.session,
	  name: 'sessionId',
	  // Add HTTPOnly, Secure attributes on Session Cookie
	  // If secure is set, and you access your site over HTTP, the cookie will not be set
	  cookie: {
	    httpOnly: false,
	    secure: false
	  },
	  store: sessionStore
	};

	// passport/session stuff
	app.use((0, _expressSession2.default)(sess));
	app.use(_passport2.default.initialize());
	app.use(_passport2.default.session());

	_passport2.default.serializeUser(function (user, done) {
	  done(null, user.id);
	});

	_passport2.default.deserializeUser(function (id, done) {
	  _user2.default.findById(id, function (err, user) {
	    done(err, user);
	  });
	});

	_passport2.default.use(new _passportGoogleOauth.OAuth2Strategy({
	  clientID: _secrets2.default.google.clientID,
	  clientSecret: _secrets2.default.google.clientSecret,
	  callbackURL: _secrets2.default.google.callbackURL,
	  passReqToCallback: true }, function (request, accessToken, refreshToken, profile, done) {
	  _user2.default.findOne({ oauthID: profile.id }, function (err, user) {
	    if (err) {
	      console.log(err); // handle errors!
	    }
	    if (!err && user !== null) {
	      done(null, user);
	    } else {
	      console.log('profile: ', profile);
	      user = new _user2.default({
	        oauthID: profile.id,
	        name: profile.displayName,
	        picture: profile._json.image.url,
	        email: profile._json.emails[0].value
	      });
	      user.tokens.push({ kind: 'google', accessToken: accessToken });
	      user.save(function (err) {
	        if (err) {
	          console.log(err); // handle errors!
	        } else {
	          console.log("saving user ...");
	          done(null, user);
	        }
	      });
	    }
	  });
	}));

	// users/authentication
	app.get('/auth/google', _passport2.default.authenticate('google', {
	  scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read'] }));
	app.get('/auth/google/callback', _passport2.default.authenticate('google', {
	  successRedirect: '/',
	  failureRedirect: '/login'
	}));

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	app.use('/api', _post2.default);

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="/favicon.ico" type="image/png" />\n      </head>\n      <body>\n        <div id="root"><div>' + html + '</div></div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  var authenticated = req.isAuthenticated();
	  var userData = req.user ? _.pick(req.user, ['name', '_id', 'picture']) : null;
	  var history = (0, _reactRouter.createMemoryHistory)();
	  var store = (0, _store.configureStore)({
	    user: {
	      authenticated: authenticated,
	      isWaiting: false,
	      message: '',
	      isLogin: true,
	      data: userData
	    }
	  }, history);

	  var routes = (0, _routes.createRoutes)(store);

	  (0, _reactRouter.match)({ routes: routes, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatResponse = exports.formatQuery = exports.QUERY_OPTIONS = exports.waClient = exports.WA_APP_ID = undefined;

	var _wajs = __webpack_require__(96);

	var _wajs2 = _interopRequireDefault(_wajs);

	var _secrets = __webpack_require__(16);

	var _secrets2 = _interopRequireDefault(_secrets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WA_APP_ID = exports.WA_APP_ID = _secrets2.default.wolframAlphaId;

	var waClient = exports.waClient = new _wajs2.default(WA_APP_ID);

	var QUERY_OPTIONS = exports.QUERY_OPTIONS = {
	  format: 'plaintext',
	  podState: '100@More',
	  ignoreCase: true
	};

	var formatQuery = exports.formatQuery = function formatQuery(query) {
	  return query;
	}; //`list of ${query}`;

	var formatResponse = exports.formatResponse = function formatResponse(response) {
	  if (!response.pods()[1]) {
	    return false;
	  }
	  var queryString = response.pods()[1].subpod[0].plaintext[0];
	  console.log('querystring', queryString);
	  if (queryString === '(data not available)') {
	    return false;
	  }
	  var totalIndex = queryString.indexOf('(total:');
	  if (totalIndex > -1) {
	    queryString = queryString.substring(0, totalIndex);
	  }
	  queryString = queryString.trim();
	  var resultArray = queryString.split('  |  ');
	  if (resultArray.length === 1) {
	    resultArray = queryString.split('\n');
	  }
	  return resultArray;
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("hasha");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap-typeahead");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("react-fontawesome");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("react-loader-advanced");

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("react-typist");

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = require("wajs");

/***/ }
/******/ ]);