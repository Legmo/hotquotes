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
    case 'APP_IS_INITIALIZED':
      return {
        ...state,
        isInitialized: action.isInitialized,
      };
    case 'APP_IS_UPDATING':
      return {
        ...state,
        isUpdating: action.isUpdating,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsApp>;

//ActionCreator's
/* See more: https://youtu.be/2yJXFMqEbJs */
export const actionsApp = {
  appInitialized: (isInitialized:boolean) => ({
    type:          'APP_IS_INITIALIZED',
    isInitialized: isInitialized
  } as const),
  appIsUpdating: (isUpdating:boolean) => ({
    type:       'APP_IS_UPDATING',
    isUpdating: isUpdating
  } as const)
};

//Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getAllTC = ():ThunkType => async(dispatch) => {
  dispatch(actionsApp.appIsUpdating(true));
  Promise.all([
    dispatch(actionsQuotes.quotesUpdating(true)),
    dispatch(getQuoteTC()),
    dispatch(actionsSources.sourcesIsUpdating(true)),
    dispatch(getSourcesTC()),
    dispatch(actionsTags.tagsIsUpdating(true)),
    dispatch(getTagsTC()),
    dispatch(actionsAuthors.authorsIsUpdating(true)),
    dispatch(getAuthorsTC()),
  ]).then(() => {
    dispatch(actionsApp.appInitialized(true));
    dispatch(actionsApp.appIsUpdating(false));
  });
};

export const getAllWitQuoteIdTC = (quoteId:string):ThunkType => async(dispatch) => {
  dispatch(actionsApp.appIsUpdating(true));
  Promise.all([
    dispatch(actionsQuotes.quotesUpdating(true)),
    dispatch(getQuoteByIdTC(quoteId)),
    dispatch(actionsSources.sourcesIsUpdating(true)),
    dispatch(getSourcesTC()),
    dispatch(actionsTags.tagsIsUpdating(true)),
    dispatch(getTagsTC()),
    dispatch(actionsAuthors.authorsIsUpdating(true)),
    dispatch(getAuthorsTC()),
  ]).then(() => {
    dispatch(actionsApp.appInitialized(true));
    dispatch(actionsApp.appIsUpdating(false));
  });
};

export default appReducer;

