import { combineReducers, createStore } from 'redux';
import reducerQuotes from './reducer-quotes';
import reducerTags from './reducer-tags';
import reducerAuthors from './reducer-authors';

let reducers = combineReducers({
  quotes:  reducerQuotes,
  authors: reducerAuthors,
  tags:    reducerTags
});

let store = createStore(reducers);

export default store;
