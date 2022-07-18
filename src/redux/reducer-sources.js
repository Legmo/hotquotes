const SET_SOURCES = 'SET_SOURCES';
const ADD_NEW_SOURCE = 'ADD_NEW_SOURCE';

let initialState = {
  sources:        [],
  newSourceTitle: '',
};

const sourcesReducer = (state = initialState, action) => {
  let newElement = {
    title: state.newSourceTitle,
  };

  switch (action.type) {
    case SET_SOURCES:
      return {
        ...state,
        sources: [
          ...action.sourcesArray
        ],
        newSourceTitle: ''
      };
    case ADD_NEW_SOURCE:
      newElement.title = action.newSourceTitle;
      return {
        ...state,
        sources: [
          ...state.sources,
          newElement
        ]
      };
    default:
      return state;
  }
};

//ActionCreator's
export const setSourcesAC = (sourcesArray) => ({
  type:         SET_SOURCES,
  sourcesArray: sourcesArray,
});

export const addNewSourceAC = (sourceTitle) => ({
  type:           ADD_NEW_SOURCE,
  newSourceTitle: sourceTitle,
});

export default sourcesReducer;
