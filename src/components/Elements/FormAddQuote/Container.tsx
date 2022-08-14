import FormAddQuote from './FormAddQuote';
import { connect } from 'react-redux';
import { actionsQuotes, setQuoteTC } from '../../../redux/reducer-quotes';
import { setAuthorTC } from '../../../redux/reducer-authors';
import { AppStateType } from '../../../redux/redux-store';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';

type MapStatePropsType = {
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
}

type MapDispatchPropsType = {
  addQuote: (quoteText:string, authorsId:(string)[], tagsId:(string)[], sourcesId:(string)[]) => void,
  addAuthor: (name:string, surname:string) => void,
  quotesIsUpdating: (isUpdating:boolean) => void,
};
type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    tags:    state.tags.tags,
    authors: state.authors.authors,
    sources: state.sources.sources,
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const FormAddQuoteContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  addQuote:         setQuoteTC,
  addAuthor:        setAuthorTC,
  quotesIsUpdating: actionsQuotes.quotesIsUpdating,
})(FormAddQuote);

export default FormAddQuoteContainer;
