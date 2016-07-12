/**
* Aristocrat class:
* base class used to create the main characters
* in the game, those who mostly interact with
* the players
**/

var Aristocrat = function(name, rank) {
	var testArguments = function () {
		if (typeof name != 'string' || typeof rank != 'number' ) {
			alert('invalid argument types, name: string, rank: number');
			return
		}
	}
	testArguments();
	this.name = name;
	this.rank = rank;
	//random friends or foes num on instatiation
	var initFriendsFoes = function() {
		return Math.floor(Math.random() * (10 - 0)) + 0;
	}
	//random boolean generator
	var initBoolGenerator = function() {
		var result = Math.random();
		if (result >= 0.5) {
			result = true;
		} else {
			result = false;
		}
		return result;
	}
	this.friends = initFriendsFoes();
	this.foes = initFriendsFoes();
	this.yourFriendOrFoe = initBoolGenerator(); 
}
