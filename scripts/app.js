'use strict';

var React = require('react');
var Board = require('./Board')
var Tile = require('./Tile');
var Card = require('./Card');
var Game = require('./GameLogic');

var App = React.createClass({
	getInitialState: function() {
		return {}
	},
	handleSelectCard:function(index){
		Game.selectCard(index);
		this.forceUpdate();
	},
	render() {
		var handCards = [];

		for (var i = 0; i < Game.getHandSize(); i++) {
			var cardTile = Game.getPlayerCard(i);
			if(cardTile){
				handCards.push(<Tile id={i}><Card id={i} onSelectCard={this.handleSelectCard} top={cardTile.top} bottom={cardTile.bottom} left={cardTile.left} right={cardTile.right} /></Tile>);
			}else{
				handCards.push(<Tile id={i}></Tile>);
			}
		}
    	return (
         <div style={{textAlign:"center"}}>
         	<h1>TRIPLE TRIAD</h1>
         	<Board />
         	<div style={{margin: "0 auto",width: 550, marginTop: 50}}>
         	{handCards}
         	</div>
         </div>
    	);
	}
});

module.exports = App;