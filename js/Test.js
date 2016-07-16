function sleep(milliseconds) {
	var currentTime = new Date().getTime();
	while(currentTime + milliseconds >= new Date().getTime()){
	}
}

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

//test for royal class
var Royals = function(){
	this.rank = 0;
	this.yourFriend;
	this.youDieOrLive = function(yourFriends, yourfoes) {
		if (!this.yourFriend) {
			if (yourfoes > yourFriends) {
				alert("I won't allow a troublemaker like you to devastate my court, you gotta be out of the way ASAP, PLEASE CHOP HIS HEAD OFF NOW!!!");
				alert("GAME OVER");
			}
			else if (yourfoes == yourFriends) {
				alert('I will give you a last chance to live, playing dice');
			if (this.playDice()) {
				alert('You saved your life but outta my kingdom NOW!!');
			} else {
				alert('PLEASE CHOP HIS HEAD OFF NOW!!!');
				alert('GAME OVER');}
			}
			else {
				alert('I never liked you but you have made friends here, I save you');
			}			
		}
		if (this.yourFriend) {
			if (yourfoes > yourFriends || yourfoes == yourFriends) {
				alert("I will give you a last chance to live, playing dice");
				if (this.playDice()) {
					alert("You don t have many friends but I trust you, YOU HAVE WON THE GAME!!");
				} else {
					alert('PLEASE CHOP HIS HEAD OFF NOW!!!');
					alert('GAME OVER');}
				} 
				else {
					alert("You can be a trustful person, my personal assistant, YOU HAVE WON THE GAME!!");
				}
			}
		};
	this.playDice = function() {
		alert("It's your chance to roll the dice, are you ready? ");
		var yourAttempt = Math.floor(Math.random() * 6) + 1;
		sleep(2000);
		var royalAttempt = Math.floor(Math.random() * 6) + 1;
		var message = "You scored " + yourAttempt + " royal scored " + royalAttempt;
		var diceResult;
		yourAttempt > royalAttempt ? (alert(message), diceResult = true) : (alert(message), diceResult = false);
		if (yourAttempt == royalAttempt) {
			alert("It is tie, let's play again!");
			this.playDice();
		}
		return diceResult;
	};	
}

function testRoyal(yourFriend){
	var royalTest1 = new Royals();
	royalTest1.yourFriend = yourFriend;
	royalTest1.youDieOrLive(10, 5);
	royalTest1.youDieOrLive(5 , 5);
	royalTest1.youDieOrLive(0, 5);
	var winDice = royalTest1.playDice();
	console.log("you win at dice! " + winDice.toString())
}

testRoyal(false);