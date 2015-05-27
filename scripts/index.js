'use strict';

var React = require('react'),
    App = require('./app'),
    Game = require('./GameLogic');

Game.start();

React.render(<App />, document.body);
