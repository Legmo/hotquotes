import { AuthorObjectType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './store';
import { authorsAPI, quotesAPI } from '../api/api';

const initialState = {
  authors:    [] as Array<AuthorObjectType>,
  isUpdating: false as boolean,
};

export type InitialAuthorsStateType = typeof initialState;

const authorsReducer = (state = initialState, action:ActionsTypes):InitialAuthorsStateType => {
  switch (action.type) {
    case 'authors/SET_AUTHORS':
      return {
        ...state,
        authors: [
          ...action.authorsArray,
        ],
      };
    case 'authors/IS_UPDATING':
      return {
        ...state,
        isUpdating: action.isUpdating,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsAuthors>;

// ActionCreator's
/* See more: https://youtu.be/2yJXFMqEbJs */
export const actionsAuthors = {
  setAuthors: (authorsArray:Array<AuthorObjectType>) => ({
    type:         'authors/SET_AUTHORS',
    authorsArray: authorsArray,
  } as const),
  authorsIsUpdating: (isUpdating:boolean) => ({
    type: 'authors/IS_UPDATING',
    isUpdating
  } as const),
};

// Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getAuthorsTC = ():ThunkType => async(dispatch) => {
  const response = await authorsAPI.getAll();
  dispatch(actionsAuthors.setAuthors(response));
  dispatch(actionsAuthors.authorsIsUpdating(false));
};

export const setAuthorTC = (name:string, surname:string):ThunkType => async(dispatch) => {
  const response = await authorsAPI.set(name, surname);
  // dispatch(actionsAuthors.setAuthors(response));
  // dispatch(actionsAuthors.authorsIsUpdating(false));
};

export default authorsReducer;
