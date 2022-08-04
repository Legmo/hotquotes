import { QuoteObjectType } from '../types/types';

const ADD_QUOTE               = 'ADD_QUOTE';
const SET_QUOTES              = 'SET_QUOTES';
const SET_QUOTES_IS_FETCHING  = 'SET_QUOTES_IS_FETCHING';
const UPDATE_NEW_QUOTE_TEXT   = 'UPDATE_NEW_QUOTE_TEXT';

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
    case SET_QUOTES:
      return {
        ...state,
        quotes: [
          ...action.quotesArray,
        ],
        isQuotesLoaded: true,
      };
    case ADD_QUOTE:
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
    case UPDATE_NEW_QUOTE_TEXT:
      return {
        ...state,
        newQuote: {
          createdTime: state.newQuote.createdTime,
          id:          state.newQuote.id,
          quoteText:   action.newText
        },
      };
    case SET_QUOTES_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

type ActionsTypes =
  AddQuoteActionType |
  SetQuotesActionType |
  UpdateNewQuoteTextActionType |
  SetQuotesIsFetchingActionType;

//ActionCreator's
type SetQuotesActionType = {
  type: typeof SET_QUOTES,
  quotesArray: Array<QuoteObjectType>,
};
export const setQuotes = (quotesArray:Array<QuoteObjectType>):SetQuotesActionType => ({
  type:        SET_QUOTES,
  quotesArray: quotesArray,
});

type UpdateNewQuoteTextActionType = {
  type: typeof UPDATE_NEW_QUOTE_TEXT,
  newText: string,
};
export const updateNewQuoteText = (text:string):UpdateNewQuoteTextActionType => ({
  type:    UPDATE_NEW_QUOTE_TEXT,
  newText: text,
});

type AddQuoteActionType = {
  type: typeof ADD_QUOTE,
};
export const addQuote  = ():AddQuoteActionType => ({
  type: ADD_QUOTE,
});

type SetQuotesIsFetchingActionType = {
  type: typeof SET_QUOTES_IS_FETCHING,
  isFetching: boolean,
};
export const setQuotesIsFetching = (isFetching:boolean):SetQuotesIsFetchingActionType => ({
  type: SET_QUOTES_IS_FETCHING,
  isFetching
});

export default quotesReducer;