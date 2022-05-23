import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/router';
import GlobalState from './Context/GlobalState/GlobalState'
import GlobalOrder from './Context/OrderContent/GlobalOrder'


ReactDOM.render(
  <React.StrictMode>
    <GlobalOrder>
      <GlobalState>
        <Router />
      </GlobalState>
    </GlobalOrder>
  </React.StrictMode>,
  document.getElementById('root')
);