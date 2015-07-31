import { GENERATE_HANDS,SELECT_CARD,PLACE_CARD,CPU_TURN } from '../constants/ActionTypes';

const initialState = {
  playerHand:[],
  cpuHand:[],
  boardCards:[],
  turn:1
};

export default function game(state = initialState, action) {
  console.log(state);
  switch (action.type) {

    case GENERATE_HANDS:
      return {
        turn:1,
        boardCards:action.boardCards,
        playerHand:action.playerHand,
        cpuHand:action.cpuHand
      };

    case SELECT_CARD:
      return{
        ...state,
        playerHand:state.playerHand.map(card => card && card.id == action.id ? { ...card, isSelected: true } : card && card.hasOwnProperty("isSelected") ? { ...card, isSelected:false} : null )
      };

    case PLACE_CARD:
      const selectedCardPosition = state.playerHand.map(function(e) { return e && e.isSelected; }).indexOf(true);
      if(selectedCardPosition == -1) return state;
      else{
        return{
          ...state,
          turn:2,
          boardCards: state.boardCards.map((place,id) => id == action.id ? state.playerHand[selectedCardPosition] : place ),
          playerHand: state.playerHand.map(card => card && card.id == selectedCardPosition ? null : card )
        };
      }

    case CPU_TURN:
      console.log(action.id);
      return {
        ...state,
        turn:1,
        boardCards: state.boardCards.map((place,id) => id == action.selectedBoardPosition ? state.cpuHand[action.selectedCard] : place ),
        cpuHand: state.cpuHand.map(card => card && card.id == action.selectedCard ? null : card )
      };

    default:
      return state;
  }
}
