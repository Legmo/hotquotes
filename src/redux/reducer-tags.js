const SET_TAGS = 'SET_TAGS';
const ADD_NEW_TAG = 'ADD_NEW_TAG';

let initialState = {
  tags:       [],
  newTagName: '',
};

const tagsReducer = (state = initialState, action) => {
  let newElement = {
    title: state.newTagName,
  };

  switch (action.type) {
    case SET_TAGS:
      return {
        ...state,
        tags: [
          ...action.tagsArray
        ],
        newTagName: ''
      };
    case ADD_NEW_TAG:
      newElement.title = action.newTagName;
      return {
        ...state,
        tags: [
          ...state.tags,
          newElement
        ]
      };
    default:
      return state;
  }
};

//ActionCreator's
export const setTagsAC = (tagsArray) => ({
  type:      SET_TAGS,
  tagsArray: tagsArray,
});

export const addNewTagTextAC = (tagName) => ({
  type:       ADD_NEW_TAG,
  newTagName: tagName,
});

export default tagsReducer;
