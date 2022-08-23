import PageAddQuote from './PageAddQuote';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { getQuotesIsUpdating } from '../../../redux/selectors';

type MapStatePropsType = {
  quotesIsUpdating: boolean,
};
type MapDispatchPropsType = Record<string, never>;
type OwnPropsType = any; // todo: fix any. See at App.tsx

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    quotesIsUpdating: getQuotesIsUpdating(state),
  };
};

const PageAddQuoteContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps,
  {}
)(PageAddQuote);

export default PageAddQuoteContainer;
