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
    return (
      <div>
        <Header newGame={actions.generateHands} />
        <CpuHand cards={game.cpuHand} actions={actions} />
        <Board cards={game.boardCards} actions={actions} />
        <PlayerHand cards={game.playerHand} actions={actions} />
      </div>
    );
  }
}
