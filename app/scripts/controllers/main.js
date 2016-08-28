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
  	var Card = function(path){
  		this.path = path;
  		this.class = "";
  	}

  	Card.prototype.setClass = function(targetClass){
  		this.class = targetClass;
  	}

  	Card.prototype.getClass = function(){
  		return this.class;
  	}

  	Card.prototype.flip = function(){
  		if(this.class === "flipped"){
  			this.setClass("");
  		}else{
  			this.setClass("flipped");
  		}
  	}

  	Card.prototype.disable = function(){
  		this.setClass("flipped disable");
  	}

  	Card.prototype.getImagePath = function(){
  		return this.path;
  	}

  	var cardsArray =[];
	var cardPath = "../../images/"
	var numClicks = 0;
  	var cardChosen1 = "";
	var cardChosen2 = "";
	var cardChosen1Index;
	var cardChosen2Index;

  	
  	for(var i = 2; i <= 10; i++){
  		cardsArray.push(new Card(cardPath + i +".png"));
  		cardsArray.push(new Card(cardPath + i +".png"));
  	}
  	
	shuffle(cardsArray);
  	$scope.cards = cardsArray;
  	
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
	    	} else {
	    		setTimeout(function(){
	    			flip(cardChosen1Index);
	    			flip(cardChosen2Index);
	    			$scope.$apply();
  				}, 1000)
	    	}	
  		}
  	}

  	$scope.newGameOnClick = function(){
  		numClicks = 0;
  		cardChosen1;
		cardChosen2;
		cardChosen1Index;
		cardChosen2Index;
		for(var i = 0; i < $scope.cards.length; i++){
			$scope.cards[i].class = '';
		}
  		setTimeout(function(){
  			shuffle($scope.cards)
  			$scope.cards = $scope.cards;
  		}, 100);
  	}

  	function flip(id){
  		$scope.cards[id].flip();
  	}

  	function disable(id) {
  			$scope.cards[id].disable();
  	}

  });
