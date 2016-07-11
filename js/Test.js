//test for aristocrat class
var Aristocrat = function(name,sex,rank) {
	this.name = name;
	this.sex = sex;
	this.rank = rank;
	//random friends or foes num on instatiation
	var initFriendsFoes = function() {
		return Math.floor(Math.random() * (10 - 0)) + 0;
	};
	//random boolean generator
	var initBoolGenerator = function() {
		var result = Math.random();
		if (result >= 0.5) {
			result = true;
		} else {
			result = false;
		}
		return result;
	};
	this.friends = initFriendsFoes();
	this.foes = initFriendsFoes();
	this.yourFriendOrFoe = initBoolGenerator(); 
};

var testAristocrat = new Aristocrat('Madame de Pompadour','female', 2);

console.log("Hello my name is " + testAristocrat.name + " and I am " + testAristocrat.sex + " my rank is " + testAristocrat.rank + 
"  have " + testAristocrat.friends + " friends, " + testAristocrat.foes  + " foes and I am your friend: " + testAristocrat.yourFriendOrFoe);
