/*todo: is it correct to put this logic into reducer?!*/
import { UuidGenerator } from '../utils/uuidGenerator';

const ADD_NEW_AUTHOR = 'ADD_NEW_AUTHOR';
const UPDATE_NEW_AUTHOR_NAME = 'UPDATE_NEW_AUTHOR_NAME';
const UPDATE_NEW_AUTHOR_SURNAME = 'UPDATE_NEW_AUTHOR_SURNAME';

const UuidGeneratorClass = new UuidGenerator;

let initialState = {
  authorsBase: [
    {
      name:    'Марк',
      surname: 'Аврелий',
      id:      '0181e85f-0d52-4f7d-a26e-4b6bed4c2a51',
    },
    {
      name:    'Хань',
      surname: 'Сян-Цзы',
      id:      '0181e860-e9e3-4eaa-b5ee-ca9e46033e00',
    },
    {
      name:    'Шаво',
      surname: 'Одаджян',
      id:      '0181e861-b72e-4994-8ced-0f1b6be25566',
    },
    {
      name:    'Фрэнк',
      surname: 'Заппа',
      id:      '0181e87c-514d-46f8-af06-babc17876276',
    },
    {
      name:    'Фрэнк',
      surname: 'Хэрберт',
      id:      '0181e87d-a40c-4fc8-b1e1-79790914f08d',
    },
  ],
  newAuthorName:    '',
  newAuthorSurname: '',
};

const authorsReducer = (state = initialState, action) => {
  let newElement = {
    name:    state.newAuthorName,
    surname: state.newAuthorSurname,
    id:      UuidGeneratorClass.generate(),
  };

  switch (action.type) {
    case ADD_NEW_AUTHOR:
      newElement.name = '';
      newElement.surname = '';
      return {
        ...state,
        authorsBase: [
          ...state.authorsBase,
          newElement
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
export const updateNewAuthorNameCreator = (authorName) => ({
  type:          UPDATE_NEW_AUTHOR_NAME,
  newAuthorName: authorName,
});

export const updateNewAuthorSurnameCreator = (authorSurname) => ({
  type:             UPDATE_NEW_AUTHOR_SURNAME,
  newAuthorSurname: authorSurname,
});

export const addNewAuthorCreator = () => ({
  type: ADD_NEW_AUTHOR,
});

export default authorsReducer;
