const ADD_QUOTE               = 'ADD_QUOTE';
const SET_QUOTES              = 'SET_QUOTES';
const SET_QUOTES_IS_FETCHING         = 'SET_QUOTES_IS_FETCHING';
const UPDATE_NEW_QUOTE_TEXT   = 'UPDATE_NEW_QUOTE_TEXT';
const UPDATE_NEW_SOURCE_TITLE = 'UPDATE_NEW_SOURCE_TITLE';

type QuotesObjectType = {
  createdTime: string | null,
  id: string | null,
  quoteText: string | null,
}

const initialState = {
  quotes:              [] as Array<QuotesObjectType>,
  newQuoteCreatedTime: '' as string | null,
  newAuthorsId:        [] as Array<string>,
  newSourceTitleText:  '' as string | null,
  newQuoteText:        '' as string | null,
  newQuoteTags:        [],
  isQuotesLoaded:      false as boolean,
  isFetching:          false as boolean,
};

export type InitialStateType = typeof initialState;

const quotesReducer = (state = initialState, action:any):InitialStateType => {
  const newElement = {
    createdTime: null, //new Date().toISOString(),
    id:          null, //UuidGeneratorClass.generate(),
    authorsId:   state.newAuthorsId,
    sourceTitle: state.newSourceTitleText,
    quoteText:   state.newQuoteText,
    tags:        state.newQuoteTags,
  };

  switch (action.type) {
    case SET_QUOTES:
      return {
        ...state,
        quotes: [
          ...state.quotes,
          ...action.quotesArray
        ],
        isQuotesLoaded: true,

      };
    case ADD_QUOTE:
      return {
        ...state,
        quotes: [
          ...state.quotes,
          newElement
        ],
        newQuoteCreatedTime: null,
        newAuthorsId:        [],
        newSourceTitleText:  '',
        newQuoteText:        '',
        newQuoteTags:        [],
      };
    case SET_QUOTES_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UPDATE_NEW_QUOTE_TEXT:
      newElement.quoteText = action.newText;
      return {
        ...state,
        newQuoteText: action.newText
      };
    case UPDATE_NEW_SOURCE_TITLE:
      newElement.sourceTitle = action.newTitle;
      return {
        ...state,
        newSourceTitleText: action.newTitle
      };
    default:
      return state;
  }
};

//ActionCreator's

type AddQuoteActionType = {
  type: typeof ADD_QUOTE,
};
export const addQuote  = ():AddQuoteActionType => ({
  type: ADD_QUOTE,
});

type SetQuotesActionType = {
  type: typeof SET_QUOTES,
  quotesArray: Array<QuotesObjectType>,
};
export const setQuotes = (quotesArray:Array<QuotesObjectType>):SetQuotesActionType => ({
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

type UpdateNewSourceTitleActionType = {
  type: typeof UPDATE_NEW_SOURCE_TITLE,
  newTitle: string,
};
export const updateNewSourceTitle = (text:string):UpdateNewSourceTitleActionType => ({
  type:     UPDATE_NEW_SOURCE_TITLE,
  newTitle: text,
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