import { connect } from 'react-redux';
import PageQuote from './PageQuote';
import { actionsQuotes, getQuoteByIdTC, getQuoteTC, InitialQuoteStateType } from '../../../redux/reducer-quotes';
import { AppStateType } from '../../../redux/store';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { compose } from 'redux';
import { InitialAppStateType } from '../../../redux/reducer-app';
import { getApp, getAuthorsAuthors, getQuotes, getSourcesSources, getTagsTags } from '../../../redux/selectors';

type MapStatePropsType = {
  app: InitialAppStateType, //todo: test - is it correct?
  quotes: InitialQuoteStateType,
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
};
type MapDispatchPropsType = {
  getQuoteTC: () => void,
  getQuoteByIdTC: (quoteId:string) => void,
  quotesIsUpdating: (isUpdating:boolean) => void,
};
type OwnPropsType = any;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    app:     getApp(state),
    quotes:  getQuotes(state),
    tags:    getTagsTags(state),
    authors: getAuthorsAuthors(state),
    sources: getSourcesSources(state),
  };
};

export default compose<any>(// todo: fix any
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      getQuoteTC:       getQuoteTC,
      getQuoteByIdTC:   getQuoteByIdTC,
      quotesIsUpdating: actionsQuotes.quotesIsUpdating,
    }
  ),
)(PageQuote);
