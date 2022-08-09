import React, { FC } from 'react';
import style from './style.module.scss';
import {
  AuthorObjectType,
  QuoteObjectType,
  SourceObjectType,
  TagObjectType
} from '../../../types/types';

type PropsType = {
  newTag: TagObjectType,
  newQuote: QuoteObjectType,
  newAuthor: AuthorObjectType,
  newSource: SourceObjectType,
  addTag: () => void,
  addQuote: () => void,
  addAuthor: () => void,
  addSource: () => void,
  updateNewQuoteText: (newText: string) => void,
  updateNewAuthorName: (newText: string) => void,
  updateNewAuthorSurname: (newText: string) => void,
  updateNewSourceText: (newText: string) => void,
  updateNewTagText: (newText: string) => void,
};

const FormAddQuote:FC<PropsType> = (props) => {

  const onQuoteChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewQuoteText(e.target.value);
  };
  const newAuthorNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.updateNewAuthorName(e.target.value);
  };
  const newAuthorSurnameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.updateNewAuthorSurname(e.target.value);
  };
  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.updateNewSourceText(e.target.value);
  };
  const onNewTagChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewTagText(e.target.value);
  };

  return (
    <div className = {style.formWrapper}>
      <textarea
        value = {props.newQuote.quoteText}
        onChange = {(e) => onQuoteChanged(e)}
        placeholder = 'Цитата'
        className = {style.input + ' ' + style.inputText}
        rows = {10}
      />
      {/*todo: добавить возможность добавлять несколько авторов. Поля «Имя» и «Фамилия» в одну строку, справа кнопка «+» - добавляет ещё один ряд таких же полей...*/}
      <input
        value = {props.newAuthor.name}
        onChange = {newAuthorNameChanged}
        placeholder = 'Имя автора'
        className = {style.input + ' ' + style.inputAuthor}
      />
      <input
        value = {props.newAuthor.surname}
        onChange = {newAuthorSurnameChanged}
        placeholder = 'Фамилия автора'
        className = {style.input + ' ' + style.inputAuthor}
      />
      <input
        value = {props.newSource.title}
        onChange = {onTitleChanged}
        placeholder = 'Источник (название произведение)'
        className = {style.input + ' ' + style.inputTitle}
      />
      {/*todo: объединить виджеты новые тги и существующие тэги. Поле множественное ввода с автодополнением*/}
      <textarea
        value = {props.newTag.title}
        onChange = {onNewTagChanged}
        placeholder = 'Новые категории (через запятую)'
        className = {
          style.input + ' ' + style.inputNewTag + ' d-block mb-3 col-12 p-1'
        }
        rows = {1}
      />
      {/*todo: прокинуть сюда список тегов*/}
      <select
        multiple
        className = {style.input + ' ' + style.select + ' ' + style.inputTags}
        // ref={}
        // value={state.}
        // onChange={}

        //size="1"
      >
        <option disabled>Категории</option>
        <option value = '1'>1</option>
        <option value = '2'>2</option>
      </select>
      {/*todo: Данные ниже придут с сервера. Показывать после успешного добавления?*/}
      {/*<p><span className={style.paragraphLabel}>ID цитаты:</span> 999 (должен ставиться автоматически)</p>*/}
      {/*<p><span className={style.paragraphLabel}>ID автора:</span> 999 (должен ставиться автоматически)</p>*/}
      {/*<p>Дата и время (должен ставиться автоматически)</p>*/}

      <button className = {style.buttonSubmit} onClick = {() => props.addQuote()}>Добавить цитату</button>
    </div>
  );
};

export default FormAddQuote;
