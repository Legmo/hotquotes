/*todo: is it correct to put this logic into reducer?!*/
import { UuidGenerator } from '../utils/uuidGenerator';

const ADD_NEW_QUOTE = 'ADD-NEW-QUOTE';
const UPDATE_NEW_QUOTE_TEXT = 'UPDATE-NEW-QUOTE-TEXT';
const UPDATE_NEW_SOURCE_TITLE_TEXT = 'UPDATE_NEW_SOURCE_TITLE_TEXT';
const ADD_AUTHOR_ID = 'ADD_AUTHOR_ID';
const ADD_TAG_ID = 'ADD_TAG_ID';

const UuidGeneratorClass = new UuidGenerator;

let initialState = {
  quotesBase: [
    {
      quoteId:     '0181e85e-8e40-44eb-b7d0-81f9fc52f59d',
      quoteDate:   '2018-06-23T19:03:23.000Z',
      authorId:    '0181e85f-0d52-4f7d-a26e-4b6bed4c2a51',
      sourceTitle: '',
      quoteText:   'Делай, что должно, и будь что будет.',
      tags:        [
        '0181e85f-5bc3-4095-b36c-192e63e19c4b',
        '0181e85f-f190-41af-a665-6f7718d17972',
        '0181e860-1cfb-49c0-8df5-654b24fc6f48',
        '0181e860-46a1-48af-869b-0a135d69830b'
      ],
    },
    {
      quoteId:     '0181e860-694f-4f75-aa63-6944f541ea8c',
      quoteDate:   '2018-06-23T15:03:23.000Z',
      authorId:    '0181e860-e9e3-4eaa-b5ee-ca9e46033e00',
      sourceTitle: '',
      quoteText:   'Всё, что важно, не бывает срочно. Всё, что срочно - только суета.',
      tags:        [
        '0181e85f-f190-41af-a665-6f7718d17972',
        '0181e861-3cd7-48d1-b8f9-93b1a246d840',
        '0181e861-63c2-4c44-8e8f-0c9979430f4e'
      ],
    },
    {
      quoteId:     '0181e861-8807-482c-9b3c-ec64ab9291ba',
      quoteDate:   '2018-06-23T18:03:23.000Z',
      authorId:    '0181e861-b72e-4994-8ced-0f1b6be25566',
      sourceTitle: '',
      quoteText:   'Помните: будьте свободны в своих мыслях и оставайтесь опасными!',
      tags:        [
        '0181e85f-f190-41af-a665-6f7718d17972',
        '0181e862-0dfc-4db9-be19-4960b0ab2042',
        '0181e860-46a1-48af-869b-0a135d69830b'
      ],
    },
    {
      quoteId:     '0181e87c-21e0-4257-a8a1-6b10b42c1a5b',
      quoteDate:   '2018-06-23T11:03:23.000Z',
      authorId:    '0181e87c-514d-46f8-af06-babc17876276',
      sourceTitle: '',
      quoteText:   'Если ты всегда слушал папу с мамой, школьных учителей, священников и какого-то дядьку в телевизоре, а теперь из-за этого ведешь скучную и несчастную жизнь - то, парень, ты этого заслуживаешь.',
      tags:        [
        '0181e85f-f190-41af-a665-6f7718d17972',
        '0181e862-0dfc-4db9-be19-4960b0ab2042',
        '0181e860-46a1-48af-869b-0a135d69830b'
      ],
    },
    {
      quoteId:     '0181e87d-743c-41ad-835a-193870c79112',
      quoteDate:   '2018-06-23T11:03:23.000Z',
      authorId:    '0181e87d-a40c-4fc8-b1e1-79790914f08d',
      sourceTitle: 'Дюна',
      quoteText:
        'Я не должен бояться.\n' +
        'Страх — убийца разума.\n' +
        'Страх — это маленькая смерть, влекущая за собой полное уничтожение.\n' +
        'Я встречусь лицом к лицу со своим страхом.\n' +
        'Я позволю ему пройти через меня и сквозь меня.\n' +
        'И, когда он уйдет, я обращу свой внутренний взор на его путь.\n' +
        'Там, где был страх, не будет ничего.\n' +
        'Останусь лишь я.',
      tags: [
        '0181e85f-f190-41af-a665-6f7718d17972',
        '0181e87d-fe3a-4e02-86d2-9d3453dc7d9d',
        '0181e860-46a1-48af-869b-0a135d69830b'
      ],
    },
  ],
  newQuoteDate:       '',
  newAuthorId:        '',
  newSourceTitleText: '',
  newQuoteText:       '',
  newQuoteTags:       [],
};

const quotesReducer = (state = initialState, action) => {
  let newElement = {
    quoteId:     UuidGeneratorClass.generate(),
    quoteDate:   new Date().toISOString(), //todo: проверить, совпадают ли форматы создаваемых дат и уже существующих в базе
    authorId:    state.newAuthorId,
    sourceTitle: state.newSourceTitleText,
    quoteText:   state.newQuoteText,
    tags:        state.newQuoteTags,
  };

  switch (action.type) {
    //todo - вызывать здесь изменение newElement.authorId
    //todo - вызывать здесь изменение newElement.tags
    case ADD_NEW_QUOTE:
      return {
        ...state,
        quotesBase: [
          ...state.quotesBase,
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
    case UPDATE_NEW_SOURCE_TITLE_TEXT:
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
export const addQuoteCreator = () => ({
  type: ADD_NEW_QUOTE,
});

export const updateNewQuoteTextCreator = (text) => ({
  type:    UPDATE_NEW_QUOTE_TEXT,
  newText: text,
});

export const updateNewTitleTextCreator = (text) => ({
  type:     UPDATE_NEW_SOURCE_TITLE_TEXT,
  newTitle: text,
});

export const addAuthorCreator = (text) => ({
  type:        ADD_AUTHOR_ID,
  newAuthorId: text,
});

export const addTagCreator = (text) => ({
  type:     ADD_TAG_ID,
  newTagId: text,
});

export default quotesReducer;
