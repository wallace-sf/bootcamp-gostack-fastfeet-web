import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

import './config/Reactotron';

import history from '~/services/history';
import Routes from '~/routes';
import GlobalStyles from '~/styles/global';
import store from '~/store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <ToastContainer autoClose={4000} />
      </Router>
    </Provider>
  );
}

export default App;
