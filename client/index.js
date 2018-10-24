import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import styles from './scss/application.scss';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(
  app, document.getElementById('root')
);

module.hot.accept(['./components/App.js', './scss/application.scss'], () => {
  const NextApp = require('./components/App').default;
  render(
    <NextApp />, document.getElementById('root')
  );
});

