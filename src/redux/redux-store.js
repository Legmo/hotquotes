import { combineReducers, createStore } from 'redux';
import reducerQuotes from './reducer-quotes';
import reducerUsers from './reducer-users';

let reducers = combineReducers({
  quotes: reducerQuotes,
  users: reducerUsers,
});

let store = createStore(reducers);

export default store;
