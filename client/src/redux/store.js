import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';
import thunk from 'redux-thunk'

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk)));
