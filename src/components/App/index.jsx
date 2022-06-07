import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import QuoteCard from '../QuoteCard';
import Sidebar_Container from '../Sidebar/Container';
// import Page_AddQuote_Container from '../Pages/Page_AddQuote/Container';
import RefreshBlock from '../RefreshBlock';
import Footer from '../PageFooter';
// import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

import tmp_store from './../../redux/redux-store'; //todo - temporary, for fix work QuoteCard with react-redux

const App = () => {
  /*  let page_index = () => {
    //todo: fix {tmp_store}!
    return (
      <div>
        <QuoteCard store={tmp_store} />
        <RefreshBlock />
      </div>
    );
  };
  let page_addQuote = () => {
    return <Page_AddQuote_Container />;
  };*/

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div>
                <QuoteCard store={tmp_store} />
                <RefreshBlock />
              </div>

              {/*              <Routes>
                <Route path="/index" render={page_index} />
                <Route path="/add_quote" render={page_addQuote} />
              </Routes>*/}
            </div>
            <Sidebar_Container />
          </div>
        </div>
        <div className="footer_pusher"></div>
      </div>
      <Footer />
    </>
  );
};

export default App;
