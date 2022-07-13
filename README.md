# <span style="color:#fe0036">Hot</span> <span style="color:#0079fe">Quotes</span>
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg "License: GPL v3")](https://www.gnu.org/licenses/gpl-3.0)

Single page application based on React JS & Redux.<br> 
Displays randomly quotes from a pre-prepared storage. Each quote can be assigned the following data: author, source, tag (or several tags).<br>
[Airtable](https://airtable.com/) database is currently used as storage, special server is planned in the future.<br>
<br>
It is planned in the future to allow users to add their own quotes (public or for private use), create personal quotes collections, share quotes etc. More detailed plans for the development of the project can be found in our [Wiki](https://github.com/Legmo/hotquotes/wiki).
<br>
<br>

## Table of content
* [Technology stack](#technology-stack)
* [Screenshot](#screenshot)
* [Getting Started](#getting-started)
* [Contributing](#contributing)
* [Contact with developers](#contact-with-developers)
* [Russian section / По-русски](#по-русски)
<br>

## Technology stack
<!-- https://github.com/devicons/devicon/tree/master/icons -->
- <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" title="Node.js" alt="Node.js" width="20" height="20"/>&nbsp;[Node.js](https://nodejs.org/en)
- <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React JS" alt="React JS" width="20" height="20"/>&nbsp;[React JS](https://reactjs.org)
- <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="20" height="20"/>&nbsp;[Redux](https://redux.js.org)
- <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="20" height="20"/>&nbsp;[React Redux](https://react-redux.js.org/)
- <img src="https://create-react-app.dev/img/logo.svg" title="Create React App" alt="Create React App" width="24" height="24"/>&nbsp;[Create React App](https://www.npmjs.com/package/create-react-app)
- <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title="React Router" alt="React Router" width="20" height="20"/>&nbsp;[React Router](https://github.com/remix-run/react-router#readme)
- <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="WebPack" alt="WebPack" width="20" height="20"/>&nbsp;[WebPack](https://webpack.js.org/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="WebPack Dev Server" alt="WebPack Dev Server" width="20" height="20"/>&nbsp;[Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- <img src="http://legmo.ru/GitHub/axios_font_icon.svg" title="Axios" alt="Axios" width="20" height="10">&nbsp;[Axios](https://axios-http.com)
- <img src="http://legmo.ru/GitHub/airtable_font_icon.svg" title="Airtable" alt="Airtable" width="20" height="20">&nbsp;[Airtable](https://airtable.com)
- <img src="https://lodash.com/assets/img/lodash.svg" title="Lodash" alt="Lodash" width="20" height="20">&nbsp;[Lodash](https://lodash.com)
- <img src="http://legmo.ru/GitHub/awesome_font_icon.svg" title="Font Awesome" alt="Font Awesome" width="20" height="20"/>&nbsp;[Font Awesome](https://fontawesome.com/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original.svg" title="ES Lint" alt="ES Lint" width="20" height="20"/>&nbsp;[ES Lint](https://eslint.org/)
- 🐶&nbsp;[Husky](https://github.com/typicode/husky)
- <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title="Lint-staged" alt="Lint-staged" width="20" height="20">&nbsp;[Lint-staged](https://github.com/okonet/lint-staged) 
- <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-plain.svg" title="JavaScript" alt="JavaScript" width="20" height="20"/>&nbsp;[JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- <img src="https://github.com/Protectator/jsx-tsx-logos/blob/master/jsx-logo.svg" title="JSX" alt="JSX" width="20" height="20"/>&nbsp;[JSX](https://facebook.github.io/jsx/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="20" height="20"/>&nbsp;[TypeScript](https://www.typescriptlang.org/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML" alt="HTML" width="20" height="20"/>&nbsp;[HTML](https://www.w3.org/html/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" title="CSS" alt="CSS" width="20" height="20"/>&nbsp;[CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="SASS" alt="SASS" width="20" height="20"/>&nbsp;[SASS](https://sass-lang.com/)
<!-- 
- <img src="https://github.com/gilbarbara/logos/blob/master/logos/prettier.svg" title="Prettier-miscellaneous" alt="Prettier-miscellaneous" width="20" height="20" />&nbsp;[Prettier-miscellaneous](https://github.com/arijs/prettier-miscellaneous)
-->
<!--
- <img src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" alt="Bootstrap" width="20" height="20"/>&nbsp;[Bootstrap](https://getbootstrap.com/)
-->
<br>

## Screenshot
<img src="http://legmo.ru/GitHub/Screenshot.jpg" title="Web page screenshot" alt="Web page screenshot" />
<br>

## Getting Started
You will need [Node.js](https://nodejs.org/en) to work with this project.
<br>

**Start application**<br>
Download the project and run the following console commands in the local project folder:
- `npm i` — download & install Node.js modules.
- `npm start` — runs the app in development mode. Hot reload in browser (port:3000) included. Use «src» folder for making your edits.
- `npm run build` — builds the app for production to the build folder «public».
<br>
- 
**Create Database**<br>
Now I use the free zero-code service [Airtable](https://airtable.com/) to work with the database. You can choose the solution you like. <br>
The database is named 'HotQuotes' and consists of 3 tables:
  ```javascript
    quotesBase: [
      {
        id:          '0181e85e-8e40-44eb-b7d0-81f9fc52f59d',
        date:        '2018-06-23T19:03:23.000Z',
        authorId:    '0181e85f-0d52-4f7d-a26e-4b6bed4c2a51',
        sourceTitle: 'Source title here',
        quoteText:   'Do what you must and come what may.',
        tags:        [
          '0181e85f-5bc3-4095-b36c-192e63e19c4b',
          '0181e85f-f190-41af-a665-6f7718d17972',
        ],
      },
      {...}
    ]
  ```
  ```javascript
    authorsBase: [
      {
        id:      '0181e85f-0d52-4f7d-a26e-4b6bed4c2a51',
        name:    'Mark',
        surname: 'Aurelius',
      },
      {...}
    ]
  ```
  ```javascript
    tagsBase: [
      {
        id:   '0181e860-1cfb-49c0-8df5-654b24fc6f48',
        name: 'latin',
      },
      {...}
    ]
  ```
&nbsp;
<br>
**Enter API key**<br>
enter your API key для доступа к базе данных into 'apiKey' variable. If you use [Airtable](https://airtable.com/), then you need to register and go to the [Account](https://airtable.com/account) page. The API key will be located in the API section.
<br>

<!--## Demo site
You can test working version of our site here [quotes.legmo.ru](http://quotes.legmo.ru/).
<br>
-->

<!-- 
## Developers
- [Name](link to GitHub profile)
- [Name](link to GitHub profile)
<br>
-->

## Contributing
If you have a desire to join the development — we will be happy to accept you into our team!<br>
Details can be found in the [Contributing section](https://github.com/Legmo/hotquotes/blob/master/CONTRIBUTING.md).<br>
You can also ask the necessary questions in the [Discussions section](https://github.com/Legmo/hotquotes/discussions) or send a private message to the [developers](#contact-with-developers).
<br>
<br>

## Contact with developers
<div id="badges">
<a href='https://t.me/degtiarev' target='_blank' title="Telegram">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white">
</a>
<a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6d%61%69%6c%40%6c%65%67%6d%6f%2e%72%75' target='_blank' title="Gmail">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>
<a href='https://www.linkedin.com/in/futuroid/' target='_blank' title="LinkedIn">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>
</div>
<br>
<br>

***
<br>

## По-русски

Одностраничное веб-приложение на основе React JS & Redux.<br> 
Отображает случайную цитату из заранее подготовленного файла-хранилища. Каждая цитата может сопровождаться следующими данными: автор, источник, один или несколько тэгов.<br>
В качестве хранилища цитат используется база данных [Airtable](https://airtable.com/). В будущем планируется использование полноценного бэкенд-сервера.<br>
<br>
Также планируются: разрешение пользователям на добавление собственных цитат (публичных или только для личного просмотра), создание персональных подборок цитат, возможность делиться цитатами и многое другое. Более подробные планы развития проекта можно найти в разделе [Wiki](https://github.com/Legmo/hotquotes/wiki).
<br>
<br>

## Содержание
* [Технологии](#технологии)
* [Скриншот](#скриншот)
* [С чего начать?](#с-чего-начать)
* [Хочу помочь в разработке](#хочу-помочь-в-разработке)
* [Контакты разработчиков](#контакты-разработчиков)
<br>

## Технологии
<!-- https://github.com/devicons/devicon/tree/master/icons -->
- <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" title="Node.js" alt="Node.js" width="20" height="20"/>&nbsp;[Node.js](https://nodejs.org/en)
- <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React JS" alt="React JS" width="20" height="20"/>&nbsp;[React JS](https://reactjs.org)
- <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="20" height="20"/>&nbsp;[Redux](https://redux.js.org)
- <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="20" height="20"/>&nbsp;[React Redux](https://react-redux.js.org/)
- <img src="https://create-react-app.dev/img/logo.svg" title="Create React App" alt="Create React App" width="24" height="24"/>&nbsp;[Create React App](https://www.npmjs.com/package/create-react-app)
- <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title="React Router" alt="React Router" width="20" height="20"/>&nbsp;[React Router](https://github.com/remix-run/react-router#readme)
- <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="WebPack" alt="WebPack" width="20" height="20"/>&nbsp;[WebPack](https://webpack.js.org/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="WebPack Dev Server" alt="WebPack Dev Server" width="20" height="20"/>&nbsp;[Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- <img src="http://legmo.ru/GitHub/axios_font_icon.svg" title="Axios" alt="Axios" width="20" height="20">&nbsp;[Axios](https://axios-http.com)
- <img src="http://legmo.ru/GitHub/airtable_font_icon.svg" title="Airtable" alt="Airtable" width="20" height="20">&nbsp;[Airtable](https://airtable.com)
- <img src="https://lodash.com/assets/img/lodash.svg" title="Lodash" alt="Lodash" width="20" height="20">&nbsp;[Lodash](https://lodash.com)
- <img src="http://legmo.ru/GitHub/awesome_font_icon.svg" title="Font Awesome" alt="Font Awesome" width="20" height="20"/>&nbsp;[Font Awesome](https://fontawesome.com/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original.svg" title="ES Lint" alt="ES Lint" width="20" height="20"/>&nbsp;[ES Lint](https://eslint.org/)
- 🐶&nbsp;[Husky](https://github.com/typicode/husky)
- <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title="Lint-staged" alt="Lint-staged" width="20" height="20">&nbsp;[Lint-staged](https://github.com/okonet/lint-staged)
- <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-plain.svg" title="JavaScript" alt="JavaScript" width="20" height="20"/>&nbsp;[JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- <img src="https://github.com/Protectator/jsx-tsx-logos/blob/master/jsx-logo.svg" title="JSX" alt="JSX" width="20" height="20"/>&nbsp;[JSX](https://facebook.github.io/jsx/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="20" height="20"/>&nbsp;[TypeScript](https://www.typescriptlang.org/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML" alt="HTML" width="20" height="20"/>&nbsp;[HTML](https://www.w3.org/html/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" title="CSS" alt="CSS" width="20" height="20"/>&nbsp;[CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="SASS" alt="SASS" width="20" height="20"/>&nbsp;[SASS](https://sass-lang.com/)
<!-- 
- <img src="https://github.com/gilbarbara/logos/blob/master/logos/prettier.svg" title="Prettier-miscellaneous" alt="Prettier-miscellaneous" width="20" height="20" />&nbsp;[Prettier-miscellaneous](https://github.com/arijs/prettier-miscellaneous)
-->
<!--
- <img src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" alt="Bootstrap" width="20" height="20"/>&nbsp;[Bootstrap](https://getbootstrap.com/)
-->
<br>

## Скриншот
<img src="http://legmo.ru/GitHub/Screenshot.jpg" title="Скриншот страницы" alt="Скриншот страницы" />
<br>

## С чего начать?
Вам потребуется [Node.js](https://nodejs.org/en) для работы с этим проектом.<br>

**Запуск**<br>
Скачайте репозиторий и выполните следующие консольные команды в папке локального проекта:
- `npm i` — скачать и установить модули Node.js.
- `npm start` — запустить приложение в режиме разработки. Поддерживается «горячая перезагрузка» в браузере (port:3000). Используйте папку «src» для ваших правок.
- `npm run build` — собрать приложение в продакшен-режиме. См. папку «public».
<br>

**Создание Базы данных** <br>
Для работы с базой данных я использую бесплатный zero-code сервис [Airtable](https://airtable.com/). Вы можете выбрать решение которое вам нравится. <br>
База данных имеет имя 'HotQuotes' и состоит из 3 таблиц:
  ```javascript
    quotesBase: [
      {
        id:          '0181e85e-8e40-44eb-b7d0-81f9fc52f59d',
        date:        '2018-06-23T19:03:23.000Z',
        authorId:    '0181e85f-0d52-4f7d-a26e-4b6bed4c2a51',
        sourceTitle: 'Название источника будет прописано здесь',
        quoteText:   'Делай что должно и будь что будет.',
        tags:        [
          '0181e85f-5bc3-4095-b36c-192e63e19c4b',
          '0181e85f-f190-41af-a665-6f7718d17972',
        ],
      },
      {...}
    ]
  ```
  ```javascript
    authorsBase: [
      {
        id:      '0181e85f-0d52-4f7d-a26e-4b6bed4c2a51',
        name:    'Марк',
        surname: 'Аврелий',
      },
      {...}
    ]
  ```
  ```javascript
    tagsBase: [
      {
        id:   '0181e860-1cfb-49c0-8df5-654b24fc6f48',
        name: 'латынь',
      },
      {...}
    ]
  ```
&nbsp;
<br>
**Добавление API key**<br>
Пропишите в переменную 'apiKey' ваш API key для доступа к базе данных. Если вы используете [Airtable](https://airtable.com/), то вам надо зарегистрироваться и зайти на страницу [Account](https://airtable.com/account). API key будет расположен в разделе API.
<br>

<!--## Демо-сайт
Работающая версия сайта находится по адресу [quotes.legmo.ru](http://quotes.legmo.ru/).
<br>
-->

<!-- 
## Разработчики
- [Name](link to GitHub profile)
- [Name](link to GitHub profile)
<br>
-->

## Хочу помочь в разработке
Если вы хотите присоединиться к разработке — мы будем рады принять вас в команду!<br>
Подробности можно найти в разделе [Contributing](https://github.com/Legmo/hotquotes/blob/master/CONTRIBUTING.md).<br>
Также вы можете задать вопросы в разделе [Discussions](https://github.com/Legmo/hotquotes/discussions) или отправить личное сообщение [разработчикам](#контакты-разработчиков).
<br>
<br>

## Контакты разработчиков
<div id="badges">
<a href='https://t.me/degtiarev' target='_blank' title="Telegram">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white">
</a>
<a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6d%61%69%6c%40%6c%65%67%6d%6f%2e%72%75' target='_blank' title="Gmail">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>
<a href='https://www.linkedin.com/in/futuroid/' target='_blank' title="LinkedIn">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>
</div>

