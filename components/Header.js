import React, { PropTypes, Component } from 'react';

export default class Header extends Component {
  static propTypes = {
    newGame: PropTypes.func.isRequired
  };

  render() {
    const style = {
      textAlign: "center",
      marginBottom: 50
    };

    return (
      <header style={style}>
          <h1>Triple Triad</h1>
          <button onClick={this.props.newGame}>New Game</button>
      </header>
    );
  }
}
