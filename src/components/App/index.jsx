import React from 'react';
import QuoteCard from '../QuoteCard';
import SidebarContainer from '../Sidebar/Container';
import RefreshBlock from '../RefreshBlock';
import Footer from '../PageFooter';
import style from './style.module.scss';
// import './style.scss';
// import Page_AddQuote_Container from '../Pages/Page_AddQuote/Container';

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
      <main className={style.content}>
        <section>
          <QuoteCard store={tmp_store} />
          <RefreshBlock />
          <div>{/*<CategoriesList categories={categoryListUniq}/>*/}</div>
        </section>

        {/*
          <Routes>
            <Route path="/index" render={page_index} />
            <Route path="/add_quote" render={page_addQuote} />
          </Routes>
        */}
        <SidebarContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
