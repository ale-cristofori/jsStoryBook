var Aristocrat = function(name,sex,rank) {
	var testArguments = function () {
		if (typeof name != 'string' || typeof sex != 'string' || typeof rank != 'number' ) {
			alert('submitted types not allowed. '
			'name: string, sex: string, rank: number');
			return
		}
	}
	this.name = name;
	this.sex = sex;
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

function testAristocrat() {
	aristocrat1 = new Aristocrat(20,30,40);
	aristocrat2 = new Aristocrat('Madame de Pompadour', 'female', 3);
}