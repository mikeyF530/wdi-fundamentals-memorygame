console.log("Up and running!");
var cardOne = "Queen";


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "";
var cardFour = "";

cardsInPlay.push('queen');{

	console.log("User played queen");
}
cardsInPlay.push('king');{

	console.log("User played king");
}
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match!");
	}

	else {
		alert ("Sorry, try again!");
	}
}