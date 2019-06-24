import ReactDOM from 'react-dom';
import React from 'react';
import history from './history';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

import Catalogue from './containers/Catalogue';
import { Provider } from "react-redux";
import { persistor, store } from './store/configureStore';

import './style.scss';


const container = document.querySelector('#react-app');
ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Router history={history}>
      <Catalogue />
    </Router>
  </PersistGate>
</Provider>, container);
