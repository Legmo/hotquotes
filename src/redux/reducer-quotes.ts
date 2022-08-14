import { QuoteObjectType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { quotesAPI } from '../api/api';

const initialState = {
  isQuotesLoaded: false as boolean,
  isUpdating:     false as boolean,
  quotes:         [] as Array<QuoteObjectType>,
};

export type InitialQuoteStateType = typeof initialState;

const quotesReducer = (state = initialState, action:ActionsTypes):InitialQuoteStateType => {
  switch (action.type) {
    case 'SET_QUOTES':
      return {
        ...state,
        quotes: [
          ...action.quotesArray,
        ],
        isQuotesLoaded: true,
      };
    case 'QUOTES_IS_UPDATING':
      return {
        ...state,
        isUpdating: action.isUpdating,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsQuotes>

//Action Creator's
export const actionsQuotes = {
  setQuotes: (quotesArray:Array<QuoteObjectType>) => ({
    type:        'SET_QUOTES',
    quotesArray: quotesArray,
  } as const),
  quotesIsUpdating: (isUpdating:boolean) => ({
    type: 'QUOTES_IS_UPDATING',
    isUpdating
  } as const),
};

//Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getQuoteTC = ():ThunkType => async(dispatch) => {
  //todo: выдавать сообщение, если цитата с данным ID не найдена
  return quotesAPI.getAll().then((response) => {
    dispatch(actionsQuotes.setQuotes(response));
    dispatch(actionsQuotes.quotesIsUpdating(false));
  });
};

export const setQuoteTC = (quoteText:string, authorsId:(string)[], tagsId:(string)[], sourcesId:(string)[]):ThunkType => async(dispatch) => {
  quotesAPI.set(quoteText, authorsId, tagsId, sourcesId).then((response) => {
    console.log('REDUCER response', response);
    dispatch(actionsQuotes.quotesIsUpdating(false));
  });
};

export const getQuoteByIdTC = (quoteId:string):ThunkType => async(dispatch) => {
  quotesAPI.getById(quoteId).then((response) => {
      dispatch(actionsQuotes.setQuotes(response));
      dispatch(actionsQuotes.quotesIsUpdating(false));
    });
};

export default quotesReducer;