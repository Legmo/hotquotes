import { BaseThunkType, InferActionsTypes } from './store';
import { actionsQuotes, getQuoteByIdTC, getQuoteTC } from './reducer-quotes';
import { actionsAuthors, getAuthorsTC } from './reducer-authors';
import { actionsSources, getSourcesTC } from './reducer-sources';
import { actionsTags, getTagsTC } from './reducer-tags';

const initialState = {
  isInitialized: false as boolean,
  isUpdating:    false as boolean,
};

export type InitialAppStateType = typeof initialState;

const appReducer = (state = initialState, action:ActionsTypes):InitialAppStateType => {
  switch (action.type) {
    case 'app/IS_INITIALIZED':
      return {
        ...state,
        isInitialized: action.isInitialized,
      };
    case 'app/IS_UPDATING':
      return {
        ...state,
        isUpdating: action.isUpdating,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsApp>;

// ActionCreator's
/* See more: https://youtu.be/2yJXFMqEbJs */
export const actionsApp = {
  appInitialized: (isInitialized:boolean) => ({
    type:          'app/IS_INITIALIZED',
    isInitialized: isInitialized
  } as const),
  appIsUpdating: (isUpdating:boolean) => ({
    type:       'app/IS_UPDATING',
    isUpdating: isUpdating
  } as const)
};

// Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getAllTC = ():ThunkType => async(dispatch) => {
  dispatch(actionsApp.appIsUpdating(true));
  const response = await Promise.all([
    dispatch(actionsQuotes.quotesUpdating(true)),
    dispatch(getQuoteTC()),
    dispatch(actionsSources.sourcesIsUpdating(true)),
    dispatch(getSourcesTC()),
    dispatch(actionsTags.tagsIsUpdating(true)),
    dispatch(getTagsTC()),
    dispatch(actionsAuthors.authorsIsUpdating(true)),
    dispatch(getAuthorsTC()),
  ]);
  if(response) {
    dispatch(actionsApp.appInitialized(true));
    dispatch(actionsApp.appIsUpdating(false));
  }
  // todo: обработать ошибки
};

export const getAllWitQuoteIdTC = (quoteId:string):ThunkType => async(dispatch) => {
  dispatch(actionsApp.appIsUpdating(true));
  const response = await Promise.all([
    dispatch(actionsQuotes.quotesUpdating(true)),
    dispatch(getQuoteByIdTC(quoteId)),
    dispatch(actionsSources.sourcesIsUpdating(true)),
    dispatch(getSourcesTC()),
    dispatch(actionsTags.tagsIsUpdating(true)),
    dispatch(getTagsTC()),
    dispatch(actionsAuthors.authorsIsUpdating(true)),
    dispatch(getAuthorsTC()),
  ]);
  if(response) {
    dispatch(actionsApp.appInitialized(true));
    dispatch(actionsApp.appIsUpdating(false));
  }
  // todo: обработать ошибки
};

export default appReducer;

