import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/router';
import GlobalStyle from './styles/GlobalStale';
import GlobalState from './Context/GlobalState'
import GlobalRestaurantState from './Context/GlobalRestaurant/GlobalRestaurantState'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalState>
      <GlobalRestaurantState>
        <Router />
      </GlobalRestaurantState>
    </GlobalState>
  </React.StrictMode>,
  document.getElementById('root')
);