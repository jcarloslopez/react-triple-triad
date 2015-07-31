import React, { Component } from 'react';
import GameApp from './GameApp';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <GameApp /> }
      </Provider>
    );
  }
}
