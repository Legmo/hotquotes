const ADD_QUOTE               = 'ADD_QUOTE';
const SET_QUOTES              = 'SET_QUOTES';
const UPDATE_NEW_QUOTE_TEXT   = 'UPDATE_NEW_QUOTE_TEXT';
const UPDATE_NEW_SOURCE_TITLE = 'UPDATE_NEW_SOURCE_TITLE';

let initialState = {
  quotes:              [],
  isQuotesLoaded:      false,
  newQuoteCreatedTime: '',
  newAuthorsId:        [],
  newSourceTitleText:  '',
  newQuoteText:        '',
  newQuoteTags:        [],
};

const quotesReducer = (state = initialState, action) => {
  let newElement = {
    // id:          UuidGeneratorClass.generate(),
    // createdTime: new Date().toISOString(),
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
        newQuoteDate:       '',
        newAuthorsId:       '',
        newSourceTitleText: '',
        newQuoteText:       '',
        newQuoteTags:       [],
      };
    case ADD_QUOTE:
      return {
        ...state,
        quotes: [
          ...state.quotes,
          newElement
        ],
        newQuoteDate:       '',
        newAuthorsId:       '',
        newSourceTitleText: '',
        newQuoteText:       '',
        newQuoteTags:       [],
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
export const addQuote  = () => ({
  type: ADD_QUOTE,
});
export const setQuotes = (quotesArray) => ({
  type:        SET_QUOTES,
  quotesArray: quotesArray,
});
export const updateNewQuoteText = (text) => ({
  type:    UPDATE_NEW_QUOTE_TEXT,
  newText: text,
});
export const updateNewSourceTitle = (text) => ({
  type:     UPDATE_NEW_SOURCE_TITLE,
  newTitle: text,
});

export default quotesReducer;