import reducerQuotes from './reducer-quotes';
import reducerUsers from './reducer-users';

let store = {
  _state: {
    quotes: {
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
      newTagText:    '',
    },
    users: {},
  },
  _callSubscriber() {
    console.log('State is changed. Method store._callSubscriber is used');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.quotes = reducerQuotes(this._state.quotes, action);
    this._state.users = reducerUsers(this._state.users, action);

    this._callSubscriber(this._state);
  },
};

window.state = store; //for show state in browser console

export default store;
