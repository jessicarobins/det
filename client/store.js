/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './modules/App/components/DevTools';
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';

export function configureStore(initialState = {}, history) {
  // Middleware and store enhancers
  const middleware = [thunk, routerMiddleware(history)];
  let store;
  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    middleware.push(createLogger());
    // middleware.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));
    
  }
  else {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), f => f));
  }
  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
