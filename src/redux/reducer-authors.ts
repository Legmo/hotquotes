import { AuthorObjectType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { authorsAPI, quotesAPI } from '../api/api';

const initialState = {
  authors:    [] as Array<AuthorObjectType>,
  isUpdating: false as boolean,
};

export type InitialAuthorsStateType = typeof initialState;

const authorsReducer = (state = initialState, action:ActionsTypes):InitialAuthorsStateType => {
  switch (action.type) {
    case 'SET_AUTHORS':
      return {
        ...state,
        authors: [
          ...action.authorsArray,
        ],
      };
    case 'AUTHORS_IS_UPDATING':
      return {
        ...state,
        isUpdating: action.isUpdating,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsAuthors>;

//ActionCreator's
/* See more: https://youtu.be/2yJXFMqEbJs */
export const actionsAuthors = {
  setAuthors: (authorsArray:Array<AuthorObjectType>) => ({
    type:         'SET_AUTHORS',
    authorsArray: authorsArray,
  } as const),
  authorsIsUpdating: (isUpdating:boolean) => ({
    type: 'AUTHORS_IS_UPDATING',
    isUpdating
  } as const),
};

//Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getAuthorsTC = ():ThunkType => async(dispatch) => {
  return authorsAPI.getAll().then((response) => {
    dispatch(actionsAuthors.setAuthors(response));
    dispatch(actionsAuthors.authorsIsUpdating(false));
  });
};

export const setAuthorTC = (name:string, surname:string):ThunkType => async(dispatch) => {
  authorsAPI.set(name, surname).then((response) => {
    // dispatch(actionsQuotes.setQuotes(response));
    // dispatch(actionsQuotes.quotesIsUpdating(false));
  });
};

export default authorsReducer;
