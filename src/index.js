import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/router';
import GlobalStyle from './styles/GlobalStale';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);