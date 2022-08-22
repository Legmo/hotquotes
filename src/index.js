import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './config/muiTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  // We use HashRouter for correct work with GitHub Pages hosting
  <HashRouter>
    <Provider store = {store}>
      <ThemeProvider theme = {theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>
);

registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
