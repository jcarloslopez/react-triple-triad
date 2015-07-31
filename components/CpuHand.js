import React, { PropTypes, Component } from 'react';

export default class CpuHand extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  };

  render() {

    return (
      <div>
        {this.props.cards.map((card,i) => this.renderCard(card,i))}
      </div>
    );
  }

  renderCard(card,i) {

    if(card){
      const style = {margin:5,backgroundColor: card.color,width: 100,float: "left",height: 125,position: "relative",borderRadius: 5,cursor: "pointer",WebkitTransition: 'background-color 500ms linear',msTransition: 'background-color 500ms linear'};
      return  <div id={i} style={style} >
                < span style = {{ position: "absolute",fontSize: 15,left: "45%",top: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} >{card.top}< /span>
                < span style = {{ position: "absolute",fontSize: 15,left: "45%",bottom: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} >{card.bottom}< /span>
                < span style = {{ position: "absolute",fontSize: 15,top: "45%",left: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} >{card.left}< /span>
                < span style = {{ position: "absolute",fontSize: 15,top: "45%",right: 5,color: "#F7F9F4", WebkitUserSelect: "none"}} >{card.right}< /span>
              < /div>;
    }else{
       return  <div style={{backgroundColor: "#d9d9d9",width: 100,height: 125,float: "left",margin: 5,borderRadius:5}} ></div>
    }

  }
}
