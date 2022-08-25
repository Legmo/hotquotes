import React, { FC } from 'react';
import lodash from 'lodash';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { findElementByValue, getRandomArrayElement } from '../../../utils/helpers';
import QuoteCard from '../../Elements/QuoteCard/QuoteCard';
import Preloader from '../../Elements/Preloader/Preloader';
import QuoteToolbar from '../../Elements/QuoteToolbar/QuoteToolbar';
import { InitialQuoteStateType } from '../../../redux/reducer-quotes';

type PropsType = {
  appIsInitialized: boolean;
  quotes: InitialQuoteStateType;
  tags: Array<TagObjectType>;
  authors: Array<AuthorObjectType>;
  sources: Array<SourceObjectType>;
  getQuoteTC: () => void,
  quotesUpdating: (isUpdating: boolean) => void;
};

const PageQuote:FC<PropsType>  = ({
  quotesUpdating,
  getQuoteTC,
  tags,
  authors,
  sources,
  appIsInitialized,
  quotes,
}) => {

  const quoteReload = () => {
    quotesUpdating(true);
    getQuoteTC();
  };

  if (!appIsInitialized || quotes.isUpdating) return <Preloader />;
  // todo: упростить эту логику
  // todo: возможно всё что касается подготовки данных надо вынести отсюда
  else {
    const quote:any = getRandomArrayElement(quotes.quotes); //todo: fix this 'any'!
    const {sourceIdArray, authorsIdArray, tagsIdArray} = quote;

    let thisQuoteSource;
    if (sourceIdArray && !lodash.isEmpty(sourceIdArray) && !lodash.isEmpty(sources)) {
      thisQuoteSource = findElementByValue(sources, sourceIdArray[0]).title;
    }

    let thisQuoteAuthor;
    if(authorsIdArray && !lodash.isEmpty(authorsIdArray) && !lodash.isEmpty(authors)){
      const authorsId = authorsIdArray[0]; //todo: change logic. There may be situations when there are several authors.
      if (authorsId) {
        thisQuoteAuthor = findElementByValue(authors, authorsId);
      }
    }

    let thisQuoteTags:Array<string> = [];
    if (tagsIdArray && !lodash.isEmpty(tagsIdArray) && !lodash.isEmpty(tags)) {
      thisQuoteTags = tagsIdArray.map((tagID:string) => {
        const tagObject = findElementByValue(tags, tagID);
        return tagObject.title;
      });
    }
    return (
      <>

        <QuoteCard quote = {quote} author = {thisQuoteAuthor} tags = {thisQuoteTags} source = {thisQuoteSource}/>
        { // <RefreshBlock callback = {() => this.quoteReload()} />
          // todo: переделать bind. Использование стрелочной функции в render() создаёт новую функцию при каждой отрисовке компонента, что может нарушать оптимизации, использующие строгое сравнение для определения идентичности.
           // https://reactdev.ru/handbook/faq-functions/#bind-in-render
        }

        <QuoteToolbar quoteId = {quote.id} refreshCallback = {() => quoteReload()} />
      </>
    );
  }
};

export default PageQuote;
