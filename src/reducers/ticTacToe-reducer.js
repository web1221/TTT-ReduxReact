import React from 'react';
import Board from './../components/Board';
import CalculateWinner from './../components/CalculateWinner';

export default (state = {}, action) => {
  switch (action.type) {
    case 'TAKE_TURN':
    const history = action.history.slice(0, state.stepNumber + 1);
    const current = action.history[action.history.length - 1];
    const winner = CalculateWinner(current.squares)
    const squares = current.squares.slice();
    // if (CalculateWinner(squares) || squares[action.location]) {
    //   return state;
    // }
    let newState = Object.assign({}, {
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });

    squares[action.location] = state.xIsNext ? 'X' : 'O';

    console.log('Location: ' + action.location);
    console.log(newState);
    return newState
    default:
      return state
  }

}
