import { AuthorObjectType } from '../types/types';

const SET_AUTHORS = 'SET_AUTHORS';
const ADD_AUTHOR = 'ADD_AUTHOR';
const SET_AUTHORS_IS_FETCHING = 'SET_AUTHORS_IS_FETCHING';
const UPDATE_NEW_AUTHOR_NAME = 'UPDATE_NEW_AUTHOR_NAME';
const UPDATE_NEW_AUTHOR_SURNAME = 'UPDATE_NEW_AUTHOR_SURNAME';

const initialState = {
  authors:    [] as Array<AuthorObjectType>,
  newAuthor:  {} as AuthorObjectType,
  isFetching: false as boolean,
};

export type InitialAuthorsStateType = typeof initialState;

const authorsReducer = (state = initialState, action:ActionsTypes):InitialAuthorsStateType => {
  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: [
          ...action.authorsArray,
        ],
      };
    case UPDATE_NEW_AUTHOR_NAME:
      return {
        ...state,
        newAuthor: {
          ...state.newAuthor,
          name: action.newAuthorName,
        },
      };
    case UPDATE_NEW_AUTHOR_SURNAME:
      return {
        ...state,
        newAuthor: {
          ...state.newAuthor,
          surname: action.newAuthorSurname,
        },
      };
    case ADD_AUTHOR:
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
    case SET_AUTHORS_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

type ActionsTypes =
  SetAuthorsActionType |
  UpdateNewAuthorNameActionType |
  UpdateNewAuthorSurnameActionType |
  AddNewAuthorActionType |
  SetAuthorsIsFetchingActionType;

//ActionCreator's
type SetAuthorsActionType = {
  type: typeof SET_AUTHORS,
  authorsArray: Array<AuthorObjectType>,
};
export const setAuthors = (authorsArray:Array<AuthorObjectType>):SetAuthorsActionType => ({
  type:         SET_AUTHORS,
  authorsArray: authorsArray,
});

type UpdateNewAuthorNameActionType = {
  type: typeof UPDATE_NEW_AUTHOR_NAME,
  newAuthorName: string,
};
export const updateNewAuthorName    = (authorName:string):UpdateNewAuthorNameActionType => ({
  type:          UPDATE_NEW_AUTHOR_NAME,
  newAuthorName: authorName,
});

type UpdateNewAuthorSurnameActionType = {
  type: typeof UPDATE_NEW_AUTHOR_SURNAME,
  newAuthorSurname: string,
};
export const updateNewAuthorSurname = (authorSurname:string):UpdateNewAuthorSurnameActionType => ({
  type:             UPDATE_NEW_AUTHOR_SURNAME,
  newAuthorSurname: authorSurname,
});

type AddNewAuthorActionType = {
  type: typeof ADD_AUTHOR,
};
export const addAuthor = ():AddNewAuthorActionType => ({
  type: ADD_AUTHOR,
});

type SetAuthorsIsFetchingActionType = {
  type: typeof SET_AUTHORS_IS_FETCHING,
  isFetching: boolean,
};
export const setAuthorsIsFetching = (isFetching:boolean):SetAuthorsIsFetchingActionType => ({
  type: SET_AUTHORS_IS_FETCHING,
  isFetching
});

export default authorsReducer;
