import React from 'react';
import { connect } from 'react-redux';
import PageQuote from './PageQuote';
import {
  InitialQuoteStateType,
  actionsQuotes,
  getQuoteTC,
  getQuoteByIdTC,
} from '../../../redux/reducer-quotes';
import { getAuthorsTC } from '../../../redux/reducer-authors';
import { getSourcesTC } from '../../../redux/reducer-sources';
import { getTagsTC } from '../../../redux/reducer-tags';
import { useLocation, useParams } from 'react-router-dom';
import { AppStateType } from '../../../redux/redux-store';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { compose } from 'redux';

type MapStatePropsType = {
  quotes: InitialQuoteStateType, //todo: test - is it correct?
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
};
type MapDispatchPropsType = {
  setQuotesIsFetching: (isFetching:boolean) => void,
  getAuthorsTC: () => void,
  getTagsTC: () => void,
  getSourcesTC: () => void,
  getQuoteTC: () => void,
  getQuoteByIdTC: (quoteId:string) => void,
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

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      setQuotesIsFetching: actionsQuotes.setQuotesIsFetching,
      getAuthorsTC:   getAuthorsTC,
      getTagsTC:           getTagsTC,
      getSourcesTC:        getSourcesTC,
      getQuoteTC:          getQuoteTC,
      getQuoteByIdTC:      getQuoteByIdTC,
    }
  ),
  withRouter,
)(PageQuote);
