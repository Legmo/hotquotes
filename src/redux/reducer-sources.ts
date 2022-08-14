import { SourceObjectType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { sourcesAPI } from '../api/api';

const initialState = {
  sources:    [] as Array<SourceObjectType>,
  isUpdating: false as boolean,
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
    case 'SOURCES_IS_UPDATING':
      return {
        ...state,
        isUpdating: action.isUpdating,
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
  sourcesIsUpdating: (isUpdating:boolean) => ({
    type:       'SOURCES_IS_UPDATING',
    isUpdating: isUpdating
  } as const)
};

//Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getSourcesTC = ():ThunkType => async(dispatch) => {
  //todo: выдавать сообщение, если цитата с данным ID не найдена
  sourcesAPI.getAll().then((response) => {
    dispatch(actionsSources.setSources(response));
    dispatch(actionsSources.sourcesIsUpdating(false));
  });
};

export default sourcesReducer;

