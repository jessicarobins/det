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

	module.exports = require("lodash");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.REMOVE_SYSTEM_MESSAGE = exports.ADD_SYSTEM_MESSAGE = exports.TOGGLE_ADD_WARNING = exports.TOGGLE_SPINNER_OFF = exports.TOGGLE_SPINNER_ON = undefined;
	exports.addSystemMessage = addSystemMessage;
	exports.removeSystemMessage = removeSystemMessage;
	exports.toggleAddWarning = toggleAddWarning;
	exports.toggleSpinnerOn = toggleSpinnerOn;
	exports.toggleSpinnerOff = toggleSpinnerOff;

	var _apiCaller = __webpack_require__(13);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var TOGGLE_SPINNER_ON = exports.TOGGLE_SPINNER_ON = 'TOGGLE_SPINNER_ON';
	var TOGGLE_SPINNER_OFF = exports.TOGGLE_SPINNER_OFF = 'TOGGLE_SPINNER_OFF';
	var TOGGLE_ADD_WARNING = exports.TOGGLE_ADD_WARNING = 'TOGGLE_ADD_WARNING';
	var ADD_SYSTEM_MESSAGE = exports.ADD_SYSTEM_MESSAGE = 'ADD_SYSTEM_MESSAGE';
	var REMOVE_SYSTEM_MESSAGE = exports.REMOVE_SYSTEM_MESSAGE = 'REMOVE_SYSTEM_MESSAGE';

	// Export Actions
	function addSystemMessage(message, type) {
	  var newAlert = {
	    id: new Date().getTime(),
	    type: type,
	    message: message
	  };
	  return {
	    type: ADD_SYSTEM_MESSAGE,
	    newAlert: newAlert
	  };
	}

	function removeSystemMessage() {
	  return {
	    type: REMOVE_SYSTEM_MESSAGE
	  };
	}

	// export function addAppWarning(message) {
	//   return {
	//     type: ADD_APP_WARNING,
	//     message
	//   };
	// }

	// export function removeAppWarning() {
	//   return {
	//     type: REMOVE_APP_WARNING
	//   };
	// }

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
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-fontawesome");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("q");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_TEMPLATES = exports.ADD_DEMO_LISTS = exports.ADD_RECENT_LISTS = exports.ADD_LISTS = exports.DELETE_LIST_ITEM = exports.TOGGLE_LIST_ITEM = exports.ADD_LIST_ITEM_ERROR = exports.ADD_LIST_ITEM = exports.ADD_LIST = undefined;
	exports.addPost = addPost;
	exports.addListRequest = addListRequest;
	exports.cloneListRequest = cloneListRequest;
	exports.addListItem = addListItem;
	exports.addListItemRequest = addListItemRequest;
	exports.toggleListItem = toggleListItem;
	exports.toggleListItemRequest = toggleListItemRequest;
	exports.deleteListItem = deleteListItem;
	exports.deleteListItemRequest = deleteListItemRequest;
	exports.addLists = addLists;
	exports.addDemoLists = addDemoLists;
	exports.addRecentLists = addRecentLists;
	exports.fetchPosts = fetchPosts;
	exports.fetchDemoLists = fetchDemoLists;
	exports.fetchRecentLists = fetchRecentLists;
	exports.fetchList = fetchList;

	var _apiCaller = __webpack_require__(13);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	var _AppActions = __webpack_require__(5);

	var appActions = _interopRequireWildcard(_AppActions);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var ADD_LIST = exports.ADD_LIST = 'ADD_LIST';
	var ADD_LIST_ITEM = exports.ADD_LIST_ITEM = 'ADD_LIST_ITEM';
	var ADD_LIST_ITEM_ERROR = exports.ADD_LIST_ITEM_ERROR = 'ADD_LIST_ITEM_ERROR';
	var TOGGLE_LIST_ITEM = exports.TOGGLE_LIST_ITEM = 'TOGGLE_LIST_ITEM';
	var DELETE_LIST_ITEM = exports.DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
	var ADD_LISTS = exports.ADD_LISTS = 'ADD_LISTS';
	var ADD_RECENT_LISTS = exports.ADD_RECENT_LISTS = 'ADD_RECENT_LISTS';
	var ADD_DEMO_LISTS = exports.ADD_DEMO_LISTS = 'ADD_DEMO_LISTS';
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
	        dispatch(appActions.toggleAddWarning());
	      }
	    });
	  };
	}

	function cloneListRequest(props) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists/' + props.cuid + '/clone', 'post').then(function (res) {
	      dispatch(addPost(res.list));
	      _reactRouter.browserHistory.push('/lists/' + res.list.cuid);
	      dispatch(appActions.toggleSpinnerOff());
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
	      if (res.list) {
	        dispatch(addListItem(res.list));
	      } else {
	        dispatch(appActions.addSystemMessage(res, 'danger'));
	      }
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

	function deleteListItem(list) {
	  return {
	    type: DELETE_LIST_ITEM,
	    list: list
	  };
	}

	function deleteListItemRequest(props) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists/' + props.cuid + '/item/' + props.list_item_id, 'delete').then(function (res) {
	      return dispatch(deleteListItem(res.list));
	    });
	  };
	}

	function addLists(lists) {
	  return {
	    type: ADD_LISTS,
	    lists: lists
	  };
	}

	function addDemoLists(lists) {
	  return {
	    type: ADD_DEMO_LISTS,
	    lists: lists
	  };
	}

	function addRecentLists(lists) {
	  return {
	    type: ADD_RECENT_LISTS,
	    lists: lists
	  };
	}

	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists').then(function (res) {
	      dispatch(addLists(res.lists));
	      dispatch(appActions.toggleSpinnerOff());
	    });
	  };
	}

	function fetchDemoLists() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists/demo').then(function (res) {
	      dispatch(addDemoLists(res.lists));
	    });
	  };
	}

	function fetchRecentLists() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lists/recent').then(function (res) {
	      dispatch(addRecentLists(res.lists));
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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRecentLists = exports.getDemoLists = exports.getPost = exports.getPosts = undefined;

	var _redux = __webpack_require__(9);

	var _lodash = __webpack_require__(3);

	var _ = _interopRequireWildcard(_lodash);

	var _ListActions = __webpack_require__(10);

	var actions = _interopRequireWildcard(_ListActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var lists = function lists() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case actions.ADD_LIST:
	      return [action.list].concat(_toConsumableArray(state));
	    case actions.ADD_LIST_ITEM:
	      return [action.list];
	    case actions.TOGGLE_LIST_ITEM:
	      return [action.list];
	    case actions.DELETE_LIST_ITEM:
	      return [action.list];
	    case actions.ADD_LISTS:
	      return action.lists;
	    default:
	      return state;
	  }
	};

	var demoLists = function demoLists() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case actions.ADD_DEMO_LISTS:
	      return action.lists;
	    default:
	      return state;
	  }
	};

	var recentLists = function recentLists() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case actions.ADD_RECENT_LISTS:
	      return action.lists;
	    default:
	      return state;
	  }
	};

	var ListReducer = (0, _redux.combineReducers)({
	  lists: lists,
	  demoLists: demoLists,
	  recentLists: recentLists
	});

	/* Selectors */

	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.lists.lists;
	};

	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return _.concat(state.lists.lists, state.lists.recentLists).filter(function (list) {
	    return list.cuid === cuid;
	  })[0];
	};

	var getDemoLists = exports.getDemoLists = function getDemoLists(state) {
	  return state.lists.demoLists;
	};
	var getRecentLists = exports.getRecentLists = function getRecentLists(state) {
	  return state.lists.recentLists;
	};

	// Export Reducer
	exports.default = ListReducer;

/***/ },
/* 12 */
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

	var _reactRouterRedux = __webpack_require__(18);

	var _apiCaller = __webpack_require__(13);

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(77);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(20);

	var _config2 = _interopRequireDefault(_config);

	var _axios = __webpack_require__(74);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var data = arguments[2];

	  return (0, _axios2.default)({
	    baseURL: API_URL,
	    method: method,
	    credentials: 'same-origin',
	    withCredentials: true,
	    url: endpoint,
	    data: data
	  }).then(function (response) {
	    return response.data;
	  }).catch(function (err) {
	    return err.response.data;
	  });
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 15 */
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

	var _reactRouter = __webpack_require__(4);

	var _reactBootstrap = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_reactBootstrap.Nav, {
	  pullRight: true
	}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '/auth/google'
	}, void 0, 'Login with Google'));

	function Header(props, context) {
	  return _jsx(_reactBootstrap.Navbar, {}, void 0, _jsx(_reactBootstrap.Navbar.Header, {}, void 0, _jsx(_reactBootstrap.Navbar.Brand, {}, void 0, _jsx(_reactRouter.Link, {
	    to: '/'
	  }, void 0, 'do', _jsx('strong', {
	    style: { color: '#91170a' }
	  }, void 0, 'everything')))), props.user ? _jsx(_reactBootstrap.Nav, {
	    pullRight: true
	  }, void 0, _jsx(_reactBootstrap.NavDropdown, {
	    title: props.user.name,
	    id: 'basic-nav-dropdown'
	  }, void 0, _jsx(_reactBootstrap.MenuItem, {
	    onClick: props.logout
	  }, void 0, 'log out'))) : _ref);
	}

	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = Header;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = exports.getAuth = undefined;

	var _redux = __webpack_require__(9);

	var _UserActions = __webpack_require__(12);

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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _q = __webpack_require__(7);

	var Q = _interopRequireWildcard(_q);

	var _list = __webpack_require__(30);

	var _list2 = _interopRequireDefault(_list);

	var _listItem = __webpack_require__(31);

	var _listItem2 = _interopRequireDefault(_listItem);

	var _pendingItem = __webpack_require__(32);

	var _pendingItem2 = _interopRequireDefault(_pendingItem);

	var _hasha = __webpack_require__(76);

	var _hasha2 = _interopRequireDefault(_hasha);

	var _lodash = __webpack_require__(3);

	var _ = _interopRequireWildcard(_lodash);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = Q.Promise;

	var Schema = _mongoose2.default.Schema;


	var listTemplate = new Schema({
	  actions: [String],
	  items: [_listItem2.default.schema],
	  pendingItems: [_pendingItem2.default.schema],
	  sha: { type: 'String' },
	  dateAdded: { type: 'Date', default: Date.now, required: true },
	  dateModified: { type: 'Date', default: Date.now, required: false },
	  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
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
	  return newTemplate.save();
	};

	listTemplate.methods.realizePendingItem = function (pendingItem) {

	  var template = this;
	  template.items.push(new _listItem2.default({ text: pendingItem.text }));

	  _list2.default.find({ _template: template._id, _id: { $nin: pendingItem._lists } }).exec().then(function (lists) {
	    lists.forEach(function (list) {
	      list.items.push(new _listItem2.default({ text: pendingItem.text }));
	      list.save();
	    });
	  }).catch(function (err) {
	    console.log('an error? ', err);
	  });

	  pendingItem.remove();
	  return template.save();
	};

	listTemplate.methods.removeItem = function (pendingItem) {
	  var item = _.find(this.items, function (item) {
	    return _.toLower(item.text) === _.toLower(pendingItem.text);
	  });
	  item.remove();
	  pendingItem.remove();
	  return this.save();
	};

	listTemplate.methods.addItem = function (itemText, exceptLists) {
	  var template = this;
	  template.items.push(new _listItem2.default({ text: itemText }));

	  var promises = [template.save()];

	  return _list2.default.find({ _template: this._id, _id: { $nin: exceptLists } }).exec().then(function (lists) {
	    lists.forEach(function (list) {
	      list.items.push(new _listItem2.default({ text: itemText }));
	      promises.push(list.save());
	    });
	    return Q.all(promises);
	  }).catch(function (err) {
	    console.log('an error? ', err);
	    return Q.reject(err);
	  });
	};

	listTemplate.set('toJSON', { virtuals: true });

	exports.default = _mongoose2.default.model('ListTemplate', listTemplate);

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddWarning = exports.getShowSpinner = undefined;

	var _redux = __webpack_require__(9);

	var _AppActions = __webpack_require__(5);

	var appActions = _interopRequireWildcard(_AppActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// Import Actions


	var showSpinner = function showSpinner() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
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

	// const appWarning = (
	//   state = '',
	//   action
	// ) => {
	//   switch (action.type) {
	//     case appActions.ADD_APP_WARNING:
	//       return action.message;
	//     case appActions.REMOVE_APP_WARNING:
	//       return '';
	//     default:
	//       return state;
	//   }
	// };

	var systemMessages = function systemMessages() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case appActions.ADD_SYSTEM_MESSAGE:
	      return [].concat(_toConsumableArray(state), [action.newAlert]);
	    case appActions.REMOVE_SYSTEM_MESSAGE:
	      return [];
	    default:
	      return state;
	  }
	};

	var AppReducer = (0, _redux.combineReducers)({
	  showSpinner: showSpinner,
	  showAddWarning: showAddWarning,
	  systemMessages: systemMessages
	});

	/* Selectors */

	// Get showAddPost
	var getShowSpinner = exports.getShowSpinner = function getShowSpinner(state) {
	  return state.app.showSpinner;
	};

	var getShowAddWarning = exports.getShowAddWarning = function getShowAddWarning(state) {
	  return state.app.showAddWarning;
	};

	// export const systemMessages = state => state.app.systemMessages;

	// Export Reducer
	exports.default = AppReducer;

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

	var _reactRedux = __webpack_require__(8);

	var _reactHelmet = __webpack_require__(14);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _ListItemCreateWidget = __webpack_require__(56);

	var _ListItemCreateWidget2 = _interopRequireDefault(_ListItemCreateWidget);

	var _ToDoList = __webpack_require__(60);

	var _ToDoList2 = _interopRequireDefault(_ToDoList);

	var _Progress = __webpack_require__(58);

	var _Progress2 = _interopRequireDefault(_Progress);

	var _Tiles = __webpack_require__(59);

	var _Tiles2 = _interopRequireDefault(_Tiles);

	var _Actions = __webpack_require__(55);

	var _Actions2 = _interopRequireDefault(_Actions);

	var _Header = __webpack_require__(15);

	var _Header2 = _interopRequireDefault(_Header);

	var _reactBootstrap = __webpack_require__(1);

	var _lodash = __webpack_require__(3);

	var _ = _interopRequireWildcard(_lodash);

	var _ListActions = __webpack_require__(10);

	var _AppActions = __webpack_require__(5);

	var _UserActions = __webpack_require__(12);

	var _ListReducer = __webpack_require__(11);

	var _UserReducer = __webpack_require__(16);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	      _this.props.dispatch((0, _ListActions.addListItemRequest)({ cuid: cuid, text: text }));
	    }, _this.handleCloneList = function () {
	      var cuid = _this.props.list.cuid;
	      _this.props.dispatch((0, _ListActions.cloneListRequest)({ cuid: cuid }));
	    }, _this.handleToggleListItem = function (listItem) {
	      var cuid = _this.props.list.cuid;
	      var list_item_id = listItem._id;
	      _this.props.dispatch((0, _ListActions.toggleListItemRequest)({ cuid: cuid, list_item_id: list_item_id }));
	    }, _this.handleDeleteListItem = function (listItem) {
	      var cuid = _this.props.list.cuid;
	      var list_item_id = listItem._id;
	      _this.props.dispatch((0, _ListActions.deleteListItemRequest)({ cuid: cuid, list_item_id: list_item_id }));
	    }, _this.handleLogout = function () {
	      _this.props.dispatch((0, _UserActions.logOut)());
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PostDetailPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _AppActions.toggleSpinnerOff)());
	    }
	  }, {
	    key: 'belongsToUser',
	    value: function belongsToUser() {
	      var belongs = !!this.props.user && _.find(this.props.list._users, { _id: this.props.user._id });
	      return belongs;
	    }
	  }, {
	    key: 'loggedIn',
	    value: function loggedIn() {
	      return !!this.props.user;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: this.props.list.name
	      }), _jsx(_Header2.default, {
	        user: this.props.user,
	        logout: this.handleLogout
	      }), _jsx(_reactBootstrap.Grid, {
	        className: 'container'
	      }, void 0, _jsx(_reactBootstrap.Row, {
	        className: 'show-grid'
	      }, void 0, _jsx(_reactBootstrap.Col, {
	        xs: 12,
	        md: 6,
	        mdOffset: 3
	      }, void 0, _jsx('h2', {}, void 0, 'I want to ', _jsx('strong', {}, void 0, this.props.list.name)))), _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
	        md: 1,
	        mdOffset: 1
	      }, void 0, _jsx(_Tiles2.default, {
	        list: this.props.list
	      })), _jsx(_reactBootstrap.Col, {
	        xs: 12,
	        md: 6,
	        mdOffset: 1
	      }, void 0, _jsx(_Progress2.default, {
	        list: this.props.list
	      }), _jsx(_ToDoList2.default, {
	        readOnly: !this.belongsToUser(),
	        todos: this.props.list.items,
	        deleteListItem: this.handleDeleteListItem,
	        toggleListItem: this.handleToggleListItem
	      }), this.belongsToUser() ? _jsx(_ListItemCreateWidget2.default, {
	        addListItem: this.handleAddListItem
	      }) : null), _jsx(_reactBootstrap.Col, {
	        md: 1,
	        mdOffset: 1
	      }, void 0, this.loggedIn() ? _jsx(_Actions2.default, {
	        cloneList: this.handleCloneList,
	        list: this.props.list
	      }) : null))));
	    }
	  }]);

	  return PostDetailPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in sever side.


	PostDetailPage.need = [function (params) {
	  return (0, _ListActions.fetchList)(params.cuid);
	}];

	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    list: (0, _ListReducer.getPost)(state, props.params.cuid),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

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

	var _reactRedux = __webpack_require__(8);

	var _reactBootstrap = __webpack_require__(1);

	var _Header = __webpack_require__(15);

	var _Header2 = _interopRequireDefault(_Header);

	var _PostList = __webpack_require__(54);

	var _PostList2 = _interopRequireDefault(_PostList);

	var _RecentLists = __webpack_require__(63);

	var _RecentLists2 = _interopRequireDefault(_RecentLists);

	var _PostCreateWidget = __webpack_require__(53);

	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

	var _ListActions = __webpack_require__(10);

	var _TemplateActions = __webpack_require__(28);

	var _AppActions = __webpack_require__(5);

	var _UserActions = __webpack_require__(12);

	var _AppReducer = __webpack_require__(24);

	var _ListReducer = __webpack_require__(11);

	var _TemplateReducer = __webpack_require__(29);

	var _UserReducer = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	({
	  "wantto-header": "_1LGOl9m-UpD3PZyyYTTdcE",
	  "wide-grid": "_3hc7gSnhstpueMaJ1aJIHZ"
	});

	// Import Components


	// Import Actions


	// Import Selectors

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
	        _this.props.dispatch((0, _ListActions.deletePostRequest)(post));
	      }
	    }, _this.handleAddList = function (verb, action) {
	      _this.props.dispatch((0, _ListActions.addListRequest)({ verb: verb, action: action }));
	    }, _this.handleAddEmptyList = function (verb, action) {
	      _this.props.dispatch((0, _ListActions.addListRequest)({ verb: verb, action: action }, 'lists'));
	    }, _this.handleToggleAddWarning = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddWarning)());
	    }, _this.handleLogout = function () {
	      _this.props.dispatch((0, _UserActions.logOut)());
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PostListPage, [{
	    key: 'componentDidMount',


	    // constructor(props) {
	    //   super(props);
	    //   this.props.dispatch(toggleSpinnerOn());
	    // }

	    value: function componentDidMount() {
	      this.props.dispatch((0, _ListActions.fetchPosts)());
	      this.props.dispatch((0, _TemplateActions.fetchTemplates)());
	      this.props.dispatch((0, _ListActions.fetchRecentLists)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_Header2.default, {
	        user: this.props.user,
	        logout: this.handleLogout
	      }), _jsx(_reactBootstrap.Grid, {}, void 0, _jsx(_reactBootstrap.Row, {
	        className: 'show-grid'
	      }, void 0, _jsx(_reactBootstrap.Col, {
	        md: 12
	      }, void 0, _jsx(_PostCreateWidget2.default, {
	        toggleAddWarning: this.handleToggleAddWarning,
	        showAddWarning: this.props.showAddWarning,
	        addPost: this.handleAddList,
	        addEmptyList: this.handleAddEmptyList,
	        showAddPost: true,
	        templates: this.props.templates
	      }))), _jsx(_reactBootstrap.Row, {
	        className: 'show-grid'
	      }, void 0, _jsx(_reactBootstrap.Col, {
	        xs: 12,
	        md: 7,
	        mdOffset: 2
	      }, void 0, _jsx(_PostList2.default, {
	        handleDeletePost: this.handleDeletePost,
	        lists: this.props.lists
	      })), _jsx(_reactBootstrap.Col, {
	        md: 3
	      }, void 0, _jsx(_RecentLists2.default, {
	        lists: this.props.recentLists
	      })))));
	    }
	  }]);

	  return PostListPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in sever side.


	PostListPage.need = [function () {
	  return (0, _ListActions.fetchPosts)();
	}, function () {
	  return (0, _TemplateActions.fetchTemplates)();
	}, function () {
	  return (0, _ListActions.fetchRecentLists)();
	}];

	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    lists: (0, _ListReducer.getPosts)(state),
	    recentLists: (0, _ListReducer.getRecentLists)(state),
	    templates: (0, _TemplateReducer.getTemplates)(state),
	    showAddWarning: (0, _AppReducer.getShowAddWarning)(state),
	    authorized: (0, _UserReducer.getAuth)(state),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}

	PostListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ },
/* 27 */
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

	var _reactRedux = __webpack_require__(8);

	var _UnAuthWidget = __webpack_require__(65);

	var _UnAuthWidget2 = _interopRequireDefault(_UnAuthWidget);

	var _ListActions = __webpack_require__(10);

	var _ListReducer = __webpack_require__(11);

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
	      this.props.dispatch((0, _ListActions.fetchDemoLists)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: 'container'
	      }, void 0, _jsx(_UnAuthWidget2.default, {
	        lists: this.props.lists
	      }));
	    }
	  }]);

	  return UnAuthPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in sever side.


	UnAuthPage.need = [function () {
	  return (0, _ListActions.fetchDemoLists)();
	}];

	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    lists: (0, _ListReducer.getDemoLists)(state)
	  };
	}

	UnAuthPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(UnAuthPage);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ADD_TEMPLATES = undefined;
	exports.addTemplates = addTemplates;
	exports.fetchTemplates = fetchTemplates;

	var _apiCaller = __webpack_require__(13);

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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTemplates = undefined;

	var _TemplateActions = __webpack_require__(28);

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _q = __webpack_require__(7);

	var Q = _interopRequireWildcard(_q);

	var _listItem = __webpack_require__(31);

	var _listItem2 = _interopRequireDefault(_listItem);

	var _listTemplate = __webpack_require__(17);

	var _listTemplate2 = _interopRequireDefault(_listTemplate);

	var _pendingItem = __webpack_require__(32);

	var _pendingItem2 = _interopRequireDefault(_pendingItem);

	var _lodash = __webpack_require__(3);

	var _ = _interopRequireWildcard(_lodash);

	var _cuid = __webpack_require__(33);

	var _cuid2 = _interopRequireDefault(_cuid);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = Q.Promise;

	var Schema = _mongoose2.default.Schema;


	var ADD_ITEM_THRESHOLD = 1;
	var DELETE_ITEM_THRESHOLD = 1;

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

	listSchema.virtual('fractionComplete').get(function () {
	  var numItems = this.items.length;
	  var numComplete = _.filter(this.items, 'complete').length;
	  return {
	    total: numComplete + '/' + numItems,
	    numerator: numComplete,
	    denominator: numItems
	  };
	});

	listSchema.query.forUser = function (user) {
	  return this.find({ _users: user._id });
	};

	listSchema.query.byRecent = function () {
	  return this.find().sort('-dateAdded').limit(10);
	};

	listSchema.methods.addListItem = function (item, user) {
	  var list = this;

	  if (_.find(list.items, function (i) {
	    return _.toLower(i.text) === _.toLower(item);
	  })) {
	    return Q.reject('This list already contains ' + item);
	  }

	  //add item to this list no matter what
	  var newItem = new _listItem2.default({ text: item });
	  list.items.push(newItem);

	  //find listtemplate
	  return _listTemplate2.default.findOne({ _id: this._template }).exec().then(function (template) {

	    //if there is no template
	    // don't do anything else
	    if (!template) {
	      return Q.reject('no template');
	    }

	    //look for a pending item with that text
	    var lowercaseText = _.toLower(item);
	    var pendingItem = _.find(template.pendingItems, { text: lowercaseText });

	    //if a delete pending item exists, and our list is in it, just
	    // remove our list id from that delete pending item and
	    // remove the pending item if necessary

	    if (pendingItem && pendingItem.action === 'delete') {
	      var removed = _.remove(pendingItem._lists, function (_list) {
	        return _list.equals(list._id);
	      });
	      //if our list isn't in it, that means it's a dupe
	      if (!removed.length) {
	        return Q.reject('Duplicates are not allowed.');
	      }
	      //if there are still lists left, save list
	      if (pendingItem._lists.length) {
	        return pendingItem.save();
	      }
	      //otherwise, delete pending item
	      pendingItem.remove();
	      return template.save();
	    }

	    //if the template was created by the current user
	    // bypass the threshold and add it to everything immediately
	    if (template.createdBy && user._id.equals(template.createdBy)) {
	      return template.addItem(item, [list._id]);
	    }

	    //if there is no pending item, create one, then do nothing
	    if (!pendingItem) {
	      template.pendingItems.push(new _pendingItem2.default({
	        text: lowercaseText,
	        action: 'create',
	        _lists: [list._id] }));
	      return template.save();
	    }
	    //what if pending items already includes this list?
	    // do nothing

	    else if (_.find(pendingItem._lists, function (o) {
	        return o.equals(list._id);
	      })) {
	        //don't even save the list - item is a dupe
	        return Q.reject('This list already contains this item.');
	      }
	      //if we have less than the threshold, just add the list id
	      else if (pendingItem._lists.length < ADD_ITEM_THRESHOLD) {
	          pendingItem._lists.push(list._id);
	          return pendingItem.save();
	        }
	        //we've met the threshold, add the item to the template
	        // and update all the lists
	        else {
	            //add the list id anyway so that we don't
	            // double-add the item
	            pendingItem._lists.push(list._id);
	            return template.realizePendingItem(pendingItem);
	          }
	  }).then(function () {
	    return list.save();
	  }).then(function (newList) {
	    return newList;
	  }).catch(function (err) {
	    console.log(err);
	    return Q.reject(err);
	  });
	};

	listSchema.methods.addItemsFromTemplate = function (template) {
	  this.items = _.clone(template.items);
	  this._template = template._id;
	  return this.save();
	};

	listSchema.methods.cloneForUser = function (_user) {
	  var list = this;
	  var newList = new this.constructor();
	  newList.cuid = (0, _cuid2.default)();
	  newList.verb = this.verb;
	  newList.action = this.action;
	  newList._users.push(_user);

	  this.items.forEach(function (item) {
	    newList.items.push(new _listItem2.default({ text: item.text }));
	  });
	  newList._template = this._template;

	  //add this list to all the pending items that old
	  // list has so we don't double add or delete stuff
	  // don't worry about whether they push it over the
	  // threshold for now
	  return _listTemplate2.default.findOne({ _id: this._template }).exec().then(function (template) {
	    template.pendingItems.forEach(function (pendingItem) {
	      if (!!_.find(pendingItem._lists, function (_list) {
	        return _list.equals(list._id);
	      })) {
	        pendingItem._lists.push(newList._id);
	      }
	    });
	    return template.save();
	  }).then(function () {
	    return newList.save();
	  });
	};

	listSchema.methods.addItemToOtherLists = function (itemText) {

	  this.constructor.find({ _template: this._template, _id: { $ne: this._id } }).exec().then(function (lists) {
	    lists.forEach(function (list) {
	      list.items.push(new _listItem2.default({ text: itemText }));
	      list.save();
	    });
	  });
	};

	listSchema.methods.deleteListItem = function (_id) {
	  var list = this;
	  var item = this.items.id(_id);
	  var lowercaseText = _.toLower(item.text);

	  // remove item no matter what
	  item.remove();

	  return _listTemplate2.default.findOne({ _id: list._template }).exec().then(function (template) {

	    //if there is no template
	    // don't do anything else
	    if (!template) {
	      return Q.reject('no template');
	    }

	    //check for a pre-existing pending item
	    var pendingItem = _.find(template.pendingItems, { text: lowercaseText });

	    //if there is no pending item, create one
	    if (!pendingItem) {
	      template.pendingItems.push(new _pendingItem2.default({
	        text: lowercaseText,
	        action: 'delete',
	        _lists: [list._id] }));
	      return template.save();
	    }

	    //if there is a pending item, check if it's a create or delete

	    //if it's a create, don't add a new 'delete' pending item
	    // just remove the list from pendingItem._lists
	    if (pendingItem.action === 'create') {
	      _.remove(pendingItem._lists, function (_list) {
	        return _list.equals(list._id);
	      });
	      //if there are still lists left, save list
	      if (pendingItem._lists.length) {
	        return pendingItem.save();
	      }
	      //otherwise, delete pending item
	      pendingItem.remove();
	      return template.save();
	    }

	    //if it's a delete, check how many lists are on it already

	    //if we are less than threshold, add list id to pendingItem._lists
	    if (pendingItem._lists.length < DELETE_ITEM_THRESHOLD) {
	      pendingItem._lists.push(list._id);
	      return pendingItem.save();
	    }

	    //otherwise, remove item from template and delete pending item
	    return template.removeItem(pendingItem);
	  }).then(function () {
	    return list.save();
	  }).then(function (newList) {
	    return newList;
	  }).catch(function (err) {
	    console.log(err);
	    return Q.reject(err);
	  });
	};

	listSchema.statics.demoLists = function () {
	  return [{ name: 'watch every Harry Potter movie' }, { name: 'visit every castle in Scotland' }, { name: 'read every Stephen King novel' }, { name: 'run a 5k in every US state' }, { name: 'visit every country in Europe' }, { name: 'visit every continent' }];
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

	var pendingItemSchema = new Schema({
	  text: { type: 'String', required: true },
	  _lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
	  action: { type: 'String', default: 'create' },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});

	exports.default = _mongoose2.default.model('PendingItem', pendingItemSchema);

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 34 */
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

	var _reactRouter = __webpack_require__(4);

	var _App = __webpack_require__(50);

	var _App2 = _interopRequireDefault(_App);

	var _AppActions = __webpack_require__(5);

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
	  __webpack_require__(26);
	  __webpack_require__(25);
	  __webpack_require__(27);
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

	  var startSpinner = function startSpinner(nextState, replace, callback) {
	    store.dispatch((0, _AppActions.toggleSpinnerOn)());
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
	        cb(null, __webpack_require__(26).default);
	      }).bind(null, __webpack_require__));
	    }
	  }), _jsx(_reactRouter.Route, {
	    path: '/login',
	    onEnter: redirectAuth,
	    getComponent: function getComponent(nextState, cb) {
	      Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(27).default);
	      }).bind(null, __webpack_require__));
	    }
	  }), _jsx(_reactRouter.Route, {
	    onEnter: startSpinner,
	    path: '/lists/:cuid',
	    getComponent: function getComponent(nextState, cb) {
	      Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(25).default);
	      }).bind(null, __webpack_require__));
	    }
	  }));
	};

/***/ },
/* 35 */
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

	var _redux = __webpack_require__(9);

	var _reduxThunk = __webpack_require__(89);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(51);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(66);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reactRouterRedux = __webpack_require__(18);

	var _reduxLogger = __webpack_require__(88);

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
/* 36 */
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

	var _post = __webpack_require__(70);

	var _post2 = _interopRequireDefault(_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(22);

	var _list = __webpack_require__(67);

	var ListController = _interopRequireWildcard(_list);

	var _listTemplate = __webpack_require__(68);

	var ListTemplateController = _interopRequireWildcard(_listTemplate);

	var _user = __webpack_require__(69);

	var UserController = _interopRequireWildcard(_user);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	router.use(function (req, res, next) {
	  req.isAuthenticated();
	  next();
	});

	// lists
	router.route('/lists').get(ListController.getLists);
	router.route('/lists/demo').get(ListController.getDemoLists);
	router.route('/lists/recent').get(ListController.getRecentLists);
	router.route('/lists').post(ListController.addEmptyList);
	router.route('/lists/find_or_create').post(ListController.findOrCreateListTemplate);
	router.route('/lists/:cuid/toggle/:list_item_id').put(ListController.toggleListItem);
	router.route('/lists/:cuid/clone').post(ListController.cloneList);
	router.route('/lists/:cuid').get(ListController.getList);
	router.route('/lists/:cuid').post(ListController.addListItem);
	router.route('/lists/:cuid/item/:id').delete(ListController.deleteListItem);

	// templates
	router.route('/templates').get(ListTemplateController.getTemplates);

	// users
	router.route('/logout').post(UserController.logout);

	exports.default = router;

/***/ },
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(23);
	var ExtractTextPlugin = __webpack_require__(75);
	var cssnext = __webpack_require__(78);
	var postcssFocus = __webpack_require__(79);
	var postcssReporter = __webpack_require__(80);

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
	    extensions: ['', '.js', '.jsx', '.json'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loaders: ExtractTextPlugin.extract('style-loader', 'css-loader')
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    },, {
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

	  plugins: [new ExtractTextPlugin('styles.css'), new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
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
/* 40 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("connect-mongo");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("passport-google-oauth");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 50 */
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

	var _reactRedux = __webpack_require__(8);

	var _App = {
	  "Loader__background": "_2VjePRjlapoYxn9_iIVScL"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(14);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactLoaderAdvanced = __webpack_require__(83);

	var _reactLoaderAdvanced2 = _interopRequireDefault(_reactLoaderAdvanced);

	var _Header = __webpack_require__(15);

	var _Header2 = _interopRequireDefault(_Header);

	var _SystemMessage = __webpack_require__(52);

	var _SystemMessage2 = _interopRequireDefault(_SystemMessage);

	var _UserActions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Components


	// actions


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
	      }, void 0, _jsx(_SystemMessage2.default, {
	        dispatch: this.props.dispatch,
	        alerts: this.props.alerts
	      }), _jsx('div', {}, void 0, this.props.children))));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    user: store.user,
	    showSpinner: store.app.showSpinner,
	    alerts: store.app.systemMessages
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(85);

	var _reduxDevtoolsLogMonitor = __webpack_require__(87);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(86);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 52 */
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

	var _reactBsNotifier = __webpack_require__(82);

	var _AppActions = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SystemMessage = function (_React$Component) {
		_inherits(SystemMessage, _React$Component);

		function SystemMessage() {
			_classCallCheck(this, SystemMessage);

			return _possibleConstructorReturn(this, (SystemMessage.__proto__ || Object.getPrototypeOf(SystemMessage)).apply(this, arguments));
		}

		_createClass(SystemMessage, [{
			key: 'onAlertDismissed',
			value: function onAlertDismissed(alert) {
				this.props.dispatch((0, _AppActions.removeSystemMessage)());
			}
		}, {
			key: 'render',
			value: function render() {
				return _jsx(_reactBsNotifier.AlertList, {
					position: 'top-right',
					alerts: this.props.alerts,
					timeout: 5000,
					dismissTitle: 'Dismiss',
					onDismiss: this.onAlertDismissed.bind(this)
				});
			}
		}]);

		return SystemMessage;
	}(_react2.default.Component);

	exports.default = SystemMessage;

/***/ },
/* 53 */
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

	var _reactBootstrapTypeahead = __webpack_require__(81);

	var _reactBootstrapTypeahead2 = _interopRequireDefault(_reactBootstrapTypeahead);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style
	({
	  "wantto": "_1sPNec_u_au2dq9uV49i33",
	  "bootstrap-typeahead-input-main": "_34I4xmy1Hu2SnZgmL9GN8J",
	  "wantto-input": "P7nRVfjQmYl4z0f7mdCxQ",
	  "form-control": "_2fe0eCsTdLTEPa97k20fr9",
	  "bootstrap-typeahead-input-hint": "_15UmI0nfpXeOi0tsHDqHIb",
	  "wantto-form-button-container": "_2X_GDNQgIM1Pj5Mw0PRqve",
	  "wantto-form-container": "DPwACO5eRWwXQflgA8fr2",
	  "wantto-alert": "LJZRNhpQFW_nr0TLyEQvm",
	  "wantto-alert-buttons": "_3YT4nPsP_I-pLWnlEx96ey"
	});

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
	        bsStyle: 'info',
	        className: 'wantto-alert',
	        onDismiss: this.handleAlertDismiss
	      }, void 0, _jsx('h4', {}, void 0, 'No results found for ', _jsx('strong', {}, void 0, this.state.selected), '.'), _jsx('div', {
	        className: 'wantto-alert-buttons'
	      }, void 0, _jsx(_reactBootstrap.Button, {
	        bsStyle: 'default',
	        onClick: this.addEmptyList
	      }, void 0, 'Create an empty list!')));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {
	        className: 'wantto'
	      }, void 0, _jsx(_reactBootstrap.Form, {
	        inline: true,
	        className: 'wantto-form-container'
	      }, void 0, _jsx('h1', {}, void 0, 'I want to ', _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.FormControl, {
	        autoFocus: true,
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
	      }, void 0, this.state.isLoading && !this.props.showAddWarning ? 'Creating...' : 'Create!'))), this.props.showAddWarning ? this.renderAlert() : '');
	    }
	  }]);

	  return PostCreateWidget;
	}(_react.Component);

	exports.default = PostCreateWidget;

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

	var _PostListItem = __webpack_require__(57);

	var _PostListItem2 = _interopRequireDefault(_PostListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	({
	  "list-list": "_1Sa9tENRsAWnhNLnj1dcQ5"
	});

	// Import Components


	function PostList(props) {
	  return _jsx('div', {
	    className: 'list-list'
	  }, void 0, props.lists.map(function (list) {
	    return _jsx(_PostListItem2.default, {
	      post: list,
	      onDelete: function onDelete() {
	        return props.handleDeletePost(list.cuid);
	      }
	    }, list.cuid);
	  }));
	}

	exports.default = PostList;

/***/ },
/* 55 */
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

	var _reactFontawesome = __webpack_require__(6);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var _reactBootstrap = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx(_reactBootstrap.Tooltip, {
	  id: 'clone-tooltip'
	}, void 0, 'Clone List');

	var _ref2 = _jsx(_reactFontawesome2.default, {
	  name: 'clone'
	});

	var Actions = function (_Component) {
	  _inherits(Actions, _Component);

	  function Actions() {
	    _classCallCheck(this, Actions);

	    return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
	  }

	  _createClass(Actions, [{
	    key: 'tooltip',
	    value: function tooltip() {
	      return _ref;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx(_reactBootstrap.OverlayTrigger, {
	        placement: 'bottom',
	        overlay: this.tooltip()
	      }, void 0, _jsx(_reactBootstrap.Button, {
	        onClick: this.props.cloneList
	      }, void 0, _ref2));
	    }
	  }]);

	  return Actions;
	}(_react.Component);

	exports.default = Actions;

/***/ },
/* 56 */
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

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListItemCreateWidget.__proto__ || Object.getPrototypeOf(ListItemCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addListItem = function (e) {
	      e.preventDefault();
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

	      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Form, {
	        onSubmit: this.addListItem
	      }, void 0, _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.InputGroup, {}, void 0, _jsx(_reactBootstrap.FormControl, {
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _reactBootstrap = __webpack_require__(1);

	var _reactFontawesome = __webpack_require__(6);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	({
	  "percent-span": "_1r1j2CUyb4HlFuD7n29WXv",
	  "percent-trophy": "_3FNvmeArg4D3dFVl_PVHB1",
	  "list-list-item": "xZiTQGCkr332FZNrc8qkO",
	  "list-list-link": "_2t4zFDNhxxFSIrSC_9pa3F",
	  "item-icon": "_1Ld5clgFr13TlFVvAkn1WI"
	});

	var _ref = _jsx(_reactFontawesome2.default, {
	  className: 'item-icon',
	  name: 'angle-right'
	});

	var _ref2 = _jsx(_reactFontawesome2.default, {
	  name: 'trophy',
	  className: 'pull-right percent-span percent-trophy'
	});

	function ListItem(props) {
	  return _jsx('div', {}, void 0, _jsx('h3', {
	    className: 'list-list-item'
	  }, void 0, _ref, _jsx(_reactRouter.Link, {
	    className: 'list-list-link',
	    to: '/lists/' + props.post.cuid
	  }, void 0, props.post.name), props.post.percentComplete < 100 ? _jsx(_reactBootstrap.Label, {
	    className: 'pull-right percent-span'
	  }, void 0, props.post.percentComplete, '%') : _ref2));
	}

	exports.default = ListItem;

/***/ },
/* 58 */
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

	var _reactBootstrap = __webpack_require__(1);

	var _reactFontawesome = __webpack_require__(6);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	({
	  "progress-percent": "v_J3ZTONvHTm6a-ztOoOk"
	});

	var _ref = _jsx(_reactFontawesome2.default, {
	  className: 'progress-percent',
	  name: 'trophy'
	});

	var Progress = function (_Component) {
	  _inherits(Progress, _Component);

	  function Progress() {
	    _classCallCheck(this, Progress);

	    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
	  }

	  _createClass(Progress, [{
	    key: 'progressLabel',
	    value: function progressLabel() {
	      switch (this.props.list.percentComplete) {
	        case 0:
	          return;
	        case 100:
	          return _ref;
	        default:
	          return _jsx('span', {
	            className: 'progress-percent'
	          }, void 0, this.props.list.percentComplete, '%');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx(_reactBootstrap.ProgressBar, {
	        striped: true,
	        now: this.props.list.percentComplete
	      });
	    }
	  }]);

	  return Progress;
	}(_react.Component);

	exports.default = Progress;

/***/ },
/* 59 */
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

	var _reactFontawesome = __webpack_require__(6);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var _reactBootstrap = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	({
	  "detail-tile": "_1X2CUKlRYBiNzWclf95852",
	  "panel-body": "_3NjK8b97iIbkajBbrzDa9e",
	  "detail": "g2BGPya_Py98YElSl56wV",
	  "caption": "_1OnuMnOHolIqLZRIwI3_vL"
	});

	var _ref = _jsx(_reactFontawesome2.default, {
	  name: 'trophy'
	});

	var _ref2 = _jsx('p', {
	  className: 'caption'
	}, void 0, 'complete');

	var _ref3 = _jsx('p', {
	  className: 'caption'
	}, void 0, 'total');

	var Tiles = function (_Component) {
	  _inherits(Tiles, _Component);

	  function Tiles() {
	    _classCallCheck(this, Tiles);

	    return _possibleConstructorReturn(this, (Tiles.__proto__ || Object.getPrototypeOf(Tiles)).apply(this, arguments));
	  }

	  _createClass(Tiles, [{
	    key: 'percentLabel',
	    value: function percentLabel() {
	      switch (this.props.list.percentComplete) {
	        case 100:
	          return _ref;
	        default:
	          return this.props.list.percentComplete + '%';
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Panel, {
	        className: 'detail-tile'
	      }, void 0, _jsx('p', {
	        className: 'detail'
	      }, void 0, _jsx(_reactBootstrap.Image, {
	        src: this.props.list._users[0].picture,
	        rounded: true
	      })), _jsx('p', {
	        className: 'caption'
	      }, void 0, this.props.list._users[0].name)), _jsx(_reactBootstrap.Panel, {
	        className: 'detail-tile'
	      }, void 0, _jsx('p', {
	        className: 'detail'
	      }, void 0, this.percentLabel())), _jsx(_reactBootstrap.Panel, {
	        className: 'detail-tile'
	      }, void 0, _jsx('p', {
	        className: 'detail'
	      }, void 0, this.props.list.fractionComplete.numerator), _ref2), _jsx(_reactBootstrap.Panel, {
	        className: 'detail-tile'
	      }, void 0, _jsx('p', {
	        className: 'detail'
	      }, void 0, this.props.list.fractionComplete.denominator), _ref3));
	    }
	  }]);

	  return Tiles;
	}(_react.Component);

	exports.default = Tiles;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(1);

	var _ToDoListItem = __webpack_require__(62);

	var _ToDoListItem2 = _interopRequireDefault(_ToDoListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	({
	  "todo-list": "_2nemZR0hwvzRupcAuOKV9o"
	});

	// Import Components


	function ToDoList(props) {
	  return _jsx('div', {
	    className: 'todo-list'
	  }, void 0, _jsx(_reactBootstrap.ListGroup, {}, void 0, props.todos.map(function (todo) {
	    return _jsx(_ToDoListItem2.default, {
	      readOnly: props.readOnly,
	      todo: todo,
	      toggleListItem: props.toggleListItem,
	      deleteListItem: props.deleteListItem
	    }, todo._id);
	  })));
	}

	exports.default = ToDoList;

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Checkbox = _react2.default.createClass({
	  displayName: 'Checkbox',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      value: true,
	      name: '',
	      borderWidth: '1px',
	      borderStyle: 'solid',
	      borderColor: '#c3c4c6',
	      borderRadius: '4px',
	      checkColor: '#d9230f',
	      height: '1px',
	      width: '',
	      namePaddingLeft: '10px',
	      namePaddingRight: ''
	    };
	  },
	  render: function render() {
	    var style = {
	      clickableStyle: {
	        cursor: 'pointer'
	      },
	      disabledStyle: {
	        cursor: 'default'
	      },
	      boxStyle: {
	        borderWidth: this.props.borderWidth,
	        borderStyle: this.props.borderStyle,
	        borderColor: this.props.borderColor,
	        borderRadius: this.props.borderRadius,
	        paddingLeft: this.props.width,
	        paddingRight: this.props.width,
	        paddingTop: this.props.height,
	        paddingBottom: this.props.height
	      },
	      disabledBoxStyle: {
	        backgroundColor: '#e1e1e2',
	        borderWidth: this.props.borderWidth,
	        borderStyle: this.props.borderStyle,
	        borderColor: this.props.borderColor,
	        borderRadius: this.props.borderRadius,
	        paddingLeft: this.props.width,
	        paddingRight: this.props.width,
	        paddingTop: this.props.height,
	        paddingBottom: this.props.height
	      },
	      show: {
	        visibility: 'visible',
	        color: this.props.checkColor
	      },
	      hidden: {
	        visibility: 'hidden',
	        color: this.props.checkColor
	      },
	      name: {
	        paddingLeft: this.props.namePaddingLeft,
	        paddingRight: this.props.namePaddingRight
	      }
	    };
	    return _jsx('div', {
	      style: this.props.disabled ? style.disabledStyle : style.clickableStyle
	    }, void 0, _jsx('span', {
	      style: this.props.disabled ? style.disabledBoxStyle : style.boxStyle
	    }, void 0, _jsx('i', {
	      className: 'fa fa-check fa-lg',
	      style: this.props.value ? style.show : style.hidden
	    })), _jsx('span', {
	      style: style.name
	    }, void 0, this.props.name));
	  }
	});

	var WrapperCheckbox = _react2.default.createClass({
	  displayName: 'WrapperCheckbox',

	  getInitialState: function getInitialState() {
	    return { value: this.props.checked };
	  },
	  handleClick: function handleClick() {
	    this.props.onClick();
	    this.setState({ value: !this.state.value });
	  },
	  render: function render() {
	    return _jsx('div', {
	      onClick: this.props.disabled ? null : this.handleClick,
	      className: 'checkbox-wrapper'
	    }, void 0, _jsx(Checkbox, {
	      name: this.props.name,
	      value: this.state.value,
	      disabled: this.props.disabled
	    }));
	  }
	});

	exports.default = WrapperCheckbox;

/***/ },
/* 62 */
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

	var _reactFontawesome = __webpack_require__(6);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var _Checkbox = __webpack_require__(61);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	({
	  "todo-list-item": "_323Aqxh6a7InSkrwNezPNG",
	  "trash-icon": "_27rfi7il-S_nxqusOF1BJQ",
	  "checkbox-wrapper": "_24Inc6ZkxRLfLr54sBWFxs",
	  "list-group-item": "gZogWfkz-gx47n0P7Dn0h"
	});

	var ToDoListItem = exports.ToDoListItem = function (_Component) {
	  _inherits(ToDoListItem, _Component);

	  function ToDoListItem(props) {
	    _classCallCheck(this, ToDoListItem);

	    var _this = _possibleConstructorReturn(this, (ToDoListItem.__proto__ || Object.getPrototypeOf(ToDoListItem)).call(this, props));

	    _this.toggleCheckbox = function () {
	      _this.props.toggleListItem(_this.props.todo);
	    };

	    _this.handleDeleteItem = function () {
	      _this.setState({ open: false });
	      _this.props.deleteListItem(_this.props.todo);
	    };

	    _this.state = { open: true };
	    return _this;
	  }

	  _createClass(ToDoListItem, [{
	    key: 'checked',
	    value: function checked() {
	      return this.props.todo.complete;
	    }
	  }, {
	    key: 'renderCheckbox',
	    value: function renderCheckbox() {
	      return _jsx(_reactBootstrap.Fade, {
	        'in': this.state.open,
	        className: 'todo-list-item'
	      }, void 0, _jsx('h4', {}, void 0, _jsx(_Checkbox2.default, {
	        disabled: this.props.readOnly,
	        checked: this.checked(),
	        onClick: this.toggleCheckbox,
	        name: this.props.todo.text
	      }), this.props.readOnly ? null : _jsx(_reactFontawesome2.default, {
	        onClick: this.handleDeleteItem,
	        className: 'trash-icon',
	        name: 'trash'
	      })));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: 'list-group-item'
	      }, void 0, this.renderCheckbox());
	    }
	  }]);

	  return ToDoListItem;
	}(_react.Component);

	exports.default = ToDoListItem;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _reactBootstrap = __webpack_require__(1);

	var _reactFontawesome = __webpack_require__(6);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	({
	  "recent-lists": "_695QJ1gNAIfvME0CGWPvy",
	  "bullet-icon": "_2Jpvk6-jQjKsCGAYox2f4t",
	  "list-link": "HySMFKM42ivojojvWXaVC"
	});

	var _ref = _jsx(_reactFontawesome2.default, {
	  name: 'angle-right',
	  className: 'bullet-icon'
	});

	function RecentLists(props) {

	  return _jsx(_reactBootstrap.Panel, {
	    className: 'recent-lists'
	  }, void 0, 'Others want to', props.lists.map(function (list) {
	    return _jsx('div', {
	      className: 'list-link'
	    }, list.cuid, _ref, _jsx(_reactRouter.Link, {
	      to: '/lists/' + list.cuid
	    }, void 0, list.name));
	  }));
	}

	exports.default = RecentLists;

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

	var _reactTypist = __webpack_require__(84);

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

	var _lodash = __webpack_require__(3);

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
	      if (this.props.lists.length > 0) {
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

	var _redux = __webpack_require__(9);

	var _reactRouterRedux = __webpack_require__(18);

	var _AppReducer = __webpack_require__(24);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _ListReducer = __webpack_require__(11);

	var _ListReducer2 = _interopRequireDefault(_ListReducer);

	var _TemplateReducer = __webpack_require__(29);

	var _TemplateReducer2 = _interopRequireDefault(_TemplateReducer);

	var _UserReducer = __webpack_require__(16);

	var _UserReducer2 = _interopRequireDefault(_UserReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer


	// Import Reducers
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  lists: _ListReducer2.default,
	  templates: _TemplateReducer2.default,
	  user: _UserReducer2.default,
	  routing: _reactRouterRedux.routerReducer
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDemoLists = getDemoLists;
	exports.cloneList = cloneList;
	exports.getRecentLists = getRecentLists;
	exports.getLists = getLists;
	exports.addEmptyList = addEmptyList;
	exports.findOrCreateListTemplate = findOrCreateListTemplate;
	exports.getList = getList;
	exports.addListItem = addListItem;
	exports.deleteListItem = deleteListItem;
	exports.deleteList = deleteList;
	exports.toggleListItem = toggleListItem;

	var _list = __webpack_require__(30);

	var _list2 = _interopRequireDefault(_list);

	var _listTemplate = __webpack_require__(17);

	var _listTemplate2 = _interopRequireDefault(_listTemplate);

	var _cuid = __webpack_require__(33);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _wolframHelper = __webpack_require__(73);

	var wolframHelper = _interopRequireWildcard(_wolframHelper);

	var _q = __webpack_require__(7);

	var Q = _interopRequireWildcard(_q);

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = Q.Promise;

	function getDemoLists(req, res) {
	  res.json({ lists: _list2.default.demoLists() });
	}

	function cloneList(req, res) {
	  if (!req.user) {
	    res.status(401).send('Unauthorized');
	  }

	  _list2.default.findOne({ cuid: req.params.cuid }).exec().then(function (list) {
	    return list.cloneForUser(req.user);
	  }).then(function (list) {
	    return _list2.default.populate(list, { path: '_users', select: 'name picture' });
	  }).then(function (list) {
	    res.json({ list: list });
	  }).catch(function (err) {
	    console.log('error? ', err);
	    res.status(422).send(err);
	  });
	}

	function getRecentLists(req, res) {
	  if (!req.user) {
	    res.json({ lists: [] });
	    return;
	  }

	  _list2.default.find().byRecent().ne('_users', req.user._id).populate('_users', 'name picture').exec().then(function (lists) {
	    res.json({ lists: lists });
	  }).catch(function (err) {
	    res.status(422).send(err);
	  });
	}

	function getLists(req, res) {
	  if (!req.user) {
	    res.json({ lists: [] });
	    return;
	  }

	  _list2.default.find().forUser(req.user).sort('-dateAdded').populate('_users', 'name picture').exec().then(function (lists) {
	    res.json({ lists: lists });
	  }).catch(function (err) {
	    res.status(422).send(err);
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

	  var newTemplate = new _listTemplate2.default({
	    actions: [req.body.list.action],
	    createdBy: req.user
	  });

	  newTemplate.save().then(function (template) {
	    console.log('creating a new empty template');
	    return newList.addItemsFromTemplate(template);
	  }).then(function (list) {
	    return _list2.default.populate(list, { path: '_users', select: 'name picture' });
	  }).then(function (list) {
	    res.json({ list: list });
	  }).catch(function (err) {
	    res.status(422).send(err);
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
	    return Q.reject('Invalid input');
	  }

	  var newList = new _list2.default(req.body.list);
	  newList.cuid = (0, _cuid2.default)();
	  newList._users.push(req.user);

	  //search ListTemplate for matching actions
	  _listTemplate2.default.findOne({ actions: req.body.list.action }).exec().then(function (template) {
	    //if we have a template with that action already, create
	    // a new list based on it
	    if (template) {
	      console.log('template found by name');
	      return Q.when(template);
	    }
	    return findOrCreateTemplateByItems(req.body.list.action);
	  }).then(function (template) {
	    return newList.addItemsFromTemplate(template);
	  }).then(function (list) {
	    return _list2.default.populate(list, { path: '_users', select: 'name picture' });
	  }).then(function (list) {
	    res.json({ list: list });
	  }).catch(function (err) {
	    console.log('error in the controller', err);
	    res.status(422).send(err);
	  });
	}

	/**
	 * Get a single list
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getList(req, res) {
	  _list2.default.findOne({ cuid: req.params.cuid }).populate('_users', 'name picture').exec().then(function (list) {
	    res.json({ list: list });
	  }).catch(function (err) {
	    res.status(404).send(err);
	  });
	}

	function addListItem(req, res) {

	  _list2.default.findOne({ cuid: req.params.cuid }).populate('_users', 'name picture').exec().then(function (list) {
	    return list.addListItem(req.body.item, req.user);
	  }).then(function (list) {
	    res.json({ list: list });
	  }).catch(function (err) {
	    res.status(422).send(err);
	  });
	}

	function deleteListItem(req, res) {
	  _list2.default.findOne({ cuid: req.params.cuid }).populate('_users', 'name picture').exec().then(function (list) {
	    return list.deleteListItem(req.params.id);
	  }).then(function (list) {
	    res.json({ list: list });
	  }).catch(function (err) {
	    res.status(422).send(err);
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

	  _list2.default.findOne({ cuid: req.params.cuid }).populate('_users', 'name picture').exec().then(function (list) {
	    var todo = list.items.id(req.params.list_item_id);

	    todo.dateModified = Date.now();
	    todo.complete = !todo.complete;

	    return list.save();
	  }).then(function (list) {
	    res.json({ list: list });
	  }).catch(function (err) {
	    res.status(422).send(err);
	  });
	}

	function findOrCreateTemplateByItems(action) {
	  var items = void 0;
	  return wolframHelper.tryQueries(action).then(function (resp) {
	    //look to see if we have any templates with these items already
	    items = resp;
	    return _listTemplate2.default.find().byItems(resp).exec();
	  }).then(function (template) {
	    if (template) {
	      console.log('template found by items');
	      //update template to include name
	      template.actions.push(action);
	      return template.save();
	    } else {
	      //create a new ListTemplate
	      console.log('creating a new template');
	      return _listTemplate2.default.newWithItems(action, items);
	    }
	  }).then(function (template) {
	    return template;
	  }).catch(function (err) {
	    return Q.reject(err);
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

	var _listTemplate = __webpack_require__(17);

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
	exports.logout = logout;

	var _user = __webpack_require__(21);

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
/* 70 */
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _q = __webpack_require__(7);

	var Q = _interopRequireWildcard(_q);

	var _express = __webpack_require__(22);

	var _express2 = _interopRequireDefault(_express);

	var _expressSession = __webpack_require__(43);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _connectMongo = __webpack_require__(42);

	var _connectMongo2 = _interopRequireDefault(_connectMongo);

	var _compression = __webpack_require__(41);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(2);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(40);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(46);

	var _path2 = _interopRequireDefault(_path);

	var _lodash = __webpack_require__(3);

	var _ = _interopRequireWildcard(_lodash);

	var _webpack = __webpack_require__(23);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(39);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(48);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(49);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _passport = __webpack_require__(44);

	var _passport2 = _interopRequireDefault(_passport);

	var _secrets = __webpack_require__(19);

	var _secrets2 = _interopRequireDefault(_secrets);

	var _passportGoogleOauth = __webpack_require__(45);

	var _user = __webpack_require__(21);

	var _user2 = _interopRequireDefault(_user);

	var _store = __webpack_require__(35);

	var _reactRedux = __webpack_require__(8);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(47);

	var _reactRouter = __webpack_require__(4);

	var _reactHelmet = __webpack_require__(14);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(34);

	var _fetchData = __webpack_require__(38);

	var _post = __webpack_require__(37);

	var _post2 = _interopRequireDefault(_post);

	var _dummyData = __webpack_require__(36);

	var _dummyData2 = _interopRequireDefault(_dummyData);

	var _config = __webpack_require__(20);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	_mongoose2.default.Promise = Q.Promise;

	// Webpack Requirements


	// passport


	// Initialize the Express App
	var app = new _express2.default();

	app.use('/', _express2.default.static(_path2.default.join(__dirname, 'public')));

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
	  _user2.default.findOne({ oauthID: profile.id }).exec().then(function (user) {
	    if (user !== null) {
	      user.name = profile.displayName;
	      user.picture = profile._json.image.url;
	    } else {
	      user = new _user2.default({
	        oauthID: profile.id,
	        name: profile.displayName,
	        picture: profile._json.image.url,
	        email: profile._json.emails[0].value
	      });
	      user.tokens.push({ kind: 'google', accessToken: accessToken });
	    }
	    return user.save();
	  }).then(function (user) {
	    done(null, user);
	  });
	}));

	// users/authentication
	app.get('/auth/google', _passport2.default.authenticate('google', {
	  scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/plus.profile.emails.read'] }));
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

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link href=\'/styles.css\' rel=\'stylesheet\' type=\'text/css\'/>\n      </head>\n      <body>\n        <div id="root"><div>hey</div></div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
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
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
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
	exports.formatResponse = exports.getItems = exports.tryQueries = exports.queryFormats = exports.formatQuery = exports.QUERY_OPTIONS = exports.waClient = exports.WA_APP_ID = undefined;

	var _wajs = __webpack_require__(90);

	var _wajs2 = _interopRequireDefault(_wajs);

	var _q = __webpack_require__(7);

	var Q = _interopRequireWildcard(_q);

	var _lodash = __webpack_require__(3);

	var _ = _interopRequireWildcard(_lodash);

	var _secrets = __webpack_require__(19);

	var _secrets2 = _interopRequireDefault(_secrets);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WA_APP_ID = exports.WA_APP_ID = _secrets2.default.wolframAlphaId;

	var waClient = exports.waClient = new _wajs2.default(WA_APP_ID);

	var QUERY_OPTIONS = exports.QUERY_OPTIONS = {
	  format: 'plaintext',
	  podState: '100@More',
	  ignoreCase: true,
	  includePodId: ['Result'],
	  scanner: ['Data']
	};

	var formatQuery = exports.formatQuery = function formatQuery(query) {
	  return query;
	}; //`${query} list`;

	var queryFormats = exports.queryFormats = function queryFormats(query) {
	  return [query, 'list of all ' + query];
	};

	var tryQueries = exports.tryQueries = function tryQueries(action) {
	  var queries = queryFormats(action);
	  var queryPromises = _.map(queries, function (query) {
	    return getItems(query);
	  });
	  return Q.any(queryPromises);
	};

	var getItems = exports.getItems = function getItems(action) {
	  return waClient.query(action, QUERY_OPTIONS).then(function (response) {
	    return formatResponse(response);
	  }).catch(function (err) {
	    console.log('err ', err);
	    return Q.reject(err);
	  });
	};

	var formatResponse = exports.formatResponse = function formatResponse(response) {
	  if (!response.pods()[0]) {
	    console.log('no pods in response');
	    return Q.reject();
	  }
	  var queryString = response.pods()[0].subpod[0].plaintext[0];
	  console.log('querystring', queryString);
	  if (queryString === '(data not available)') {
	    console.log('data not available');
	    return Q.reject();
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
	  //if array still only has one element, 
	  // it's probably not a legit query
	  if (resultArray.length === 1) {
	    console.log('response was only 1 item');
	    return Q.reject();
	  }
	  return Q.when(resultArray);
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("extract-text-webpack-plugin");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("hasha");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap-typeahead");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("react-bs-notifier");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("react-loader-advanced");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("react-typist");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = require("wajs");

/***/ }
/******/ ]);