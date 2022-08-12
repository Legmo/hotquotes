import React, { FC } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikErrors
} from 'formik';
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
  // updateNewQuoteText: (newText: string) => void,
  // updateNewAuthorName: (newText: string) => void,
  // updateNewAuthorSurname: (newText: string) => void,
  // updateNewSourceText: (newText: string) => void,
  // updateNewTagText: (newText: string) => void,
};

interface FormikValues {
  quoteText: string,
  author: string,
  newAuthorName: string,
  newAuthorSurname: string,
  newSource: string,
  tags: Array<string>,
  newTags: Array<string>,
}

const FormAddQuote:FC<PropsType> = (props) => {
  return (
      <Formik
        initialValues = {{
          quoteText:        '',
          author:           '',
          newAuthorName:    '',
          newAuthorSurname: '',
          newSource:        '',
          tags:             [''],
          newTags:          [''],
        }}
        validate = {(values: FormikValues) => {
          const errors: FormikErrors<FormikValues> = {};
          /*if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }*/
          return errors;
        }}
        onSubmit = {
          (
            values: FormikValues,
            { setSubmitting }: FormikHelpers<FormikValues>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <div className = {style.formWrapper}>
            {/* <Field type = 'email' name = 'email' />
              <ErrorMessage name = 'email' component = 'div' />
              <Field type = 'password' name = 'password' />
              <ErrorMessage name = 'password' component = 'div' />*/}
              <Field
                name = 'quoteText'
                component = 'textarea'
                placeholder = {'Цитата'}
                className = {style.input + ' ' + style.inputText}
                rows = {10}
              />
              <ErrorMessage name = 'quoteText' component = 'div' />
              {/*todo: добавить возможность добавлять несколько авторов. Поля «Имя» и «Фамилия» в одну строку, справа кнопка «+» - добавляет ещё один ряд таких же полей...*/}
              <Field
                name = 'author'
                placeholder = {'Автор (выбор из существующих)'}
                className = {style.input + ' ' + style.inputText}
              />
              <ErrorMessage name = 'author' component = 'div' />
              <Field
                name = 'newAuthorSurname'
                placeholder = 'Фамилия автора'
                className = {style.input + ' ' + style.inputAuthor}
              />
              <ErrorMessage name = 'newAuthorSurname' component = 'div' />
              <Field
                name = 'newAuthorName'
                placeholder = {'Имя автора'}
                className = {style.input + ' ' + style.inputAuthor}
              />
              <ErrorMessage name = 'newAuthorName' component = 'div' />
              <Field
                name = 'newSource'
                placeholder = 'Источник (название произведение)'
                className = {style.input + ' ' + style.inputTitle}
              />
              <ErrorMessage name = 'newSource' component = 'div' />
              {/*todo: объединить виджеты новые тэги и существующие тэги. Поле множественное ввода с автодополнением*/}
              <Field
                name = 'tags'
                component = 'select'
                className = {style.input + ' ' + style.select + ' ' + style.inputTags}
              >
                {/*todo: разрешить множественный выбор (чекбоксы)*/}
                <option disabled>Категории</option>
                <option value = '1'>1</option>
                <option value = '2'>2</option>
              </Field>
              <ErrorMessage name = 'tags' component = 'div' />
              <Field
                name = 'newTags'
                component = 'textarea'
                placeholder = 'Новые категории (через запятую)'
                className = { style.input + ' ' + style.inputNewTag }
                rows = {1}
              />
              <ErrorMessage name = 'newTags' component = 'div' />

              <p><span className = {style.paragraphLabel}>Кнопка «Поделиться цитатой»</span> (нужен ID цитаты, придёт с сервера, до тех пор - disable)</p>
              <button
                type = 'submit'
                disabled = {isSubmitting}
                className = { style.buttonSubmit }
              >
                Добавить цитату
              </button>
              <p>После отправки меняется на кнопку «Добавить ещё одну цитату»</p>
            </div>
          </Form>
        )}
      </Formik>

      /*
      <textarea
        value = {props.newQuote.quoteText}
        onChange = {(e) => onQuoteChanged(e)}
        placeholder = 'Цитата'
        className = {style.input + ' ' + style.inputText}
        rows = {10}
      />
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
      <textarea
        value = {props.newTag.title}
        onChange = {onNewTagChanged}
        placeholder = 'Новые категории (через запятую)'
        className = {
          style.input + ' ' + style.inputNewTag + ' d-block mb-3 col-12 p-1'
        }
        rows = {1}
      />
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
      <p><span className={style.paragraphLabel}>ID цитаты:</span> 999 (должен ставиться автоматически)</p>
      <p><span className={style.paragraphLabel}>ID автора:</span> 999 (должен ставиться автоматически)</p>
      <p>Дата и время (должен ставиться автоматически)</p>

      <button className = {style.buttonSubmit} onClick = {() => props.addQuote()}>Добавить цитату</button>
      */
  );
};

export default FormAddQuote;
