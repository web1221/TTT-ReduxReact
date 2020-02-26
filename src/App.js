import React from 'react';
import Game from './components/Game';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/ticTacToe-reducer'
import './App.css';

const store = createStore(reducer)

function App() {
  return (
    <div>
      <Provider store={store}>
        <Game />
      </Provider>
    </div>
  );
}

export default App;
