import { connect } from 'react-redux';
import QuoteCard from './QuoteCard';

const mapStateToProps = (state) => {
  return {
    //todo Прокидывать не весь store, а нужную ветку
    quotes: state.quotes,
  };
};

const mapDispatchToProps = () => {
  return {
    //todo Прописать нужные dispatch
  };
};

const QuoteCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteCard);

export default QuoteCardContainer;
