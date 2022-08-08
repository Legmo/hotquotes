import { SourceObjectType } from '../types/types';
import { InferActionsTypes } from './redux-store';

const initialState = {
  sources:    [] as Array<SourceObjectType>,
  newSource:  {} as SourceObjectType,
  isFetching: false as boolean,
};

export type InitialSourcesStateType = typeof initialState;

const sourcesReducer = (state = initialState, action:ActionsTypes):InitialSourcesStateType => {
  switch (action.type) {
    case 'SET_SOURCES':
      return {
        ...state,
        sources: [
          ...action.sourcesArray,
        ],
      };
    case 'UPDATE_NEW_SOURCE_TEXT':
      return {
        ...state,
        newSource: {
          ...state.newSource,
          title: action.newText,
        },
      };
    case 'ADD_SOURCE':
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
    case 'SET_SOURCES_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsSources>;

//ActionCreator's
/* See more: https://youtu.be/2yJXFMqEbJs */
export const actionsSources = {
  setSources: (sourcesArray:Array<SourceObjectType>) => ({
    type:         'SET_SOURCES',
    sourcesArray: sourcesArray,
  } as const),
  updateNewSourceText: (text:string) => ({
    type:    'UPDATE_NEW_SOURCE_TEXT',
    newText: text,
  } as const),
  addSource: () => ({
    type: 'ADD_SOURCE',
  } as const),
  setSourcesIsFetching: (isFetching:boolean) => ({
    type: 'SET_SOURCES_IS_FETCHING',
    isFetching
  } as const),
};

export default sourcesReducer;
