import React from 'react';
import { connect } from 'react-redux';
import PageQuote from './PageQuote';
import {
  InitialQuoteStateType,
  actionsQuotes
} from '../../../redux/reducer-quotes';
import { actionsAuthors } from '../../../redux/reducer-authors';
import { actionsSources } from '../../../redux/reducer-sources';
import { actionsTags } from '../../../redux/reducer-tags';
import { useLocation, useParams } from 'react-router-dom';
import { AppStateType } from '../../../redux/redux-store';
import { AuthorObjectType, QuoteObjectType, SourceObjectType, TagObjectType } from '../../../types/types';

type MapStatePropsType = {
  quotes: InitialQuoteStateType, //todo: test - is it correct?
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
};
type MapDispatchPropsType = {
  setQuotes: (quotesArray:Array<QuoteObjectType>) => void,
  setAuthors: (authorsArray:Array<AuthorObjectType>) => void,
  setTags: (tagsArray:Array<TagObjectType>) => void,
  setSources: (sourcesArray:Array<SourceObjectType>) => void,
  setQuotesIsFetching: (isFetching:boolean) => void,
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
    setQuotes:           actionsQuotes.setQuotes,
    setQuotesIsFetching: actionsQuotes.setQuotesIsFetching,
    setAuthors:          actionsAuthors.setAuthors,
    setTags:             actionsTags.setTags,
    setSources:          actionsSources.setSources,
  }
)(WithUrlDataComponent);

export default PageIndexContainer;
