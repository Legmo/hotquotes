import FormAddQuote from './FormAddQuote';
import {connect} from 'react-redux';
import { actionsQuotes } from '../../../redux/reducer-quotes';
import { actionsAuthors } from '../../../redux/reducer-authors';
import { actionsSources } from '../../../redux/reducer-sources';
import { actionsTags } from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/redux-store';
import {
  AuthorObjectType,
  QuoteObjectType,
  SourceObjectType,
  TagObjectType,
} from '../../../types/types';

type MapStatePropsType = {
  tags: Array<TagObjectType>,
  authors: Array<AuthorObjectType>,
  sources: Array<SourceObjectType>,
  newQuote: QuoteObjectType,
  newAuthor: AuthorObjectType,
  newSource: SourceObjectType,
  newTag: TagObjectType,
}

type MapDispatchPropsType = {
  addTag: () => void,
  addQuote: () => void,
  addAuthor: () => void,
  addSource: () => void,
  // updateNewTagText: (newText: string) => void,
  // updateNewQuoteText: (newText: string) => void,
  // updateNewAuthorName: (newText: string) => void,
  // updateNewAuthorSurname: (newText: string) => void,
  // updateNewSourceText: (newText: string) => void,
};
type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    tags:      state.tags.tags,
    authors:   state.authors.authors,
    sources:   state.sources.sources,
    newTag:    state.tags.newTag,
    newQuote:  state.quotes.newQuote,
    newAuthor: state.authors.newAuthor,
    newSource: state.sources.newSource,
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const FormAddQuoteContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  addTag:    actionsTags.addTag,
  addQuote:  actionsQuotes.addQuote,
  addAuthor: actionsAuthors.addAuthor,
  addSource: actionsSources.addSource,
  // updateNewQuoteText:     actionsQuotes.updateNewQuoteText,
  // updateNewTagText:       actionsTags.updateNewTagText,
  // updateNewAuthorName:    actionsAuthors.updateNewAuthorName,
  // updateNewAuthorSurname: actionsAuthors.updateNewAuthorSurname,
  // updateNewSourceText:    actionsSources.updateNewSourceText,
})(FormAddQuote);

export default FormAddQuoteContainer;
