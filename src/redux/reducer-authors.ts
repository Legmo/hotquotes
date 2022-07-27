const SET_AUTHORS = 'SET_AUTHORS';
const SET_AUTHORS_IS_FETCHING = 'SET_AUTHORS_IS_FETCHING';
const UPDATE_NEW_AUTHOR_NAME = 'UPDATE_NEW_AUTHOR_NAME';
const UPDATE_NEW_AUTHOR_SURNAME = 'UPDATE_NEW_AUTHOR_SURNAME';

type AuthorObjectType = {
  createdTime: string | null,
  id: string | null,
  name: string | null,
  surname: string | null,
}

const initialState = {
  authors:          [] as Array<AuthorObjectType>,
  newAuthorName:    null as string | null,
  newAuthorSurname: null as string | null,
  isFetching:       false as boolean,
};

export type InitialStateType = typeof initialState;

const authorsReducer = (state = initialState, action:any):InitialStateType => {
  const newElement = {
    createdTime: null,
    id:          null,
    name:        state.newAuthorName,
    surname:     state.newAuthorSurname,
  };

  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: [
          ...action.authorsArray
        ],
        newAuthorName:    '',
        newAuthorSurname: ''
      };
    case UPDATE_NEW_AUTHOR_NAME:
      newElement.name = action.newAuthorName;
      return {
        ...state,
        newAuthorName: action.newAuthorName,
      };
    case UPDATE_NEW_AUTHOR_SURNAME:
      newElement.surname = action.newAuthorSurname;
      return {
        ...state,
        newAuthorSurname: action.newAuthorSurname,
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

type SetAuthorsIsFetchingActionType = {
  type: typeof SET_AUTHORS_IS_FETCHING,
  isFetching: boolean,
};
export const setAuthorsIsFetching = (isFetching:boolean):SetAuthorsIsFetchingActionType => ({
  type: SET_AUTHORS_IS_FETCHING,
  isFetching
});

export default authorsReducer;
