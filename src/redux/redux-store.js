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

let store = createStore(reducers);

export default store;
