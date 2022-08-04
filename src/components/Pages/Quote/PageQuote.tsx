import React, { Component } from 'react';
import {
  findElementByValue,
  getRandomArrayElement,
} from '../../../utils/helpers';
import {
  getTable,
  getTableById,
  // getTableByPagination
} from '../../../DataAccessLayer/api';
import lodash, { isEmpty } from 'lodash';
import QuoteCard from '../../Elements/QuoteCard/QuoteCard';
import Preloader from '../../Elements/Preloader/Preloader';
import QuoteToolbar from '../../Elements/QuoteToolbar/QuoteToolbar';
import { AuthorObjectType, QuoteObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { InitialQuoteStateType } from '../../../redux/reducer-quotes';

type PropsType = {
  quotes: InitialQuoteStateType;
  tags: Array<TagObjectType>;
  authors: Array<AuthorObjectType>;
  sources: Array<SourceObjectType>;
  params: { id: string };
  setQuotes: (quotesArray: Array<QuoteObjectType>) => void;
  setAuthors: (authorsArray: Array<AuthorObjectType>) => void;
  setTags: (tagsArray: Array<TagObjectType>) => void;
  setSources: (sourcesArray: Array<SourceObjectType>) => void;
  setQuotesIsFetching: (isFetching: boolean) => void;
};

class PageQuote extends Component<PropsType> {
  componentDidMount() {
    //todo: this logic for test only
    //todo: разобраться с получением данных Authors и Tags здесь и в Sidebar. В Sidebar их надо оставить, чтоб отображались для других страниц

    this.props.setQuotesIsFetching(true);
    if (!isEmpty(this.props.params) && this.props.params.id) {
      //todo: выдавать сообщение, если цитата с данным ID не найдена
      getTableById('quotes', this.props.params.id).then((response) => {
        this.props.setQuotes(response);
        this.props.setQuotesIsFetching(false);
      });
    } else {
      getTable('quotes').then((response) => {
        this.props.setQuotes(response);
        this.props.setQuotesIsFetching(false);
      });
    }

    getTable('sources').then((response) => {
      this.props.setSources(response);
    });
    getTable('authors').then((response) => {
      this.props.setAuthors(response);
    });
    getTable('tags').then((response) => {
      this.props.setTags(response);
    });
  }

  quoteReload() {
    this.props.setQuotesIsFetching(true);
    getTable('quotes').then((response) => {
      this.props.setQuotes(response);
      this.props.setQuotesIsFetching(false);
    });
  }

  render() {
    //todo: simplify this logic
    const LoadingPage = () => {
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

    return this.props.quotes.isFetching ? <Preloader /> : LoadingPage();
  }
}

export default PageQuote;
