import { connect } from 'react-redux';
import PageQuote from './PageQuote';
import { actionsQuotes, getQuoteTC, InitialQuoteStateType } from '../../../redux/reducer-quotes';
import { AppStateType } from '../../../redux/store';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { compose } from 'redux';
import {
  getAppIsInitialized,
  getAuthorsAuthors,
  getQuotes,
  getSourcesSources,
  getTagsTags
} from '../../../redux/selectors';

type MapStatePropsType = { // todo: test - is it correct?
  appIsInitialized: boolean,
  quotes: InitialQuoteStateType,
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
};
type MapDispatchPropsType = {
  getQuoteTC: () => void,
  quotesUpdating: (isUpdating:boolean) => void,
};
type OwnPropsType = any;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    appIsInitialized: getAppIsInitialized(state),
    quotes:           getQuotes(state),
    tags:             getTagsTags(state),
    authors:          getAuthorsAuthors(state),
    sources:          getSourcesSources(state),
  };
};

export default compose<any>(// todo: fix any
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      getQuoteTC:     getQuoteTC,
      quotesUpdating: actionsQuotes.quotesUpdating,
    }
  ),
)(PageQuote);
