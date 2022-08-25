import { QuoteObjectType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './store';
import { quotesAPI } from '../api/api';

const initialState = {
  isUpdating: false as boolean,
  quotes:     [] as Array<QuoteObjectType>,
};

export type InitialQuoteStateType = typeof initialState;

const quotesReducer = (state = initialState, action:ActionsTypes):InitialQuoteStateType => {
  switch (action.type) {
    case 'quotes/SET_QUOTES':
      return {
        ...state,
        quotes: [
          ...action.quotesArray,
        ],
      };
    case 'quotes/IS_UPDATING':
      return {
        ...state,
        isUpdating: action.isUpdating,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsQuotes>

// Action Creator's
export const actionsQuotes = {
  setQuotes: (quotesArray:Array<QuoteObjectType> | undefined) => ({ // todo: fix undefined
    type:        'quotes/SET_QUOTES',
    quotesArray: quotesArray,
  } as const),
  quotesUpdating: (isUpdating:boolean) => ({
    type: 'quotes/IS_UPDATING',
    isUpdating
  } as const),
};

// Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getQuoteTC = ():ThunkType => async(dispatch) => {
  // todo: выдавать сообщение, если цитата с данным ID не найдена
  const response = await quotesAPI.getAll();
  dispatch(actionsQuotes.setQuotes(response));
  dispatch(actionsQuotes.quotesUpdating(false));
};

export const getQuoteByIdTC = (quoteId:string):ThunkType => async(dispatch) => {
  const response = await quotesAPI.getById(quoteId);
  dispatch(actionsQuotes.setQuotes(response));
  dispatch(actionsQuotes.quotesUpdating(false));
};

export const setQuoteTC = (quoteText:string, authorsId:(string)[], tagsId:(string)[], sourcesId:(string)[]):ThunkType => async(dispatch) => {
  const response = await quotesAPI.set(quoteText, authorsId, tagsId, sourcesId);
  // work in progress
  if (response) {
    dispatch(actionsQuotes.quotesUpdating(false));
  }
  // todo: обработать ошибки
};

export default quotesReducer;