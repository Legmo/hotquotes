import { AuthorObjectType } from '../types/types';
import { InferActionsTypes } from './redux-store';

const initialState = {
  authors:    [] as Array<AuthorObjectType>,
  newAuthor:  {} as AuthorObjectType,
  isFetching: false as boolean,
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
    case 'UPDATE_NEW_AUTHOR_NAME':
      return {
        ...state,
        newAuthor: {
          ...state.newAuthor,
          name: action.newAuthorName,
        },
      };
    case 'UPDATE_NEW_AUTHOR_SURNAME':
      return {
        ...state,
        newAuthor: {
          ...state.newAuthor,
          surname: action.newAuthorSurname,
        },
      };
    case 'ADD_AUTHOR':
      return {
        ...state,
        authors: [
          ...state.authors,
          state.newAuthor,
        ],
        newAuthor: {
          id:          null,
          createdTime: null,
          name:        '',
          surname:     '',
          quotesId:    [],
          sourcesId:   [],
        },
      };
    case 'SET_AUTHORS_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
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
  updateNewAuthorName: (authorName:string) => ({
    type:          'UPDATE_NEW_AUTHOR_NAME',
    newAuthorName: authorName,
  } as const),
  updateNewAuthorSurname: (authorSurname:string) => ({
    type:             'UPDATE_NEW_AUTHOR_SURNAME',
    newAuthorSurname: authorSurname,
  } as const),
  addAuthor: () => ({
    type: 'ADD_AUTHOR',
  } as const),
  setAuthorsIsFetching: (isFetching:boolean) => ({
    type: 'SET_AUTHORS_IS_FETCHING',
    isFetching
  } as const),
};


export default authorsReducer;
