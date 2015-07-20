import {handSize, boardSize, colors, maxCardValue} from '../constants/GameConstants';
import * as types from '../constants/ActionTypes';

export function generateHands() {

  const playerHand = [];
  const cpuHand = [];
  const boardCards = [];
  var size = boardSize;
  while(size--) boardCards[size] = null;
  for (var i = 0; i < 5; i++) {
    playerHand.push({
      id: i,
      top: Math.floor((Math.random() * maxCardValue) + 1),
      bottom: Math.floor((Math.random() * maxCardValue) + 1),
      left: Math.floor((Math.random() * maxCardValue) + 1),
      right: Math.floor((Math.random() * maxCardValue) + 1),
      color: colors[1],
      isSelected:false
    });

    cpuHand.push({
      id: boardSize + i,
      top: Math.floor((Math.random() * maxCardValue) + 1),
      bottom: Math.floor((Math.random() * maxCardValue) + 1),
      left: Math.floor((Math.random() * maxCardValue) + 1),
      right: Math.floor((Math.random() * maxCardValue) + 1),
      color: colors[0],
      isSelected:false
    });
  }

  return {
    type: types.GENERATE_HANDS,
    cpuHand,
    playerHand,
    boardCards
  };
}

export function selectCard(id){
  return {
    type: types.SELECT_CARD,
    id
  };
}

export function placeCard(id){
  return {
    type: types.PLACE_CARD,
    id
  };
}

export function foo(id){
  return {
    type: types.CPU_TURN,
    id:0
  };
}

export function cpuTurn(){

  return (dispatch, getState) => {
    const { boardCards,cpuHand } = getState();

    //const selectedCpuCardPosition= getCpuCard(boardCards,cpuHand);

    dispatch(foo());
  };
}
