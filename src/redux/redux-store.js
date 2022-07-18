import { combineReducers, createStore } from 'redux';
import quotesReducer from './reducer-quotes';
import authorsReducer from './reducer-authors';
import tagsReducer from './reducer-tags';
import sourcesReducer from './reducer-sources';

let reducers = combineReducers({
  quotes:  quotesReducer,
  authors: authorsReducer,
  tags:    tagsReducer,
  sources: sourcesReducer
});

let store = createStore(
  reducers,
  /* Mozilla Redux DevTools add-on integration
   * https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools
   * https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
   */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
