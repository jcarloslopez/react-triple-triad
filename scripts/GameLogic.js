var handSize = 5;
var boardSize = 9;
var playerCards = []; // {top,bottom,left,right,color}
var cpuCards = [];
var boardCards=[];
var selectedCard = null;

module.exports = {
    getHandSize:function(){
        return handSize;
    },
    getBoardSize:function(){
        return boardSize;
    },
    compareNear: function(){
        return true;
    },
    getPlayerCard:function(index){
        return playerCards[index] || undefined;
    },
    getBoardCard:function(index){
        return boardCards[index] || undefined;
    },
    selectCard:function(index){
        selectedCard = index;
    },
    getSelectedCard:function(){
        return selectedCard ;
    },
    setPlayerCards:function(cards){
        playerCards = cards;
    },
    generateCards:function(){
        for (var i = 0; i < 5; i++) {
            var newCard = {
                top : Math.floor((Math.random() * 12) + 1),
                bottom : Math.floor((Math.random() * 12) + 1),
                left : Math.floor((Math.random() * 12) + 1),
                right : Math.floor((Math.random() * 12) + 1),
                color: "#5F7C88",
                fixed: false
            };
            playerCards.push(newCard);
        }
    },
    start:function(){
        this.generateCards();
        //Generate cpuCards?
    }
}
