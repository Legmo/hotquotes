import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import quotesReducer from './reducer-quotes';
import authorsReducer from './reducer-authors';
import tagsReducer from './reducer-tags';
import sourcesReducer from './reducer-sources';
import appReducer from './reducer-app';

const RootReducer = {
  app:     appReducer,
  sources: sourcesReducer,
  quotes:  quotesReducer,
  tags:    tagsReducer,
  authors: authorsReducer
};

/* See more: https://youtu.be/2yJXFMqEbJs */
// type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never;
type PropertiesTypes<T> = T extends {[key:string]: infer U} ? any : never; //todo: fix this any!!!
export type InferActionsTypes<T extends {[key:string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>;

//See more: https://youtu.be/-vf5BJO3SCc?t=1485
const ReducerForTypeScript = combineReducers({...RootReducer});
type RootReducersForTypeScript = typeof ReducerForTypeScript;
export type AppStateType = ReturnType<RootReducersForTypeScript>

//See more: https://youtu.be/FK_FSOCC3ss?t=3940
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;


const store = configureStore({
  reducer: RootReducer
});

export default store;
