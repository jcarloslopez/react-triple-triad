import {handSize, boardSize, colors, maxCardValue} from '../constants/GameConstants';
import * as types from '../constants/ActionTypes';

export function generateHands() {

  const playerHand = [];
  const cpuHand = [];
  const boardCards = [];
  let size = boardSize;
  while(size--) boardCards[size] = null;
  for (let i = 0; i < 5; i++) {
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
      id: i,
      top: Math.floor((Math.random() * maxCardValue) + 1),
      bottom: Math.floor((Math.random() * maxCardValue) + 1),
      left: Math.floor((Math.random() * maxCardValue) + 1),
      right: Math.floor((Math.random() * maxCardValue) + 1),
      color: colors[0],
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

export function cpuTurn(){
  return (dispatch, getState) => {
    const { boardCards,cpuHand } = getState().game;

    const selectedCard = getCpuCard(cpuHand);
    const selectedBoardPosition = getBoardPosition(selectCard);
    setTimeout(() => {
      dispatch({
        type: types.CPU_TURN,
        selectedCard,
        selectedBoardPosition
      });
    }, 2000);

  };
}

function getCpuCard(cpuHand){
  let i = Math.floor((Math.random() * handSize));
  while(i == -1 || cpuHand[i] == null ) i = Math.floor((Math.random() * handSize));
  return i;
}

function getBoardPosition(selectedCard){
  return 6;
}