var handSize = 5;
var boardSize = 9;
var playerCards;
var cpuCards;
var boardCards;
var selectedCard = null;

module.exports = {
    getHandSize:function(){
        return handSize;
    },
    getBoardSize:function(){
        return boardSize;
    },
    getPlayerCard:function(index){
        return playerCards[index] || undefined;
    },
    getBoardCard:function(index){
        return boardCards[index] || undefined;
    },
    moveCardToBoard:function(index){
        boardCards[index] = playerCards[selectedCard];
        playerCards[selectedCard] = null;
        selectedCard = null;
        //Calculate neighbors
        //If full-> Calculate winner
    },
    selectBoardTile:function(index){
        if(selectedCard == null || boardCards[index]) return;
        this.moveCardToBoard(index);
    },
    selectCard:function(index){
        selectedCard = index;
    },
    deselectCard:function(index){
        selectedCard = null;
    },
    getSelectedCard:function(){
        return selectedCard ;
    },
    generateCards:function(){
        for (var i = 0; i < 5; i++) {
            var newCard = {
                id:i,
                top : Math.floor((Math.random() * 12) + 1),
                bottom : Math.floor((Math.random() * 12) + 1),
                left : Math.floor((Math.random() * 12) + 1),
                right : Math.floor((Math.random() * 12) + 1),
                color: "#5F7C88"
            };
            var newCpuCard = {
                id: boardSize + i,
                top : Math.floor((Math.random() * 12) + 1),
                bottom : Math.floor((Math.random() * 12) + 1),
                left : Math.floor((Math.random() * 12) + 1),
                right : Math.floor((Math.random() * 12) + 1),
                color: "#D8A194"
            };
            playerCards.push(newCard);
            cpuCards.push(newCpuCard);
        }
    },
    start:function(){
        playerCards = [];
        cpuCards = [];
        boardCards=[];
        this.generateCards();
    },
    restart:function(){
        playerCards = [];
        cpuCards = [];
        boardCards=[];
        selectedCard = null;
        this.start();
    }
}
