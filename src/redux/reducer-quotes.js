/*todo: is it correct to put this logic into reducer?!*/
// import { UuidGenerator } from '../utils/uuidGenerator';
// const UuidGeneratorClass = new UuidGenerator;

import { getTable } from '../DataAccessLayer/axiosRequests';

const ADD_NEW_QUOTE           = 'ADD_NEW_QUOTE';
const SET_QUOTES              = 'SET_QUOTES';
const UPDATE_NEW_QUOTE_TEXT   = 'UPDATE_NEW_QUOTE_TEXT';
const UPDATE_NEW_SOURCE_TITLE = 'UPDATE_NEW_SOURCE_TITLE';
const ADD_AUTHOR_ID           = 'ADD_AUTHOR_ID';
const ADD_TAG_ID              = 'ADD_TAG_ID';

let initialState = {
  quotes: [
    {
      quoteText:   'Тест',
      createdTime: '2018-06-23T19:03:23.000Z',
      id:          '0181e85e-8e40-44eb-b7d0-81f9fc52f59d',
      authorId:    '0181e85f-0d52-4f7d-a26e-4b6bed4c2a51',
      sourceId:    '',
      tagsId:      [
        '0181e85f-5bc3-4095-b36c-192e63e19c4b',
        '0181e85f-f190-41af-a665-6f7718d17972',
        '0181e860-1cfb-49c0-8df5-654b24fc6f48',
        '0181e860-46a1-48af-869b-0a135d69830b'
      ],
    },
  ],
  isQuotesLoaded:      false,
  newQuoteCreatedTime: '',
  newAuthorId:         '',
  newSourceTitleText:  '',
  newQuoteText:        '',
  newQuoteTags:        [],
};

const quotesReducer = (state = initialState, action) => {

  //todo: for testing
  getTable('quotes').then (
    response => {
      initialState.quotes = response;
      initialState.isQuotesLoaded = true;
    }
  );
  let newElement = {
    // id:          UuidGeneratorClass.generate(),
    // createdTime: new Date().toISOString(),
    authorId:    state.newAuthorId,
    sourceTitle: state.newSourceTitleText,
    quoteText:   state.newQuoteText,
    tags:        state.newQuoteTags,
  };

  window.quotes = state; //for show state in browser console

  switch (action.type) {
    //todo - вызывать здесь изменение newElement.authorId
    //todo - вызывать здесь изменение newElement.tags
    case SET_QUOTES:
      return {
        ...state,
        quotes: [
          ...state.quotes,
          ...action.quotesArray
        ],
        newQuoteDate:       '',
        newAuthorId:        '',
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
        newAuthorId:        '',
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
    case ADD_AUTHOR_ID:
      newElement.authorId = action.newAuthorId;
      return {
        ...state,
        newAuthorId: action.newAuthorId
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

export const addAuthorAC = (text) => ({
  type:        ADD_AUTHOR_ID,
  newAuthorId: text,
});

export const addTagAC = (text) => ({
  type:     ADD_TAG_ID,
  newTagId: text,
});


export default quotesReducer;
