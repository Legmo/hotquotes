import FormAddQuote from './FormAddQuote';
import { connect } from 'react-redux';
import { actionsQuotes, setQuoteTC } from '../../../redux/reducer-quotes';
import { setAuthorTC } from '../../../redux/reducer-authors';
import { AppStateType } from '../../../redux/store';
import { AuthorObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { getAuthorsAuthors, getSourcesSources, getTagsTags } from '../../../redux/selectors';

type MapStatePropsType = {
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
}

type MapDispatchPropsType = {
  addQuote: (quoteText:string, authorsId:(string)[], tagsId:(string)[], sourcesId:(string)[]) => void,
  addAuthor: (name:string, surname:string) => void,
  quotesUpdating: (isUpdating:boolean) => void,
};
type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    tags:    getTagsTags(state),
    authors: getAuthorsAuthors(state),
    sources: getSourcesSources(state),
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const FormAddQuoteContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  addQuote:       setQuoteTC,
  addAuthor:      setAuthorTC,
  quotesUpdating: actionsQuotes.quotesUpdating,
})(FormAddQuote);

export default FormAddQuoteContainer;
