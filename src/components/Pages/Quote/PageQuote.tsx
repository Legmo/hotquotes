import React, { Component, FC } from 'react';
import lodash from 'lodash';
import { AuthorObjectType, QuoteObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { findElementByValue, getRandomArrayElement } from '../../../utils/helpers';
import QuoteCard from '../../Elements/QuoteCard/QuoteCard';
import Preloader from '../../Elements/Preloader/Preloader';
import QuoteToolbar from '../../Elements/QuoteToolbar/QuoteToolbar';
import { InitialQuoteStateType } from '../../../redux/reducer-quotes';
import { InitialAppStateType } from '../../../redux/reducer-app';

type PropsType = {
  app: InitialAppStateType;
  quotes: InitialQuoteStateType;
  tags: Array<TagObjectType>;
  authors: Array<AuthorObjectType>;
  sources: Array<SourceObjectType>;
  getQuoteTC: () => void,
  getQuoteByIdTC: (quoteId:string) => void,
  quotesIsUpdating: (isUpdating: boolean) => void;
};

const PageQuote:FC<PropsType>  = (props) => {

  const quoteReload = () => {
    props.quotesIsUpdating(true);
    props.getQuoteTC();
  };

  if (!props.app.isInitialized || props.quotes.isUpdating) return <Preloader />;
  // todo: упростить эту логику
  // todo: кажется всё что касается подготовки данных надо вынести отсюда
  else {
    const quote:any = getRandomArrayElement(props.quotes.quotes); //todo: fix this 'any'!

    let quoteSource;
    const quoteSourceId:string = quote.sourceId;
    const quoteSourcesBase = props.sources;
    if (
      quoteSourceId &&
      !lodash.isEmpty(quoteSourceId) &&
      !lodash.isEmpty(quoteSourcesBase)
    ) {
      quoteSource = findElementByValue(
        quoteSourcesBase,
        quoteSourceId[0]
      ).title;
    }

    let author;
    const authorsIdArray:string = quote.authorsId;
    const authorsBase = props.authors;
    if(
      authorsIdArray &&
      !lodash.isEmpty(authorsIdArray) &&
      !lodash.isEmpty(authorsBase)
    ){
      const authorsId = authorsIdArray[0]; //todo: change logic. There may be situations when there are several authors.
      if (authorsId ) {
        author = findElementByValue(authorsBase, authorsId);
      }
    }

    let tags:Array<string> = [];
    const tagsIdArray = quote.tagsId;
    const tagsBase = props.tags;
    if (
      tagsIdArray &&
      !lodash.isEmpty(tagsIdArray) &&
      !lodash.isEmpty(tagsBase)
    ) {
      tags = tagsIdArray.map((tagID:string) => {
        const tagObject = findElementByValue(tagsBase, tagID);
        return tagObject.title;
      });
    }
    return (
      <>
        <QuoteCard quote = {quote} author = {author} tags = {tags} source = {quoteSource}/>
        { //<RefreshBlock callback = {() => this.quoteReload()} />
          // todo: переделать bind. Использование стрелочной функции в render() создаёт новую функцию при каждой отрисовке компонента, что может нарушать оптимизации, использующие строгое сравнение для определения идентичности.
           // https://reactdev.ru/handbook/faq-functions/#bind-in-render
        }

        <QuoteToolbar quoteId = {quote.id} refreshCallback = {() => quoteReload()} />
      </>
    );
  }
};
/*

class PageQuote extends Component<PropsType> {

  //test
  quoteReload() {
    props.quotesIsUpdating(true);
    this.props.getQuoteTC();
  }

  render() {
    if (this.props.quotes.isUpdating) return <Preloader />;
    else {
      //todo: simplify this logic
      const quote:any = getRandomArrayElement(this.props.quotes.quotes); //todo: fix this 'any'!

      let quoteSource;
      const quoteSourceId = quote.sourceId;
      const quoteSourcesBase = this.props.sources;
      if (
        quoteSourceId &&
        !lodash.isEmpty(quoteSourceId) &&
        !lodash.isEmpty(quoteSourcesBase)
      ) {
        quoteSource = findElementByValue(
          quoteSourcesBase,
          quoteSourceId[0]
        ).title;
      }

      let author;
      const authorsIdArray = quote.authorsId;
      const authorsBase = this.props.authors;
      if(
        authorsIdArray &&
        !lodash.isEmpty(authorsIdArray) &&
        !lodash.isEmpty(authorsBase)
      ){
        const authorsId = authorsIdArray[0]; //todo: change logic. There may be situations when there are several authors.
        if (authorsId ) {
          author = findElementByValue(authorsBase, authorsId);
        }
      }

      let tags:Array<string> = [];
      const tagsIdArray = quote.tagsId;
      const tagsBase = this.props.tags;
      if (
        tagsIdArray &&
        !lodash.isEmpty(tagsIdArray) &&
        !lodash.isEmpty(tagsBase)
      ) {
        tags = tagsIdArray.map((tagID:string) => {
          const tagObject = findElementByValue(tagsBase, tagID);
          return tagObject.title;
        });
      }

      return (
        <>
          <QuoteCard quote = {quote} author = {author} tags = {tags} source = {quoteSource}/>
          {/!*<RefreshBlock callback = {() => this.quoteReload()} />*!/}
          {/!*  todo: переделать bind. Использование стрелочной функции в render() создаёт новую функцию при каждой отрисовке компонента, что может нарушать оптимизации, использующие строгое сравнение для определения идентичности.
           https://reactdev.ru/handbook/faq-functions/#bind-in-render
          *!/}

          <QuoteToolbar quoteId = {quote.id} refreshCallback = {() => this.quoteReload()} />
        </>
      );
    }
  }
}
*/

export default PageQuote;
