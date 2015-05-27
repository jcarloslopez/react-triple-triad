'use strict';

var React = require('react');
var Game = require('./GameLogic');

var Card = React.createClass({
	propTypes:{
		id:React.PropTypes.number,
		top: React.PropTypes.number,
		bottom: React.PropTypes.number,
		left: React.PropTypes.number,
		right: React.PropTypes.number
	},
	getInitialState: function() {
		return {}
	},
	handleClick:function(e){
		e.preventDefault();
		//Unselectable if fixed
		this.props.onSelectCard(this.props.id);
	},
	render() {

		var style = {
			backgroundColor: Game.getPlayerCard(this.props.id).color,
			width: 100,
			float: "left",
			height: 125,
			position: "relative",
			borderRadius: 5,
			cursor: "pointer"
		}
		if(Game.getSelectedCard() === this.props.id) style.border = "1px solid red";
		else	style.border = undefined;

		return (
			<div onClick={this.handleClick}  style={style} >
			< span style = {{	position: "absolute",fontSize: 15,left: "45%",top: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} > {this.props.top} < /span>
			< span style = {{	position: "absolute",fontSize: 15,left: "45%",bottom: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} > {this.props.bottom} < /span>
			< span style = {{	position: "absolute",fontSize: 15,top: "45%",left: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} > {this.props.left} < /span>
			< span style = {{	position: "absolute",fontSize: 15,top: "45%",right: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} > {this.props.right} < /span>
			< /div>);
	}
});

module.exports = Card;