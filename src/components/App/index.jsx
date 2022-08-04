import React from 'react';
import SidebarContainer from '../Elements/Sidebar/Container';
import Footer from '../Elements/Footer/Footer';
import style from './style.module.scss';
import { Route, Routes } from 'react-router-dom';
import PageIndexContainer from '../Pages/Quote/Container';
import PageTagsContainer from '../Pages/TagsList/Container';
import PageAddQuoteContainer from '../Pages/AddQuote/Container';

const App = () => {
  return (
    <>
      <main className = {style.main}>
        <section>
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
};

export default App;
