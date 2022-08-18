import React, { FC } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikHelpers } from 'formik';
import style from './style.module.scss';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { isEmpty } from 'lodash';

type PropsType = {
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
  addQuote: (quoteText:string, authorsId:(string)[], tagsId:(string)[], sourcesId:(string)[]) => void,
  addAuthor: (name:string, surname:string) => void,
  quotesIsUpdating: (isUpdating: boolean) => void;
};

interface FormikValues {
  quoteText: string,
  tags: (string)[],
  authors: (string)[],
  sources: (string)[],
  newTag: string,
  newAuthorName: string,
  newAuthorSurname: string,
  newSource: string,
}

const FormAddQuote:FC<PropsType> = (props) => {
  // todo: preloader пока загружаются данные
  // todo: запрос данные для select независимо от Sidebar? Надо единый делать, при инициализации страницы
  {/*todo: все select: разрешить множественный выбор (чекбоксы)*/}

  return (
      <Formik
        initialValues = {{
          quoteText:        '' as string,
          tags:             [] as (string)[],
          // authors:          [] as (string|null)[],
          authors:          [] as (string)[],
          sources:          [] as (string)[],
          newTag:           '' as string,
          newAuthorName:    '' as string,
          newAuthorSurname: '' as string,
          newSource:        '' as string,
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

            /*
            todo: comment for GitHub pages

            console.log('FormikValues:', values);
            let authors = [] as (string)[];
            if(!isEmpty(values.authors)) {
              authors = [
                ...authors,
                ...values.authors
              ];
            }
            if(values.newAuthorSurname) {
              //todo: новых авторов может быть много

              // const newAuthor = {
              //  surname: values.newAuthorSurname,
              //  name:    values.newAuthorName ? values.newAuthorName : null,
              // };
              // authors = [
              //   ...authors,
              //   newAuthor
              // ];
              authors.push(values.newAuthorSurname);
            }

            let source = [] as (string)[];
            if(!isEmpty(values.sources)) {
              source = values.sources;
            } else if(values.newSource) {
              source.push(values.newSource);
            }

            let tags = [] as (string)[];
            if(!isEmpty(values.tags)) {
              tags = [
                ...tags,
                ...values.tags
              ];
            }
            if(!isEmpty(values.newTag)) {
              //todo: новых тэгов может быть много
              tags.push(values.newTag);
            }
              
            if(values.quoteText) {
              props.quotesIsUpdating(true);
              props.addQuote(
                values.quoteText,
                authors,
                tags,
                source);
            }

            */
          }
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <div className = {style.formWrapper}>
              <Field
                name = 'quoteText'
                component = 'textarea'
                placeholder = {'Цитата'}
                className = {style.input + ' ' + style.inputText}
                rows = {10}
              />
              <ErrorMessage name = 'quoteText' component = 'div' />

              {/*todo: Авторы: строка с автодополнением*/}
              {/*todo: Авторы: возможность ввести нескольких авторов*/}
              <Field
                name = 'authorsA'
                as = 'select'
                multiple
                className = {style.input + ' ' + style.select + ' ' + style.inputTags}
              >
                <option disabled>Авторы</option>
                {props.authors.map((author:AuthorObjectType) => {
                  return <option key = {author.id} value = {author.surname + ' ' + author.name}>
                    {author.surname} {author.name}
                  </option>;
                })}
              </Field>
              <ErrorMessage name = 'authorsA' component = 'div' />
              {/*todo: добавить возможность добавлять несколько авторов. Поля «Имя» и «Фамилия» в одну строку, справа кнопка «+» - добавляет ещё один ряд таких же полей...*/}
              <div className = {style.fieldLine}>
                <div className = {style.fieldWrapper}>
                  {/*todo: newAuthorSurname - обязательное поле*/}
                  <Field
                    name = 'newAuthorSurname'
                    placeholder = 'Фамилия автора'
                    className = {style.input + ' ' + style.inputAuthor}
                  />
                  <ErrorMessage name = 'newAuthorSurname' component = 'div' />
                </div>
                <div className = {style.fieldWrapper}>
                  <Field
                  name = 'newAuthorName'
                  placeholder = {'Имя автора'}
                  className = {style.input + ' ' + style.inputAuthor}
                />
                  <ErrorMessage name = 'newAuthorName' component = 'div' />
                </div>
                <div className = {style.fieldWrapper}>
                  <button title = {'Добавить ещё одного автора'}>+</button>
                </div>
              </div>

              <Field
                name = 'sourcesA'
                as = 'select'
                multiple
                className = {style.input + ' ' + style.select + ' ' + style.inputTags}
              >
                {/*todo: разрешить множественный выбор (чекбоксы)*/}
                <option disabled>Источник (название произведения)</option>
                {props.sources.map((source:SourceObjectType) => {
                  return <option key = {source.id} value = {source.id}>
                    {source.title}
                  </option>;
                })}
              </Field>
              <ErrorMessage name = 'sourcesA' component = 'div' />
              {/*todo: источник только один - либо из списка, либо новый. Блокировать одно полеЮ если заполнено другое*/}
              <Field
                name = 'newSource'
                placeholder = 'Добавить новый источник (название произведение)'
                className = {style.input + ' ' + style.inputTitle}
              />
              <ErrorMessage name = 'newSource' component = 'div' />


              {/*todo: объединить виджеты новые тэги и существующие тэги. Поле множественное ввода с автодополнением*/}
              <Field
                name = 'tagsA'
                as = 'select'
                multiple
                className = {style.input + ' ' + style.select + ' ' + style.inputTags}
              >
                {/*todo: разрешить множественный выбор (чекбоксы)*/}
                <option disabled>Категории</option>
                {props.tags.map((tag:TagObjectType) => {
                  return <option key = {tag.id} value = {tag.title}>{tag.title}</option>;
                })}
              </Field>
              <ErrorMessage name = 'tagsA' component = 'div' />
              <div className = {style.fieldLine + ' ' + style.fieldLineTwo}>
                <div className = {style.fieldWrapper}>
                  <Field
                    name = 'newTag'
                    placeholder = 'Добавить новую категорию'
                    className = { style.input + ' ' + style.inputNewTag }
                  />
                  <ErrorMessage name = 'newTag' component = 'div' />
                </div>
                <div className = {style.fieldWrapper}>
                  <button title = {'Добавить ещё одну категорию'}>+</button>
                </div>
              </div>
              <button
                type = 'submit'
                disabled = {isSubmitting}
                className = { style.buttonSubmit }
              >
                Добавить цитату
              </button>
              <p>После отправки меняется на кнопку <span className = {style.paragraphLabel}>«Добавить ещё одну цитату»</span></p>

              <p><span className = {style.paragraphLabel}>Кнопка «Поделиться цитатой»</span> (нужен ID цитаты, придёт с сервера, до тех пор - disable)</p>
            </div>
          </Form>
        )}
      </Formik>
  );
};

export default FormAddQuote;
