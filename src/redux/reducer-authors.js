const SET_AUTHORS = 'SET_AUTHORS';
const UPDATE_NEW_AUTHOR_NAME = 'UPDATE_NEW_AUTHOR_NAME';
const UPDATE_NEW_AUTHOR_SURNAME = 'UPDATE_NEW_AUTHOR_SURNAME';

let initialState = {
  authors:          [],
  newAuthorName:    '',
  newAuthorSurname: '',
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

export default authorsReducer;
