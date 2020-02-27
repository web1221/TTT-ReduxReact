import React from 'react';
import Board from './Board';
import CalculateWinner from './CalculateWinner'
import { connect } from 'react-redux'


class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { dispatch } = this.props

    const action = {
      type: 'TAKE_TURN',
      history: [{
        squares: Array(9).fill(null),
      }],
      location: i,
      stepNumber: 0,
      xIsNext: true,
    }
    dispatch(action)
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {

    console.log(getState());
    const history = history;
    const current = history[this.state.stepNumber];
    const winner = CalculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move # ' + move :'Go to game start';
      return (
        <li key={move}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner) {
      status = 'Winner!: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
      <div className="game-board">
      <Board
      squares={current.squares}
      onClick={(i) => this.handleClick(i)}
      />
      </div>
      <div className="game-info">
      <div>{ status }</div>
      <ol>{ moves }</ol>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,

  }
}

Game = connect(mapStateToProps)(Game)
export default Game;
