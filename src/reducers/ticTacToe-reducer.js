import React from 'react';
import Board from './../components/Board';
import CalculateWinner from '../components/CalculateWinner'

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'TAKE_TURN':
    const squares = state.squares.slice();
    if (CalculateWinner(squares) || squares[action.location]) {
      return state;
    }
    squares[action.location] = state.xIsNext ? 'X' : 'O';
    const newState = Object.assign({}, state, {
      squares: squares,
      xIsNext: !state.xIsNext
    })

    return newState
    case 'RESTART_GAME':
      return initialState
    default:
      return state
  }

}

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};
