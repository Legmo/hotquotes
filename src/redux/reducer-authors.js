const SET_AUTHORS = 'SET_AUTHORS';
const SET_AUTHORS_IS_FETCHING         = 'SET_AUTHORS_IS_FETCHING';
const UPDATE_NEW_AUTHOR_NAME = 'UPDATE_NEW_AUTHOR_NAME';
const UPDATE_NEW_AUTHOR_SURNAME = 'UPDATE_NEW_AUTHOR_SURNAME';

let initialState = {
  authors:          [],
  newAuthorName:    '',
  newAuthorSurname: '',
  isFetching:       false,
};

const authorsReducer = (state = initialState, action) => {
  let newElement = {
    name:    state.newAuthorName,
    surname: state.newAuthorSurname,
    // id:      UuidGeneratorClass.generate(),
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
export const setAuthors             = (authorsArray) => ({
  type:         SET_AUTHORS,
  authorsArray: authorsArray,
});
export const updateNewAuthorName    = (authorName) => ({
  type:          UPDATE_NEW_AUTHOR_NAME,
  newAuthorName: authorName,
});
export const updateNewAuthorSurname = (authorSurname) => ({
  type:             UPDATE_NEW_AUTHOR_SURNAME,
  newAuthorSurname: authorSurname,
});
export const setAuthorsIsFetching = (isFetching) => ({
  type: SET_AUTHORS_IS_FETCHING,
  isFetching
});

export default authorsReducer;
