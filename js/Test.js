//test for aristocrat class
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
};

function testAristocrat() {
	var aristocrat1 = new Aristocrat(20, 40);
	var aristocrat2 = new Aristocrat('Madame de Pompadour', 3);
	console.log("Hello my name is " + aristocrat2.name + " my rank is " + aristocrat2.rank + 
"  have " + aristocrat2.friends + " friends, " + aristocrat2.foes  + " foes and I am your friend: " + aristocrat2.yourFriendOrFoe);
}

testAristocrat();



