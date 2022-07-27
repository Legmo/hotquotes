import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './reducer-quotes';
import authorsReducer from './reducer-authors';
import tagsReducer from './reducer-tags';
import sourcesReducer from './reducer-sources';

let store = configureStore({
  reducer: {
    quotes:  quotesReducer,
    authors: authorsReducer,
    tags:    tagsReducer,
    sources: sourcesReducer
  }
});

export default store;
