import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const FormAddQuote = (props) => {
  let addNewQuote = () => {
    props.addQuote();
  };
  let onQuoteChanged = (event) => {
    let text = event.target.value;
    props.updateNewQuoteText(text);
  };
  let newAuthorNameChanged = (event) => {
    let text = event.target.value;
    props.updateNewAuthorName(text);
  };
  let newAuthorSurnameChanged = (event) => {
    let text = event.target.value;
    props.updateNewAuthorSurname(text);
  };
  let onTitleChanged = (event) => {
    let text = event.target.value;
    props.updateNewTitleText(text);
  };
  let onNewTagChanged = (event) => {
    let text = event.target.value;
    props.updateNewTagText(text);
  };

  return (
    <div className = {style.formWrapper}>
      <textarea
        value = {props.newQuoteText}
        onChange = {onQuoteChanged}
        placeholder = 'Цитата'
        className = {style.input + ' ' + style.inputText}
        rows = '10'
      />
      {/*todo: добавить возможность добавлять несколько авторов. Поля «Имя» и «Фамилия» в одну строку, справа кнопка «+» - добавляет ещё один ряд таких же полей...*/}
      <input
        value = {props.NewAuthorName}
        onChange = {newAuthorNameChanged}
        placeholder = 'Имя автора'
        className = {style.input + ' ' + style.inputAuthor}
        rows = '1'
      />
      <input
        value = {props.NewAuthorSurname}
        onChange = {newAuthorSurnameChanged}
        placeholder = 'Фамилия автора'
        className = {style.input + ' ' + style.inputAuthor}
        rows = '1'
      />
      <input
        value = {props.newTitleText}
        onChange = {onTitleChanged}
        placeholder = 'Источник (название произведение)'
        className = {style.input + ' ' + style.inputTitle}
        rows = '1'
      />
      {/*todo: объединить виджеты новые тги и существующие тэги. Поле множественное ввода с автодополнением*/}
      <textarea
        value = {props.newTagText}
        onChange = {onNewTagChanged}
        placeholder = 'Новые категории (через запятую)'
        className = {
          style.input + ' ' + style.inputNewTag + ' d-block mb-3 col-12 p-1'
        }
        rows = '1'
      />
      {/*todo: прокинуть сюда список тжгов*/}
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

      <button className = {style.buttonSubmit}onClick = {addNewQuote}>Добавить цитату</button>
    </div>
  );
};

FormAddQuote.propTypes = {
  addQuote:               PropTypes.func,
  updateNewQuoteText:     PropTypes.func,
  updateNewAuthorName:    PropTypes.func,
  updateNewAuthorSurname: PropTypes.func,
  updateNewTitleText:     PropTypes.func,
  updateNewTagText:       PropTypes.func,
  newQuoteText:           PropTypes.string,
  NewAuthorName:          PropTypes.string,
  NewAuthorSurname:       PropTypes.string,
  newTitleText:           PropTypes.string,
  newTagText:             PropTypes.array,
};

export default FormAddQuote;
