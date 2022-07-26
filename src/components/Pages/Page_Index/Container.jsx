import React from 'react';
import { connect } from 'react-redux';
import PageIndex from './PageIndex';
import {
  setQuotes,
  setQuotesIsFetching
} from '../../../redux/reducer-quotes';
import { setAuthors } from '../../../redux/reducer-authors';
import { setSources } from '../../../redux/reducer-sources';
import { setTags } from '../../../redux/reducer-tags';
import { useLocation, useParams } from 'react-router-dom';

//todo: переделать это на нормальный хук useLocation в функциональной компоненте
const withRouter = WrappedComponent => function addRouterData(props){
  const location = useLocation();
  const params = useParams();
  return (
    <WrappedComponent {...props} location = {location} params = {params}/>
  );
};

const mapStateToProps = (state) => {
  return {
    quotes:  state.quotes,
    tags:    state.tags.tags,
    authors: state.authors.authors,
    sources: state.sources.sources,
  };
};

let WithUrlDataComponent = withRouter(PageIndex);

const PageIndexContainer = connect(
  mapStateToProps,
  {
    setQuotes,
    setAuthors,
    setTags,
    setSources,
    setQuotesIsFetching,
  }
)(WithUrlDataComponent);

export default PageIndexContainer;
