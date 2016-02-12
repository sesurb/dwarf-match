app.controller('GameController', function ($scope, $timeout, GameService) {
		//Create two card variables to keep track of the current selections
		$scope.card1 = null;
		$scope.card2 = null;
		//Add to $scope a way to track number of guesses, and total matches
		$scope.attempts = 0;
		$scope.totalMatches = 0;
		$scope.victory = false;
	
		//This is a freebie we are using the GameService to help keep our controller clean. The GameServie will be in charge of creating and shuffling the deck.
		$scope.deck = GameService.getDeck();
	
		//Write a function that accepts a card object on click.
		$scope.selectCard = function (card) {
				//Make this work
		};
			
	
		//write a function to resetCards
		//it will empty the two card variables above and increase the number of attempts
		$scope.resetCards = function () {
				$scope.card1 = null;
				$scope.card2 = null;
				$scope.attempts++;
		};
	
	
		//write a checkVictory function that will set $scope.victory = true if the totalMatches is half the length of the deck
		$scope.checkVictory = function () {
				if ($scope.totalMatches >= ($scope.deck.length / 2)) {
						$scope.victory = true;
				} else {
						$scope.victory = false;
				}
		}
		
		//write an isMatch function that accepts two cards and returns true or false if the card titles match.
		$scope.isMatch = function (x, y) {
				if (x.title === y.title) {
						$scope.totalMatches++;
						return true;
				} else {
						return false;
				}
		}
	
		//Bonus: Write a function that can reset the game
		$scope.reset = function () {
				$scope.victory = false;
				$scope.card1 = null;
				$scope.card2 = null;
				$scope.attempts = 0;
				$scope.totalMatches = 0;
				$scope.deck = GameService.getDeck();
		}

});
