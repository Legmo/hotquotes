const SET_SOURCES = 'SET_SOURCES';

let initialState = {
  sources:        [],
  newSourceTitle: '',
};

const sourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOURCES:
      return {
        ...state,
        sources: [
          ...action.sourcesArray
        ],
        newSourceTitle: ''
      };
    default:
      return state;
  }
};

//ActionCreator's
export const setSources     = (sourcesArray) => ({
  type:         SET_SOURCES,
  sourcesArray: sourcesArray,
});

export default sourcesReducer;
