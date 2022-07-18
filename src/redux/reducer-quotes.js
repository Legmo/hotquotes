// import { getTable } from '../DataAccessLayer/axiosRequests';
/*todo: is it correct to put this logic into reducer?!*/
// import { UuidGenerator } from '../utils/uuidGenerator';
// const UuidGeneratorClass = new UuidGenerator;

const ADD_NEW_QUOTE           = 'ADD_NEW_QUOTE';
const SET_QUOTES              = 'SET_QUOTES';
const UPDATE_NEW_QUOTE_TEXT   = 'UPDATE_NEW_QUOTE_TEXT';
const UPDATE_NEW_SOURCE_TITLE = 'UPDATE_NEW_SOURCE_TITLE';
const ADD_AUTHORS_ID           = 'ADD_AUTHORS_ID';
const ADD_TAG_ID              = 'ADD_TAG_ID';

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

  //todo: for testing
  /*getTable('quotes').then (
    response => {
      initialState.quotes = response;
      initialState.isQuotesLoaded = true;
    }
  );*/
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
    case ADD_NEW_QUOTE:
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
    case ADD_AUTHORS_ID:
      newElement.authorsId = action.newAuthorsId;
      return {
        ...state,
        newAuthorsId: action.newAuthorsId
      };
    case ADD_TAG_ID:
      newElement.tags.push(action.newTagId);
      return {
        ...state,
        newQuoteTags: [
          ...state.newQuoteTags,
          action.newTagId
        ]
      };
    default:
      return state;
  }

};

//ActionCreator's
export const addQuoteAC = () => ({
  type: ADD_NEW_QUOTE,
});

export const setQuotesAC = (quotesArray) => ({
  type:        SET_QUOTES,
  quotesArray: quotesArray,
});

export const updateNewQuoteTextAC = (text) => ({
  type:    UPDATE_NEW_QUOTE_TEXT,
  newText: text,
});

export const updateNewSourceTitleAC = (text) => ({
  type:     UPDATE_NEW_SOURCE_TITLE,
  newTitle: text,
});

export const addAuthorsAC = (text) => ({
  type:         ADD_AUTHORS_ID,
  newAuthorsId: text,
});

export const addTagAC = (text) => ({
  type:     ADD_TAG_ID,
  newTagId: text,
});


export default quotesReducer;
