/*todo: is it correct to put this logic into reducer?!*/
import { UuidGenerator } from '../utils/uuidGenerator';

const ADD_NEW_TAG = 'ADD-NEW-TAG';

const UuidGeneratorClass = new UuidGenerator;

let initialState = {
  tagsBase: [
    {
      name: 'девиз',
      id:   '0181e85f-5bc3-4095-b36c-192e63e19c4b',
    },
    {
      name: 'дух',
      id:   '0181e85f-f190-41af-a665-6f7718d17972',
    },
    {
      name: 'латынь',
      id:   '0181e860-1cfb-49c0-8df5-654b24fc6f48',
    },
    {
      name: 'нонконформизм',
      id:   '0181e860-46a1-48af-869b-0a135d69830b',
    },
    {
      name: 'Китай',
      id:   '0181e861-3cd7-48d1-b8f9-93b1a246d840',
    },
    {
      name: 'психология',
      id:   '0181e861-63c2-4c44-8e8f-0c9979430f4e',
    },
    {
      name: 'музыка',
      id:   '0181e862-0dfc-4db9-be19-4960b0ab2042',
    },
    {
      name: 'литература',
      id:   '0181e87d-fe3a-4e02-86d2-9d3453dc7d9d',
    }
  ],
  newTagName: '',
};

const tagsReducer = (state = initialState, action) => {
  let newElement = {
    name: state.newTagName,
    id:   UuidGeneratorClass.generate(),
  };

  switch (action.type) {
    case ADD_NEW_TAG:
      newElement.name = action.newTagName;
      return {
        ...state,
        tagsBase: [
          ...state.tagsBase,
          newElement
        ]
      };
    default:
      return state;
  }
};

//ActionCreator's
export const addNewTagTextCreator = (tagName) => ({
  type:       ADD_NEW_TAG,
  newTagName: tagName,
});

export default tagsReducer;
