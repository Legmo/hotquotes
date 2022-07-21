import React from 'react';
import SidebarContainer from '../Elements/Element_Sidebar/Container';
import Footer from '../Elements/Element_PageFooter';
import style from './style.module.scss';
import { Route, Routes } from 'react-router-dom';
import PageIndexContainer from '../Pages/Page_Index/Container';
import PageTagsContainer from '../Pages/Page_Tags/Container';
import PageAddQuoteContainer from '../Pages/Page_AddQuote/Container';

const App = () => {
  return (
    <>
      <main className = {style.main}>
        <section>
          <Routes>
            <Route path = '/' element = {<PageIndexContainer />} />
            <Route path = '/add_quote' element = {<PageAddQuoteContainer />} />
            <Route path = '/tags' element = {<PageTagsContainer />} />
          </Routes>
        </section>
        <SidebarContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
