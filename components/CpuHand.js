import React, { PropTypes, Component } from 'react';

export default class CpuHand extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  // CPU MOVE?


  render() {
    return (
      <div>
        {this.props.cards.map(card =>
          <div onClick={this.handleClick}  style={{margin:5,backgroundColor: card.color,width: 100,float: "left",height: 125,position: "relative",borderRadius: 5,WebkitTransition: 'background-color 500ms linear',msTransition: 'background-color 500ms linear'}} >
            < span style = {{ position: "absolute",fontSize: 15,left: "45%",top: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} >{card.top}< /span>
            < span style = {{ position: "absolute",fontSize: 15,left: "45%",bottom: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} >{card.bottom}< /span>
            < span style = {{ position: "absolute",fontSize: 15,top: "45%",left: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} >{card.left}< /span>
            < span style = {{ position: "absolute",fontSize: 15,top: "45%",right: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} >{card.right}< /span>
          < /div>
        )}
      </div>
    );
  }
}
