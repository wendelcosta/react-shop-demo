/*
  @file: src/modules/rootReducer.js
  @brief: Main reducer index to create a root reducer
  @author: Shane Korin (sk@distriqt.com)
*/

import { combineReducers } from 'redux-immutable';
import products from './products/reducer';

// Creates the main reducer from all included modules
// The name of the object will be the module name in redux
const rootReducer = combineReducers({
  products
});

export default rootReducer;
