import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Header from '../components/Header';
import Board from '../components/Board';
import PlayerHand from '../components/PlayerHand';
import CpuHand from '../components/CpuHand';
import * as GameActions from '../actions/GameActions';

export default class GameApp extends Component {
  render() {
    return (
      <Connector>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ game, dispatch }) {
    const actions = bindActionCreators(GameActions, dispatch);
    const style = {
        margin: "0 auto",
        width: 555
    };
    return (
      <div style={style}>
        <Header newGame={actions.generateHands} />
        <CpuHand cards={game.cpuHand} />
        <Board cards={game.boardCards} actions={actions} turn={game.turn} />
        <PlayerHand cards={game.playerHand} actions={actions} turn={game.turn} />
      </div>
    );
  }
}
