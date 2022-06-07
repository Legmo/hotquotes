import React from 'react';
import style from './style.module.css';

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
        value={props.newQuoteText}
        onChange={onQuoteChanged}
        placeholder="Цитата"
        className={style.input_text + ' d-block mb-3 col-12 p-3'}
        rows="10"
      />

      <textarea
        value={props.newAuthorText}
        onChange={onAuthorChanged}
        placeholder="Автор"
        className={style.input_author + ' d-block mb-3 col-12 p-1'}
        rows="1"
      />
      <textarea
        value={props.newTitleText}
        onChange={onTitleChanged}
        placeholder="Источник (название произведение)"
        className={style.input_title + ' d-block mb-3 col-12 p-1'}
        rows="1"
      />
      <textarea
        value={props.newTagText}
        onChange={onNewTagChanged}
        placeholder="Новые тэги (через запятую)"
        className={style.input_new_tag + ' d-block mb-3 col-12 p-1'}
        rows="1"
      />

      <select
        multiple
        className={style.input_tags}
        // ref={}
        // value={state.}
        // onChange={}

        //size="1"
      >
        <option disabled>Тэги</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <p>ID цитаты: 999 (должен ставиться автоматически)</p>
      <p>ID автора: 999 (должен ставиться автоматически)</p>
      <p>Дата и время (должен ставиться автоматически)</p>

      <button onClick={addNewQuote}>Добавить цитату</button>
    </div>
  );
};

export default Page_AddQuote;