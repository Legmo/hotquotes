import React from 'react';
import SidebarContainer from '../Elements/Element_Sidebar/Container';
import Footer from '../Elements/Element_PageFooter';
import style from './style.module.scss';
import { Route, Routes } from 'react-router-dom';
import Page_Index_Container from '../Pages/Page_Index/Container';
import Page_Tags_Container from '../Pages/Page_Tags/Container';
import Page_AddQuote_Container from '../Pages/Page_AddQuote/Container';

const App = () => {
  return (
    <>
      <main className = {style.main}>
        <section>
          <Routes>
            <Route path = '/' element = {<Page_Index_Container />} />
            <Route path = '/add_quote' element = {<Page_AddQuote_Container />} />
            <Route path = '/tags' element = {<Page_Tags_Container />} />
          </Routes>
        </section>
        <SidebarContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
