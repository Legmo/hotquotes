import React from 'react';
import QuoteCardContainer from '../QuoteCard/Container';
import SidebarContainer from '../Sidebar/Container';
import Footer from '../PageFooter';
import style from './style.module.scss';
import { Route, Routes } from 'react-router-dom';
import Page_AddQuote_Container from '../Pages/Page_AddQuote/Container';

const App = () => {
  return (
    <>
      <main className={style.main}>
        <section>
          <Routes>
            <Route path="/" element={<QuoteCardContainer />} />
            <Route path="/add_quote" element={<Page_AddQuote_Container />} />
          </Routes>
        </section>
        <SidebarContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
