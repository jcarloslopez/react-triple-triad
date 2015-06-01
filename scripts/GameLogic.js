var handSize = 5;
var boardSize = 9;
var playerCards;
var cpuCards;
var boardCards;
var selectedCard;
var colors = ["#D8A194","#5F7C88"];

module.exports = {
    getHandSize:function(){
        return handSize;
    },
    getBoardSize:function(){
        return boardSize;
    },
    getCpuCard:function(index){
        return cpuCards[index] || undefined;
    },
    getPlayerCard:function(index){
        return playerCards[index] || undefined;
    },
    getBoardCard:function(index){
        return boardCards[index] || undefined;
    },
    checkNeighbors:function(index){
        var abovePos = index - 3;
        var rightPos = index % 3 < 2 ? index + 1 : -1;
        var belowPos = index + 3;
        var leftPos = index % 3 > 0 ? index - 1 : -1;
        if(boardCards[abovePos] && boardCards[index] && boardCards[index].top > boardCards[abovePos].bottom && boardCards[index].color !== boardCards[abovePos].color) boardCards[abovePos].color = boardCards[index].color;
        if(boardCards[rightPos] && boardCards[index] && boardCards[index].right > boardCards[rightPos].left && boardCards[index].color !== boardCards[rightPos].color) boardCards[rightPos].color = boardCards[index].color;
        if(boardCards[belowPos] && boardCards[index] && boardCards[index].bottom > boardCards[belowPos].top && boardCards[index].color !== boardCards[belowPos].color) boardCards[belowPos].color = boardCards[index].color;
        if(boardCards[leftPos] && boardCards[index] && boardCards[index].left > boardCards[leftPos].right && boardCards[index].color !== boardCards[leftPos].color) boardCards[leftPos].color = boardCards[index].color;
    },
    cpuTurn:function(){
        var i = Math.floor((Math.random() * this.getHandSize()) + 1);
        while(boardCards[i]){
          i = Math.floor((Math.random() * this.getHandSize()) + 1);
          console.log(i);
        }

        //for (var i = 0; i < this.getBoardSize(); i++) {
         //   var ii = Math.floor((Math.random() * this.getHandSize()) + 1);
            if(!boardCards[i]){
                for (var j = 0; j < this.getHandSize(); j++) {
                    if(cpuCards[j]){
                        boardCards[i] = cpuCards[j];
                        cpuCards[j] = null;
                        this.checkNeighbors(i);
                        return;
                    }
                }
            }
       // }
    },
    checkWinner:function(){
        var playerCount = 0;
        var cpuCount = 0;
        for (var i = 0; i < boardCards.length; i++) {
            if(!boardCards[i]) return false;
            else if(boardCards[i].color == colors[0]) cpuCount++;
            else playerCount++;
        }
        console.log("Player: " + playerCount + " CPU: " + cpuCount);
        return playerCount + cpuCount == this.getBoardSize();
    },
    moveCardToBoard:function(index){
        boardCards[index] = playerCards[selectedCard];
        playerCards[selectedCard] = null;
        selectedCard = null;
        this.checkNeighbors(index);
        if(this.checkWinner()){
            return true;
        }
        this.cpuTurn();
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
                color: colors[1]
            };
            var newCpuCard = {
                id: boardSize + i,
                top : Math.floor((Math.random() * 12) + 1),
                bottom : Math.floor((Math.random() * 12) + 1),
                left : Math.floor((Math.random() * 12) + 1),
                right : Math.floor((Math.random() * 12) + 1),
                color: colors[0]
            };
            playerCards.push(newCard);
            cpuCards.push(newCpuCard);
        }
    },
    start:function(){
        playerCards = [];
        cpuCards = [];
        boardCards=[];
        selectedCard = null;
        this.generateCards();
    }
}
