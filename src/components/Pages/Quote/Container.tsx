import React from 'react';
import { connect } from 'react-redux';
import PageQuote from './PageQuote';
import {
  InitialQuoteStateType,
  actionsQuotes,
  getTableQuoteTC,
  getTableQuoteByIdTC,
} from '../../../redux/reducer-quotes';
import { getTableAuthorsTC } from '../../../redux/reducer-authors';
import { getTableSourcesTC } from '../../../redux/reducer-sources';
import { getTableTagsTC } from '../../../redux/reducer-tags';
import { useLocation, useParams } from 'react-router-dom';
import { AppStateType } from '../../../redux/redux-store';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';

type MapStatePropsType = {
  quotes: InitialQuoteStateType, //todo: test - is it correct?
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
};
type MapDispatchPropsType = {
  setQuotesIsFetching: (isFetching:boolean) => void,
  getTableAuthorsTC: () => void,
  getTableTagsTC: () => void,
  getTableSourcesTC: () => void,
  getTableQuoteTC: () => void,
  getTableQuoteByIdTC: (quoteId:string) => void,
};
type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    quotes:  state.quotes,
    tags:    state.tags.tags,
    authors: state.authors.authors,
    sources: state.sources.sources,
  };
};

//todo: переделать это на нормальный хук useLocation в функциональной компоненте
const withRouter = (WrappedComponent:any) => function addRouterData(props:any){ // todo: fix this 'any'!
  const location = useLocation();
  const params = useParams();
  return (
    <WrappedComponent {...props} location = {location} params = {params}/>
  );
};

const WithUrlDataComponent = withRouter(PageQuote);

const PageIndexContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps,
  {
    setQuotesIsFetching: actionsQuotes.setQuotesIsFetching,
    getTableAuthorsTC:   getTableAuthorsTC,
    getTableTagsTC:      getTableTagsTC,
    getTableSourcesTC:   getTableSourcesTC,
    getTableQuoteTC:     getTableQuoteTC,
    getTableQuoteByIdTC: getTableQuoteByIdTC,
  }
)(WithUrlDataComponent);

export default PageIndexContainer;
