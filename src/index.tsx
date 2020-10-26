import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';

import store from './store';

const container = document.getElementById('projet');

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  )
