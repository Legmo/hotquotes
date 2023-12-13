import React, { FC, ReactElement } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikHelpers } from 'formik';
import style from './style.module.scss';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { isEmpty } from 'lodash';
import AutocompleteList from '../FormItem_AutocompleteList/FormSelectList';
import { TextField, Button } from '@mui/material';

type PropsType = {
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
  addQuote: (quoteText:string, authorsId:(string)[], tagsId:(string)[], sourcesId:(string)[]) => void,
  addAuthor: (name:string, surname:string) => void,
  quotesUpdating: (isUpdating: boolean) => void;
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

  console.log("props.tags", props.authors);
  return (
      <Formik
        initialValues = {{
          quoteText:        '' as string,
          tags:             [] as (string)[],
          authors:          props.authors as any,
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
        onSubmit = {(
            values: FormikValues,
            { setSubmitting }: FormikHelpers<FormikValues>
          ) => {
            setTimeout(() => {
              alert('Adding quotes to the database is temporarily disabled.\nContact developer.\n\nДобавление цитат в базу данных временно отключено.\nСвяжитесь с разработчиком.\n\nmail@legmo.ru');
              // todo: можно ли как-то адекватно закодировать email от spam-бота в данном случае?
            }, 400);
            /*setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);*/

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
              props.quotesUpdating(true);
              props.addQuote(
                values.quoteText,
                authors,
                tags,
                source);
            }

            */
          }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className = {style.formWrapper}>

              <TextField
                required
                name = 'quoteText'
                placeholder = {'Цитата'}
                className = {style.input + ' ' + style.inputText}
                multiline
                rows = {3}
                maxRows = {10}
              />
              <ErrorMessage name = 'quoteText' component = 'div' />

              <AutocompleteList
                required
                label = 'Авторы'
                options = {props.authors.map((author:AuthorObjectType) => {
                  return {
                    id:    author.id,
                    value: `${author.surname} ${author.name}`
                  };
                })}
                /*onChange={(value) => {
                  console.log(value);
                }}*/
              />
              <ErrorMessage name = 'authorsA' component = 'div' />


              <AutocompleteList
                required
                label = 'Источник'
                options = {props.sources.map((source:SourceObjectType) => {
                  return {
                    id:    source.id,
                    value: source.title
                  };
                })}
              />
              <ErrorMessage name = 'sourcesA' component = 'div' />
              {/*todo: источник только один! ограничить количество значений*/}

              <AutocompleteList
                required
                label = 'Категории'
                options = {props.tags.map((tag:TagObjectType) => {
                  return {
                    id:    tag.id,
                    value: tag.title
                  };
                })}
              />
              <ErrorMessage name = 'tagsA' component = 'div' />


              <Button
                className = {style.buttonSubmit}
                sx = {{
                    marginTop: 3,
                    marginBottom: 3,
                }}
                variant = 'outlined'
                type = 'submit'
                disabled = {isSubmitting}
              >
                Добавить цитату
              </Button>

              <div className={style.info}>
                <span>После отправки появляется сообщение «Цитата добавлена. Страница цитаты находится [здесь]». Плюс ссылка на страницу цитаты. </span><br/>
                <span>На странице цитаты есть кнопка «Поделиться цитатой» (нужен ID цитаты, придёт с сервера).</span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
  );
};

export default FormAddQuote;
