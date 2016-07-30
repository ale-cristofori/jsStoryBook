/**
* Royals class:
* base class used to create the two other characters
* in the game king and queen.
**/
var Royals = function(){
	this.rank = 0;
	this.yourFriend;
	//function that decides on the life or death of the player
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
	//function that generates a random number between 1 and 6
	//mimic a dice game
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
};

/**
* King class:
* Royals sublclass, a male royal 
* with particular activities and properties
**/
function King() {
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
};

King.prototype = new Royals();

/**
* Queen class:
* Royals subclass, a female royal
* with particular activities and properties
**/
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

