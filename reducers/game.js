import { GENERATE_HANDS,SELECT_CARD } from '../constants/ActionTypes';

const initialState = {
  playerHand:[],
  cpuHand:[],
  boardCards:[]
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case GENERATE_HANDS:
      return {
        boardCards:action.boardCards,
        playerHand:action.playerHand,
        cpuHand:action.cpuHand
      };
    case SELECT_CARD:
    console.log(action.id);
      return{
        ...state,
        playerHand:state.playerHand.map(card =>
          card.id === action.id ? { ...card, isSelected: true } : { ...card, isSelected:false}
        )
      };

    default:
      return state;
  }
}
