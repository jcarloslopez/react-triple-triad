'use strict';

var React = require('react');
var Tile = require('./Tile');
var Game = require('./GameLogic');
var HTML5Backend = require('react-dnd/modules/backends/HTML5');
var DragDropContext = require('react-dnd').DragDropContext;


var Board = React.createClass({
	getInitialState: function() {
		return {}
	},
	render(){

		var style = {
			width: 330,
			margin:"0 auto",
			overflow: "hidden"
		}
		var boardCards = [];
		for (var i = 0; i < Game.getBoardSize(); i++) {
			var cardTile = Game.getBoardCard(i);
			if(cardTile){
				boardCards.push(<Tile id={i}><Card top={cardTile.top} bottom={cardTile.bottom} left={cardTile.left} right={cardTile.right} /></Tile>);
			}else{
				boardCards.push(<Tile id={i}></Tile>);
			}
		}
		return (
			< div style={style} >
				{boardCards}
			< /div>
		);
	}
});

module.exports = DragDropContext(HTML5Backend)(Board);