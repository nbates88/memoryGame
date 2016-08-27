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
  	var cardChosen1Index;
  	var cardChosen2Index;
  	var cardChosen2 = "";
  	
  	$scope.cards = allCards;
  	$scope.isFlipped =[];
  	$scope.isDisabled=[];
  	
  	$scope.cardOnClick = function(cardPath, index){
  		numClicks++;
  
  		if(numClicks === 1){
  			flip(index);
  			cardChosen1 = cardPath;
  			cardChosen1Index = index;

  		} else if(numClicks === 2){
  			numClicks = 0;
  			flip(index);
  			cardChosen2 = cardPath;
  			cardChosen2Index = index;
  			
  			if (cardChosen1 === cardChosen2) {
		        disable(cardChosen1Index);
		        disable(cardChosen2Index);
	    	} else{
	    		setTimeout(function(){
	    			flip(cardChosen1Index);
	    			flip(cardChosen2Index);
  				// checkForMatch(cardChosen1, cardChosen2, cardChosen1Index, cardChosen2Index);
  				}, 500)
	    	}
  			
  		}
  	}

  	$scope.newGameOnClick = function(){
  		if($scope.isFlipped.length > 0){
  			for(var i = 0; i < $scope.isFlipped.length; i++){
  				console.log($scope.isFlipped[i])
  				$scope.isFlipped[i] = '';
  			}
  		}
  		setTimeout(function(){
  			shuffle(allCards)
  		}, 100);
  	}

  	function flip(id){
  		$scope.isFlipped[id] = $scope.isFlipped[id]=='flipped'?'':'flipped';
  		console.log($scope.isFlipped)
  	}

  	function disable(id) {
  		$scope.isDisabled[id] = $scope.isDisabled[id]=='disable'?'':'disable';
  		console.log($scope.isDisabled)
  	}

  	function checkForMatch(cardChosen1, cardChosen2, index1, index2) {
  		 numClicks = 0;
	    if (cardChosen1 === cardChosen2) {
	        disable(index1);
	        disable(index2);

	    } else {
	    	flip(index1);
	    	flip(index2);
		}
}

  });
