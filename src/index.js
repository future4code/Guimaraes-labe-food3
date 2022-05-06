import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/router';
import GlobalStyle from './styles/GlobalStale';
import GlobalState from './Context/GlobalState'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalState>
      <Router />
    </GlobalState>
  </React.StrictMode>,
  document.getElementById('root')
);