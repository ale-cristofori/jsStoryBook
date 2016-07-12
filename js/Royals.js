/**
* Royals class:
* base class used to create the two other characters
* in the game king and queen.
**/

var Royals = function(){
	this.rank = 0;
	this.yourFriend;
	this.youDieOrLive = function(yourFriends, yourfoes) {
		if (!this.yourFriend) {
			if (yourfoes > yourFriends) {
				alert("I won't allow a troublemaker like you to devastate my court, you gotta be out of the way ASAP, PLEASE CHOP HIS HEAD OFF NOW!!!");
				alert("GAME OVER");
			}
			if (yourfoes == yourFriends) {
				alert('I will give you a last chance to live, playing dice');
			if (this.playDice()) {
				alert('You saved your life but outta my kingdom NOW!!');
			} else {
				alert('PLEASE CHOP HIS HEAD OFF NOW!!!');
				alert('GAME OVER');}
			}
			else{
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
				alert("You can be a trustful person, my personal assistant, YOU HAVE WON THE GAME!!");}
			}
		};
	this.playDice = function() {
		do {
			var yourAttempt = prompt("roll the dice!!, number between 1 and 6");
			}
		while (typeof yourAttempt != 'number');
		var royalAttempt = Math.floor(Math.random() * 6) + 1;
		while(yourAttempt == royalAttempt) {
			alert("I rolled the same number try again!");
			this.playDice();
		}
		if (yourAttempt < royalAttempt) {
			return false;
		}
		else {
			return true;
		}
	};	
}

/**
* King class:
* Royals sublclass, a male royal 
* with particular activities and properties
**/
function King () {
	
	
	this.name = "Roi Louis XVI";
	this.age = 38;
	this.sex = 'male';
	this.horseRiding = function() {
	var desire = Math.random();
	if (desire > 0.5) {
		alert('I hate horse riding, ' + 
		'this is something you should know ' +
		'if you want to be my friend!');
		} else {
		alert('deffo my dear friend, I love horses, let''s go')
		};
	}
}

King.prototype = new Royals();
