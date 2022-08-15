import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

// todo: переделать это на нормальный хук useLocation в src/components/App/index.tsx и src/components/Pages/Quote/Container.tsx
export const withRouter = (WrappedComponent:any) => function addRouterData(props:any){ // todo: fix this 'any'!
  const location = useLocation();
  const params = useParams();

  let idFromPathname;
  if (location.pathname.includes('/quote/')) {
    idFromPathname = location.pathname.replace('/quote/', '');
  }
  const quoteId = (!isEmpty(params) && params.id) ? params.id : idFromPathname;
  return (
    <WrappedComponent {...props} location = {location} params = {params} quoteId = {quoteId}/>
  );
};