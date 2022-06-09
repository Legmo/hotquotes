import React from 'react';
import QuoteCard from '../QuoteCard';
import Sidebar_Container from '../Sidebar/Container';
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
      <main>
        <div className={style.content}>
          <div className={style.container}>
            <section className={style.mainContent}>
              <QuoteCard store={tmp_store} />
              <RefreshBlock />
              <div className="d-block text-center mt-2">
                {/*<CategoriesList categories={categoryListUniq}/>*/}
              </div>
            </section>

            {/*              <Routes>
                  <Route path="/index" render={page_index} />
                  <Route path="/add_quote" render={page_addQuote} />
                </Routes>*/}
            <Sidebar_Container />
          </div>
          <div className={style.footer_pusher}></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
