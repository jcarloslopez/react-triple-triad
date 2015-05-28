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
        if(Game.getSelectedCard() == index){
            Game.deselectCard();
        }else{
            Game.selectCard(index);
        }
		this.forceUpdate();
	},
    handleSelectTile:function(index){
        Game.selectBoardTile(index);
        this.forceUpdate();
    },
    handleRestart:function(){
        Game.restart();
        this.forceUpdate();
    },
	render() {

		var handCards = [];
		for (var i = 0; i < Game.getHandSize(); i++) {
			var cardTile = Game.getPlayerCard(i);
			if(cardTile) handCards.push(<Card id={i} onSelectCard={this.handleSelectCard} top={cardTile.top} bottom={cardTile.bottom} left={cardTile.left} right={cardTile.right} />);
		}

        var boardCards = [];
        for (var i = 0; i < Game.getBoardSize(); i++) {
            var boardCardTile = Game.getBoardCard(i);
            if(boardCardTile){
                boardCards.push(<Tile id={i} onTileSelect={this.handleSelectTile} ><Card id={boardCardTile.id} placed top={boardCardTile.top} bottom={boardCardTile.bottom} left={boardCardTile.left} right={boardCardTile.right} /></Tile>);
            }else{
                boardCards.push(<Tile id={i} onTileSelect={this.handleSelectTile} ></Tile>);
            }
        }

    	return (
         <div style={{textAlign:"center",fontFamily: 'Lato'}}>
         	<h1>TRIPLE TRIAD</h1>
            <button onClick={this.handleRestart}>Restart</button>
         	<div style={{width: 330, margin:"0 auto",overflow: "hidden"}}>
            {boardCards}
            </div>
         	<div style={{margin: "0 auto",width: 555, marginTop: 50}}>
         	{handCards}
         	</div>
         </div>
    	);
	}
});

module.exports = App;