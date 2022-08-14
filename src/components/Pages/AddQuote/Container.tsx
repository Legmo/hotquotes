import PageAddQuote from './PageAddQuote';
import {connect} from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { InitialQuoteStateType } from '../../../redux/reducer-quotes';

type MapStatePropsType = {
  quotes: InitialQuoteStateType, //todo: test - is it correct?
};
type MapDispatchPropsType = Record<string, never>;
type OwnPropsType = any; // todo: fix any. See at App.tsx

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    quotes: state.quotes,
  };
};

const PageAddQuoteContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps,
  {}
)(PageAddQuote);

export default PageAddQuoteContainer;
