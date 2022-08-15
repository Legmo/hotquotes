import React, { Component } from 'react';
import SidebarContainer from '../Elements/Sidebar/Container';
import Footer from '../Elements/Footer/Footer';
import style from './style.module.scss';
import { Route, Routes } from 'react-router-dom';
import PageIndexContainer from '../Pages/Quote/Container';
import PageTagsContainer from '../Pages/TagsList/Container';
import PageAddQuoteContainer from '../Pages/AddQuote/Container';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { compose } from 'redux';
import { withRouter } from '../../utils/withRouter';
import { getAllTC, getAllWitQuoteIdTC } from '../../redux/reducer-app';
import { getAppIsInitialized } from '../../redux/selectors';

type PropsType = {
  quoteId: string;
  appIsInitialized: boolean
  getAllTC: () => void,
  getAllWitQuoteIdTC: (quoteId:string) => void,
};
type MapDispatchPropsType = {
  getAllTC: () => void,
  getAllWitQuoteIdTC: (quoteId:string) => void,
};
type MapStatePropsType = {
  appIsInitialized: boolean,
};
type OwnPropsType = Record<string, never>;
const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return{
    appIsInitialized: getAppIsInitialized(state),
} ;
};

class App extends Component<PropsType> {
  componentDidMount() {
    //http://localhost:3000/quote/recDtXFMllCBs7ex2
    if (this.props.quoteId) {
      this.props.getAllWitQuoteIdTC(this.props.quoteId);
    } else {
      this.props.getAllTC();
    }
  }

  render() {
    return (
      <>
        <main className = {style.main}>
          <section className = {style.leftColumn}>
            <Routes>
              <Route path = '/' element = {<PageIndexContainer />} />
              <Route path = '/quote/:id' element = {<PageIndexContainer />} />
              <Route path = '/add_quote' element = {<PageAddQuoteContainer />} />
              <Route path = '/tags' element = {<PageTagsContainer />} />
            </Routes>
          </section>
          <SidebarContainer />
        </main>
        <Footer />
      </>
    );
  }
}

export default compose(
  withRouter,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      getAllTC:           getAllTC,
      getAllWitQuoteIdTC: getAllWitQuoteIdTC,
    }
  ),
)(App);
