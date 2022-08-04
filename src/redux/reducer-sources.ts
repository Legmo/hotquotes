import { SourceObjectType } from '../types/types';

const SET_SOURCES = 'SET_SOURCES';
const ADD_SOURCE = 'ADD_SOURCE';
const SET_SOURCES_IS_FETCHING = 'SET_SOURCES_IS_FETCHING';
const UPDATE_NEW_SOURCE_TEXT = 'UPDATE_NEW_SOURCE_TEXT';

const initialState = {
  sources:    [] as Array<SourceObjectType>,
  newSource:  {} as SourceObjectType,
  isFetching: false as boolean,
};

export type InitialSourcesStateType = typeof initialState;

const sourcesReducer = (state = initialState, action:ActionsTypes):InitialSourcesStateType => {
  switch (action.type) {
    case SET_SOURCES:
      return {
        ...state,
        sources: [
          ...action.sourcesArray,
        ],
      };
    case UPDATE_NEW_SOURCE_TEXT:
      return {
        ...state,
        newSource: {
          ...state.newSource,
          title: action.newText,
        },
      };
    case ADD_SOURCE:
      return {
        ...state,
        sources: [
          ...state.sources,
          state.newSource,
        ],
        newSource: {  
          title:       '',
          createdTime: null,
          id:          null,
        },
      };
    case SET_SOURCES_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

type ActionsTypes = 
  SetSourcesActionType | 
  UpdateNewSourceTextActionType |
  AddNewSourceActionType |
  SetSourcesIsFetchingActionType;

//ActionCreator's
type SetSourcesActionType = {
  type: typeof SET_SOURCES,
  sourcesArray: Array<SourceObjectType>,
};
export const setSources = (sourcesArray:Array<SourceObjectType>):SetSourcesActionType => ({
  type:         SET_SOURCES,
  sourcesArray: sourcesArray,
});

type UpdateNewSourceTextActionType = {
  type: typeof UPDATE_NEW_SOURCE_TEXT,
  newText: string,
};
export const updateNewSourceText = (text:string):UpdateNewSourceTextActionType => ({
  type:    UPDATE_NEW_SOURCE_TEXT,
  newText: text,
});

type AddNewSourceActionType = {
  type: typeof ADD_SOURCE,
};
export const addSource = ():AddNewSourceActionType => ({
  type: ADD_SOURCE,
});

type SetSourcesIsFetchingActionType = {
  type: typeof SET_SOURCES_IS_FETCHING,
  isFetching: boolean,
};
export const setSourcesIsFetching = (isFetching:boolean):SetSourcesIsFetchingActionType => ({
  type: SET_SOURCES_IS_FETCHING,
  isFetching
});

export default sourcesReducer;
