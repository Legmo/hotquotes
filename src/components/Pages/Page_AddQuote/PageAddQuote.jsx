import React from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';

let Page_AddQuote = (props) => {
  let addNewQuote = () => {
    props.addQuote();
  };
  let onQuoteChanged = (event) => {
    let text = event.target.value;
    props.updateNewQuoteText(text);
  };
  let onAuthorChanged = (event) => {
    let text = event.target.value;
    props.updateNewAuthorText(text);
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
    <div>
      <textarea
        value = {props.newQuoteText}
        onChange = {onQuoteChanged}
        placeholder = 'Цитата'
        className = {style.input + ' ' + style.inputText}
        rows = '10'
      />
      <textarea
        value = {props.newAuthorText}
        onChange = {onAuthorChanged}
        placeholder = 'Автор'
        className = {style.input + ' ' + style.inputAuthor}
        rows = '1'
      />
      <textarea
        value = {props.newTitleText}
        onChange = {onTitleChanged}
        placeholder = 'Источник (название произведение)'
        className = {style.input + ' ' + style.inputTitle}
        rows = '1'
      />
      <textarea
        value = {props.newTagText}
        onChange = {onNewTagChanged}
        placeholder = 'Новые тэги (через запятую)'
        className = {
          style.input + ' ' + style.inputNewTag + ' d-block mb-3 col-12 p-1'
        }
        rows = '1'
      />
      <select
        multiple
        className = {style.input + ' ' + style.select + ' ' + style.inputTags}
        // ref={}
        // value={state.}
        // onChange={}

        //size="1"
      >
        <option disabled>Тэги</option>
        <option value = '1'>1</option>
        <option value = '2'>2</option>
      </select>
      <p>ID цитаты: 999 (должен ставиться автоматически)</p>
      <p>ID автора: 999 (должен ставиться автоматически)</p>
      <p>Дата и время (должен ставиться автоматически)</p>

      <button onClick = {addNewQuote}>Добавить цитату</button>
    </div>
  );
};

Page_AddQuote.propTypes = {
  addQuote:            PropTypes.func,
  updateNewQuoteText:  PropTypes.func,
  updateNewAuthorText: PropTypes.func,
  updateNewTitleText:  PropTypes.func,
  updateNewTagText:    PropTypes.func,
  newQuoteText:        PropTypes.string,
  newAuthorText:       PropTypes.string,
  newTitleText:        PropTypes.string,
  newTagText:          PropTypes.array,
};

export default Page_AddQuote;
