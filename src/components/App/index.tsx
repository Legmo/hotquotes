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
import PageError404 from '../Pages/Error404/PageAddQuote';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

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
    const {quoteId, getAllWitQuoteIdTC, getAllTC} = this.props;
    if (quoteId) {
      getAllWitQuoteIdTC(quoteId);
    } else {
      getAllTC();
    }
  }

  render() {
    return (
      <>
        <Box
          component = 'main'
          sx = {{
            paddingTop:    6,
            paddingBottom: 5,
          }}
        >
          <Container maxWidth = 'lg'>
            <Grid container spacing = {2}>
              <Grid xs = {12} sm = {8}>
                <section className = {style.leftColumn}>
                  <Routes>
                    {/*We can use redirect <Route path="/" element={<Navigate to="/quote" />} /> here*/}
                    <Route path = '/' element = {<PageIndexContainer />} />
                    <Route path = '/quote/:id' element = {<PageIndexContainer />} />
                    <Route path = '/add_quote' element = {<PageAddQuoteContainer />} />
                    <Route path = '/tags' element = {<PageTagsContainer />} />
                    <Route path = '*' element = {<PageError404 />} />
                  </Routes>
                </section>
              </Grid>
              <Grid xs = {12} sm = {4}>
                <SidebarContainer />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          sx = {{
            minHeight: 8,
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'end',
            overflowX: 'hidden',
            paddingBottom: '8px',
          }}
        >
            <Footer />
        </Box>
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
