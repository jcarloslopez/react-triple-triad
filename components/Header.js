import React, { PropTypes, Component } from 'react';

export default class Header extends Component {
  static propTypes = {
    newGame: PropTypes.func.isRequired
  };

  render() {
    return (
      <header>
          <h1>Triple Triad</h1>
          <button onClick={this.props.newGame}>New Game</button>
      </header>
    );
  }
}
