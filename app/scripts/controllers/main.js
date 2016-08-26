'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
  .controller('MainCtrl', function ($scope) {
  	var cardTwo="../../images/2.png";
  	var cardThree="../../images/3.png";
  	var cardFour="../../images/4.png";
  	var cardFive="../../images/5.png";
  	var cardSix="../../images/6.png";
  	var cardSeven="../../images/7.png";
  	var cardEight="../../images/8.png";
  	var cardNine="../../images/9.png";
  	var cardTen="../../images/10.png";
  	var cards = [cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight, cardNine, cardTen];
  	var allCards = cards.concat(cards)
  	var numClicks = 0;
  	var cardChosen1 = "";
  	var cardChosen2 = "";
  	

  	$scope.cards = allCards;
  	
  	$scope.cardOnClick = function(cardPath){
  		numClicks++;
  		flip();
  		if(numClicks === 1){
  			cardChosen1 = cardPath;
  		} else if(numClicks === 2){
  			cardChosen2 = cardPath;
  			checkForMatch(cardChosen1, cardChosen2);
  			numClicks = 0;
  		}
  	}

  	$scope.newGameOnClick = function(){
  		shuffle(allCards);
  	}



  });


// "../../images/2.png", "../../images/3.png", "../../images/4.png", "../../images/5.png", 
//   	"../../images/6.png", "../../images/7.png", "../../images/8.png", "../../images/9.png", "../../images/10.png"