import React, { Component } from 'react';
import lodash, { isEmpty } from 'lodash';
import {
  AuthorObjectType,
  QuoteObjectType,
  SourceObjectType,
  TagObjectType,
} from '../../../types/types';
import {
  findElementByValue,
  getRandomArrayElement,
} from '../../../utils/helpers';
import QuoteCard from '../../Elements/QuoteCard/QuoteCard';
import Preloader from '../../Elements/Preloader/Preloader';
import QuoteToolbar from '../../Elements/QuoteToolbar/QuoteToolbar';
import { InitialQuoteStateType } from '../../../redux/reducer-quotes';

type PropsType = {
  quotes: InitialQuoteStateType;
  tags: Array<TagObjectType>;
  authors: Array<AuthorObjectType>;
  sources: Array<SourceObjectType>;
  params: { id: string };
  setQuotesIsFetching: (isFetching: boolean) => void;
  getAuthorsTC: () => void,
  getTagsTC: () => void,
  getSourcesTC: () => void,
  getQuoteTC: () => void,
  getQuoteByIdTC: (quoteId:string) => void,
};

class PageQuote extends Component<PropsType> {
  componentDidMount() {
    // todo: разобраться с получением данных Authors и Tags здесь и в Sidebar. В Sidebar их надо оставить, чтоб отображались для других страниц
    this.props.setQuotesIsFetching(true);
    (!isEmpty(this.props.params) && this.props.params.id)
      ? this.props.getQuoteByIdTC(this.props.params.id)
      : this.props.getQuoteTC();
    this.props.getAuthorsTC();
    this.props.getTagsTC();
    this.props.getSourcesTC();
  }

  quoteReload() {
    this.props.setQuotesIsFetching(true);
    this.props.getQuoteTC();
  }

  render() {
    //todo: simplify this logic
    const LoadingPage = () => {
      // todo: зачем используется isQuotesLoaded? Почему недостаточно isFetching?
      if (this.props.quotes.isQuotesLoaded) {
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
            {/*<RefreshBlock callback = {() => this.quoteReload()} />*/}
            {/*  todo: переделать bind. Использование стрелочной функции в render() создаёт новую функцию при каждой отрисовке компонента, что может нарушать оптимизации, использующие строгое сравнение для определения идентичности.
             https://reactdev.ru/handbook/faq-functions/#bind-in-render
            */}

            <QuoteToolbar quoteId = {quote.id} refreshCallback = {() => this.quoteReload()} />
          </>
        );
      }
    };

    return this.props.quotes.isFetching
      ? <Preloader />
      : LoadingPage();
  }
}

export default PageQuote;
