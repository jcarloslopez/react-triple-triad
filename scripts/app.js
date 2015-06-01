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
        Game.start();
        this.forceUpdate();
    },
	render() {

		var cpuCards = [];
		for (var i = 0; i < Game.getHandSize(); i++) {
			var cpuCard = Game.getCpuCard(i);
			if(cpuCard) cpuCards.push(<Card id={i+Game.getHandSize()} top={cpuCard.top} bottom={cpuCard.bottom} left={cpuCard.left} right={cpuCard.right} color={cpuCard.color} />);
		}

        var handCards = [];
        for (var i = 0; i < Game.getHandSize(); i++) {
            var cardTile = Game.getPlayerCard(i);
            if(cardTile) handCards.push(<Card id={i} onSelectCard={this.handleSelectCard} top={cardTile.top} bottom={cardTile.bottom} left={cardTile.left} right={cardTile.right} color={cardTile.color} />);
        }

        var boardCards = [];
        for (var i = 0; i < Game.getBoardSize(); i++) {
            var boardCardTile = Game.getBoardCard(i);
            if(boardCardTile){
                boardCards.push(<Tile id={i} onTileSelect={this.handleSelectTile} ><Card id={boardCardTile.id} placed top={boardCardTile.top} bottom={boardCardTile.bottom} left={boardCardTile.left} right={boardCardTile.right} color={boardCardTile.color} /></Tile>);
            }else{
                boardCards.push(<Tile id={i} onTileSelect={this.handleSelectTile} ></Tile>);
            }
        }

    	return (
         <div style={{textAlign:"center",fontFamily: 'Lato',  maxWidth: 600, margin: "auto",WebkitUserSelect: "none"}}>
         	<h1>TRIPLE TRIAD</h1>
            <button onClick={this.handleRestart}>Restart</button>
            <div style={{minWidth: "100%",minHeight:100,textAlign:"center"}}>
            {cpuCards}
            </div>
         	<div style={{width: "64%", margin:"0 auto",overflow: "hidden",marginTop: 50}}>
            {boardCards}
            </div>
         	<div style={{width: "100%",minHeight:100,textAlign:"center",marginTop:25}}>
         	{handCards}
         	</div>
         </div>
    	);
	}
});

module.exports = App;