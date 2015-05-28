'use strict';

var React = require('react');
var Game = require('./GameLogic');

var Tile = React.createClass({
	getInitialState: function() {
		return {}
	},
	handleClick: function(e){
		e.preventDefault();
		this.props.onTileSelect(this.props.id);
	},
	render() {
		var style = {
			  backgroundColor: "#d9d9d9",
			  width: 100,
			  height: 125,
			  float: "left",
			  margin: 5,
			  borderRadius:5
		}
		return ( <div style={style} onClick={this.handleClick} >{this.props.children}</div>);
	}
});

module.exports = Tile;