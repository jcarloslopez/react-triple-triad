import React, { PropTypes, Component } from 'react';

export default class Board extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    turn: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  };

  handleClick(e) {
    const props = this.props;
    if(this.props.turn == 1){
      this.props.actions.placeCard(e.target.id);
      setTimeout(function(){props.actions.cpuTurn();},2000);
    }
  }

  render() {
    var style = {
      width: 330,
      margin:"0 auto",
      overflow: "hidden"
    }

    return (
      <div style={style}>
        {this.props.cards.map((card,i) => this.renderCard(card,i) )}
      </div>
    );
  }

  renderCard(card,i) {
    if(card){
      return  <div style={{margin:5,backgroundColor: card.color,width: 100,float: "left",height: 125,position: "relative",borderRadius: 5,cursor: "pointer",WebkitTransition: 'background-color 500ms linear',msTransition: 'background-color 500ms linear'}} >
                <span style = {{ position: "absolute",fontSize: 15,left: "45%",top: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} > {card.top} < /span>
                <span style = {{ position: "absolute",fontSize: 15,left: "45%",bottom: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} > {card.bottom} < /span>
                <span style = {{ position: "absolute",fontSize: 15,top: "45%",left: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} > {card.left} < /span>
                <span style = {{ position: "absolute",fontSize: 15,top: "45%",right: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} > {card.right} < /span>
              </div>
    }else{
      return  <div style={{backgroundColor: "#d9d9d9",width: 100,height: 125,float: "left",margin: 5,borderRadius:5}} id={i} onClick={::this.handleClick}></div>
    }
  }
}
