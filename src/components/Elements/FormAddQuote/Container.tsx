import FormAddQuote from './FormAddQuote';
import {connect} from 'react-redux';
import {
  addQuote,
  updateNewQuoteText
} from '../../../redux/reducer-quotes';
import {
  addAuthor,
  updateNewAuthorName,
  updateNewAuthorSurname
} from '../../../redux/reducer-authors';
import { addTag, updateNewTagText } from '../../../redux/reducer-tags';
import { addSource, updateNewSourceText } from '../../../redux/reducer-sources';
import { AppStateType } from '../../../redux/redux-store';
import { AuthorObjectType, QuoteObjectType, SourceObjectType, TagObjectType } from '../../../types/types';

type MapStatePropsType = {
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
  updateNewQuoteText: (newText: string) => void,
  updateNewAuthorName: (newText: string) => void,
  updateNewAuthorSurname: (newText: string) => void,
  updateNewSourceText: (newText: string) => void,
  updateNewTagText: (newText: string) => void,
};

type OwnPropsType = Record<string, never>; //todo: fix it

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
  addTag,
  addQuote,
  addAuthor,
  addSource,
  updateNewQuoteText,
  updateNewAuthorName,
  updateNewAuthorSurname,
  updateNewSourceText,
  updateNewTagText,
})(FormAddQuote);

export default FormAddQuoteContainer;
