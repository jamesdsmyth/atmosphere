import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './reducers/CombinedReducers';
import Initial from './components/App';

require('./styles/styles.scss');

render(
  <Provider store={Store}>
    <Initial />
  </Provider>
  , document.getElementById('root'));