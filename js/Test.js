function sleep(milliseconds) {
	var currentTime = new Date().getTime();
	while(currentTime + milliseconds >= new Date().getTime()){
	}
}

/**test for aristocrat class**/
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

//testAristocrat();

/**test for royal class**/
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

//testRoyal(false);

/**test for queen class**/
function Queen(){	
	var answersObj = new Object();
	var evaluateAnswers = function(sumAnswers) {
		if (sumAnswers <= 7) {
			alert("this is not good my friend");
		} else {
			alert("this is good you might win the game");
		}
	}
	var handleConversation = function (i = 1) {
		switch (i) {
			case 1:
				alert("So my subject, what do you think about last week Mademoiselle Rupert's party? Did you enjoy it?");
				var radioButtonsFirst = $([
					"<form id='questions'>", 
					"<input type='radio' value='0' name='answer-1'>party?!? I was not invited. <br>",
					"<input type='radio' value='3' name='answer-1'>The party was great and Mademoiselle, what a pretty and mannered woman!! <br>",
					"<input type='radio' value='1' name='answer-1'>I was there but I the best think to do in that party was to drink, to forget to be there!!ah ah <br><br>",
					"<input type='button' id='answer-button-1' value='Answer'><br>",
					"</form>"
				].join("\n"));	
				var yourResponseFirst = $('#radio-buttons').append(radioButtonsFirst);
				$(document).on('click', '#answer-button-1', function(){
					var answerNum = $('#questions > input:checked').attr('name');
					var answerVal = $('#questions > input:checked').attr('value');
					answersObj[answerNum] = answerVal;
					$('#questions').remove();
					handleConversation(2);
				});
				break;
			case 2:
				alert("Inferior, What do you think of the last laws approved by Minister Colbert?");
				var radioButtonsSecond = $([
					"<form id='questions'>", 
					"<input type='radio' value='0' name='answer-2'>Totally agree with his decisions to help the poorest people<br>",
					"<input type='radio' value='2' name='answer-2'>Absolutely rubbish, Does he want poor people to become part of us?<br>",
					"<input type='radio' value='3' name='answer-2'>I know him very well and it was me the person behind the policy!!<br><br>",
					"<input type='button' id='answer-button-2' value='Answer'><br>",
					"</form>"
				].join("\n"));
				var yourResponseSecond = $('#radio-buttons').append(radioButtonsSecond);
				$(document).on('click', '#answer-button-2', function(){
					var answerNum = $('#questions > input:checked').attr('name');
					var answerVal = $('#questions > input:checked').attr('value');
					answersObj[answerNum] = answerVal;
					$('#questions').remove();
					handleConversation(3);
				});
				break;
			case 3:
				alert("Inferior, And what about Madame de Pompadour, do you think she should be put out of the way");
				var radioButtonsThird = $([
					"<form id='questions'>", 
					"<input type='radio' value='0' name='answer-3'>No, although she might come across as ambigous I don't think she is a threat<br>",
					"<input type='radio' value='3' name='answer-3'>Of course Madam, here I have some poison in case you need it<br>",
					"<input type='radio' value='5' name='answer-3'>Yes, we should create a scandal to sully his reputation<br><br>",
					"<input type='button' id='answer-button-3' value='Answer'><br>",
					"</form>"
				].join("\n"));
				var yourResponseThird = $('#radio-buttons').append(radioButtonsThird);
				var yourResponseSecond = $('#radio-buttons').append(radioButtonsSecond);
				$(document).on('click', '#answer-button-3', function(){
					var answerNum = $('#questions > input:checked').attr('name');
					var answerVal = $('#questions > input:checked').attr('value');
					answersObj[answerNum] = answerVal;
					$('#questions').remove();
					var sumAnswers = 0;
					for (key in answersObj) {
						sumAnswers += Number(answersObj[key]);
					}
					evaluateAnswers(sumAnswers);
				});
				break;
			default:
			alert("ERROR");
			break;
		};
	}
	this.name = "Reine Marie Antoinette";
	this.age = 26;
	this.sex = 'female';
	this.conversation = handleConversation;
	//other functions here
};
Queen.prototype = new Royals();

function testQueen() {
	var queenTest = new Queen();
	queenTest.conversation();
};

testQueen();
