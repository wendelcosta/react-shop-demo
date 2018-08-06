/*
  @file: src/modules/configureStore.js
  @brief: Redux store creation and setup
  @author: Shane Korin (sk@distriqt.com)
*/

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

// Create the redux store
const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    composeEnhancers(
    applyMiddleware(thunk)),
  );

  return store;
}

export default configureStore;
