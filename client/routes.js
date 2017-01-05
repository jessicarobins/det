/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

import { toggleSpinnerOn } from './modules/App/AppActions';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
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
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./modules/Post/pages/UnAuthPage/UnAuthPage');
  require('./modules/Help/pages/HelpPage');
  require('./modules/User/pages/CreateUsernamePage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export function createRoutes(store) {
  
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    else {
      store.dispatch(toggleSpinnerOn());
    }
    callback();
  };
  
  const startSpinner = (nextState, replace, callback) => {
    store.dispatch(toggleSpinnerOn());
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      store.dispatch(toggleSpinnerOn());
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  
  return (
    <Route path="/" component={App}>
      <IndexRoute
        onEnter={requireAuth}
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
          });
        }}
      />
      <Route
        path="/login"
        onEnter={redirectAuth}
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Post/pages/UnAuthPage/UnAuthPage').default);
          });
        }}
      />
      <Route
        onEnter={startSpinner}
        path="/lists/:cuid"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
          });
        }}
      />
      <Route
        path="/help"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Help/pages/HelpPage').default);
          });
        }}
      />
      <Route
        path="/username"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/User/pages/CreateUsernamePage').default);
          });
        }}
      />
    </Route>
  )
};
