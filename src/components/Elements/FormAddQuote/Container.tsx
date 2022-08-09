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
  newQuote: QuoteObjectType,
  newAuthor: AuthorObjectType,
  newSource: SourceObjectType,
  newTag: TagObjectType,
}

type MapDispatchPropsType = {
  addTag: () => void,
  updateNewTagText: (newText: string) => void,
  addQuote: () => void,
  addAuthor: () => void,
  addSource: () => void,
  updateNewQuoteText: (newText: string) => void,
  updateNewAuthorName: (newText: string) => void,
  updateNewAuthorSurname: (newText: string) => void,
  updateNewSourceText: (newText: string) => void,
};
type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    newTag:    state.tags.newTag,
    newQuote:  state.quotes.newQuote,
    newAuthor: state.authors.newAuthor,
    newSource: state.sources.newSource,
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const FormAddQuoteContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  addTag:                 actionsTags.addTag,
  updateNewTagText:       actionsTags.updateNewTagText,
  addQuote:               actionsQuotes.addQuote,
  updateNewQuoteText:     actionsQuotes.updateNewQuoteText,
  addAuthor:              actionsAuthors.addAuthor,
  updateNewAuthorName:    actionsAuthors.updateNewAuthorName,
  updateNewAuthorSurname: actionsAuthors.updateNewAuthorSurname,
  addSource:              actionsSources.addSource,
  updateNewSourceText:    actionsSources.updateNewSourceText,
})(FormAddQuote);

export default FormAddQuoteContainer;
