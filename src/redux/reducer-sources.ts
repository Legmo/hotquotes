const SET_SOURCES = 'SET_SOURCES';

type SourceObjectType = {
  createdTime: string | null,
  id: string | null,
  title: string
}

const initialState = {
  sources:        [] as Array<SourceObjectType>,
  newSourceTitle: '',
};

export type InitialStateType = typeof initialState;

const sourcesReducer = (state = initialState, action:SetSourcesActionType):InitialStateType => {
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
type SetSourcesActionType = {
  type: typeof SET_SOURCES,
  sourcesArray: Array<SourceObjectType>,
};

export const setSources = (sourcesArray:Array<SourceObjectType>):SetSourcesActionType => ({
  type:         SET_SOURCES,
  sourcesArray: sourcesArray,
});

export default sourcesReducer;
