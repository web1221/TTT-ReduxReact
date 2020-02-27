import React from 'react';
import Square from './Square';
import CalculateWinner from './CalculateWinner'
import { connect } from 'react-redux';

class Board extends React.Component {

  handleClick(i) {
    this.props.dispatch({
      type: 'TAKE_TURN',
      squares: this.props.squares,
      xIsNext: this.props.xIsNext,
      location: i
    })
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
   restartGame(){
    this.props.dispatch({
      type: 'RESTART_GAME',
      squares: this.props.squares,
      xIsNext: this.props.xIsNext,
    })
  }
  render() {
    const winner = CalculateWinner(this.props.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div>

        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button onClick={() => this.restartGame()}>Restart</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
squares: state.squares,
xIsNext: state.xIsNext,
})

export default connect(mapStateToProps)(Board);
