const ADD_QUOTE = 'ADD-QUOTE';
const UPDATE_NEW_QUOTE_TEXT = 'UPDATE-NEW-QUOTE-TEXT';
const UPDATE_NEW_AUTHOR_TEXT = 'UPDATE-NEW-AUTHOR-TEXT';
const UPDATE_NEW_TITLE_TEXT = 'UPDATE-NEW-TITLE-TEXT';
const UPDATE_NEW_TAG_TEXT = 'UPDATE-NEW-TAG-TEXT';

let initialState = {
  quotes_base: [
    {
      id:     '0',
      date:   '2018-06-23T19:03:23.000Z',
      author: [
        {
          name: 'Марк Аврелий',
          id:   1,
        },
      ],
      title:    '',
      text:     'Делай, что должно, и будь что будет.',
      category: [
        {
          name: 'девиз',
          id:   2,
        },
        {
          name: 'дух',
          id:   3,
        },
        {
          name: 'латынь',
          id:   4,
        },
        {
          name: 'нонконформизм',
          id:   7,
        },
      ],
    },
    {
      id:     '1',
      date:   '2018-06-23T15:03:23.000Z',
      author: [
        {
          name: 'Хань Сян-Цзы',
          id:   2,
        },
      ],
      title:    '',
      text:     'Всё, что важно, не бывает срочно. Всё, что срочно - только суета.',
      category: [
        {
          name: 'дух',
          id:   3,
        },
        {
          name: 'Китай',
          id:   1,
        },
        {
          name: 'психология',
          id:   8,
        },
      ],
    },
    {
      id:     '2',
      date:   '2018-06-23T18:03:23.000Z',
      author: [
        {
          name: 'Шаво Одаджян',
          id:   3,
        },
      ],
      title:    '',
      text:     'Помните: будьте свободны в своих мыслях и оставайтесь опасными!',
      category: [
        {
          name: 'дух',
          id:   3,
        },
        {
          name: 'музыка',
          id:   6,
        },
        {
          name: 'нонконформизм',
          id:   7,
        },
      ],
    },
    {
      id:     '3',
      date:   '2018-06-23T11:03:23.000Z',
      author: [
        {
          name: 'Фрэнк Заппа',
          id:   4,
        },
      ],
      title:    '',
      text:     'Если ты всегда слушал папу с мамой, школьных учителей, священников и какого-то дядьку в телевизоре, а теперь из-за этого ведешь скучную и несчастную жизнь - то, парень, ты этого заслуживаешь.',
      category: [
        {
          name: 'дух',
          id:   3,
        },
        {
          name: 'музыка',
          id:   6,
        },
        {
          name: 'нонконформизм',
          id:   7,
        },
      ],
    },
    {
      id:     '4',
      date:   '2018-06-23T11:03:23.000Z',
      author: [
        {
          name: 'Фрэнк Хэрберт',
          id:   5,
        },
      ],
      title: 'Дюна',
      text:
        'Я не должен бояться.\n' +
        'Страх — убийца разума.\n' +
        'Страх — это маленькая смерть, влекущая за собой полное уничтожение.\n' +
        'Я встречусь лицом к лицу со своим страхом.\n' +
        'Я позволю ему пройти через меня и сквозь меня.\n' +
        'И, когда он уйдет, я обращу свой внутренний взор на его путь.\n' +
        'Там, где был страх, не будет ничего.\n' +
        'Останусь лишь я.',
      category: [
        {
          name: 'дух',
          id:   3,
        },
        {
          name: 'литература',
          id:   5,
        },
        {
          name: 'нонконформизм',
          id:   7,
        },
      ],
    },
  ],
  newQuoteText:  '',
  newAuthorText: '',
  newTitleText:  '',
  newTagText:    '',
};

const quotesReducer = (state = initialState, action) => {
  let stateCopy = {...state}; //todo: глубокое копирование. Lodash?
  stateCopy.quotes_base = [...state.quotes_base]; //todo: Надо ли копировать массив? А вложенные объекты? Глубокое копирование? Lodash?
  stateCopy.newQuoteText = {...state.newQuoteText};
  stateCopy.newAuthorText = {...state.newAuthorText};
  stateCopy.newTitleText = {...state.newTitleText};
  stateCopy.newTagText = {...state.newTagText};
  let newElement = {
    id:     '5', //todo: генерировать id
    date:   '2019-03-23T15:03:23.000Z', //todo: генерировать дату
    author: [
      {
        name: stateCopy.newAuthorText,
        id:   99999, //todo: генерировать id
      },
    ],
    title:    stateCopy.newTitleText,
    text:     stateCopy.newQuoteText,
    category: [
      {
        name: stateCopy.newTagText,
        id:   99999, //todo: генерировать id
      },
    ],
  };
  switch (action.type) {
    case ADD_QUOTE:
      stateCopy.quotes_base.push(newElement);
      stateCopy.newQuoteText = '';
      stateCopy.newAuthorText = '';
      stateCopy.newTitleText = '';
      stateCopy.newTagText = '';
      console.log(newElement);
      return stateCopy;
    case UPDATE_NEW_QUOTE_TEXT:
      stateCopy.newQuoteText = action.newText;
      return stateCopy;
    case UPDATE_NEW_AUTHOR_TEXT:
      stateCopy.newAuthorText = action.newAuthor;
      return stateCopy;
    case UPDATE_NEW_TITLE_TEXT:
      stateCopy.newTitleText = action.newTitle;
      return stateCopy;
    case UPDATE_NEW_TAG_TEXT:
      stateCopy.newTagText = action.newTag;
      return stateCopy;
    default:
      return stateCopy;
  }
};

//ActionCreator's
export const addQuoteCreator = () => ({
  type: ADD_QUOTE,
});

export const updateNewQuoteTextCreator = (text) => ({
  type:    UPDATE_NEW_QUOTE_TEXT,
  newText: text,
});

export const updateNewAuthorTextCreator = (text) => ({
  type:      UPDATE_NEW_AUTHOR_TEXT,
  newAuthor: text,
});

export const updateNewTitleTextCreator = (text) => ({
  type:     UPDATE_NEW_TITLE_TEXT,
  newTitle: text,
});

export const updateNewTagTextCreator = (text) => ({
  type:   UPDATE_NEW_TAG_TEXT,
  newTag: text,
});

export default quotesReducer;
