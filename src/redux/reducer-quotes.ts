import { QuoteObjectType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { quotesAPI } from '../api/api';

const initialState = {
  isQuotesLoaded: false as boolean,
  isFetching:     false as boolean,
  quotes:         [] as Array<QuoteObjectType>,
  newQuote:       {
    createdTime: null as string | null,
    id:          '' as string,
    quoteText:   '' as string,
  } as QuoteObjectType,
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
    case 'ADD_QUOTE':
      return {
        ...state,
        quotes: [
          ...state.quotes,
          state.newQuote
        ],
        newQuote: {
          createdTime: null,
          id:          '',
          quoteText:   '',
        }
      };
    case 'UPDATE_NEW_QUOTE_TEXT':
      return {
        ...state,
        newQuote: {
          createdTime: state.newQuote.createdTime,
          id:          state.newQuote.id,
          quoteText:   action.newText
        },
      };
    case 'SET_QUOTES_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
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
  updateNewQuoteText: (text:string) => ({
    type:    'UPDATE_NEW_QUOTE_TEXT',
    newText: text,
  } as const),
  addQuote: () => ({
    type: 'ADD_QUOTE',
  } as const),
  setQuotesIsFetching: (isFetching:boolean) => ({
    type: 'SET_QUOTES_IS_FETCHING',
    isFetching
  } as const),
};

//Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getTableQuoteTC = ():ThunkType => async(dispatch) => {
  //todo: выдавать сообщение, если цитата с данным ID не найдена
  quotesAPI.getAll().then((response) => {
    dispatch(actionsQuotes.setQuotes(response));
    dispatch(actionsQuotes.setQuotesIsFetching(false));
  });
};

export const getTableQuoteByIdTC = (quoteId:string):ThunkType => async(dispatch) => {
  quotesAPI.getById(quoteId).then((response) => {
      dispatch(actionsQuotes.setQuotes(response));
      dispatch(actionsQuotes.setQuotesIsFetching(false));
    });
};

export default quotesReducer;