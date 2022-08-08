import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quotesReducer from './reducer-quotes';
import authorsReducer from './reducer-authors';
import tagsReducer from './reducer-tags';
import sourcesReducer from './reducer-sources';

const RootReducer = {
  quotes:  quotesReducer,
  authors: authorsReducer,
  tags:    tagsReducer,
  sources: sourcesReducer
};


/* See more: https://youtu.be/2yJXFMqEbJs */
type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key:string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>;

//See more: https://youtu.be/-vf5BJO3SCc?t=1485
const ReducerForTypeScript = combineReducers({...RootReducer});
type RootReducersForTypeScript = typeof ReducerForTypeScript;
export type AppStateType = ReturnType<RootReducersForTypeScript>

const store = configureStore({
  reducer: RootReducer
});

export default store;
