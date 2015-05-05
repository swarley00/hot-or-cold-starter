$(document).ready(function(){
	
	var newBtn = $(".new");
	var guessBtn = $("#guessButton");
	var count = $("#count");
	var feedBack = $("#feedback");
	var guessList = $("#guessList");
	var overlay = $(".overlay");
	var what = $(".what");
	var close = $("a.close");
	var randomNumber = generateNumber();
	var guessCount = 0;

	/*--- Display information modal box ---*/
  	what.click(function(){
    	overlay.fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	close.click(function(){
  		overlay.fadeOut(1000);
  	});

	newBtn.click(function () {
		newGame();
	}); 

	guessBtn.click(function () {
		event.preventDefault();
		feedback();
		count.text(guessCount);
		console.log("this is the random number" + randomNumber);
	});

	function newGame () {
		randomNumber = generateNumber();
		count.text(0);
		feedBack.text("Make your Guess!");
		guessCount = 0;
		guessList.empty();
		$("#userGuess").val('');
	}

	function generateNumber () {
		return Math.round((Math.random()*100));
	}

	function feedback () {
		var userGuess = $("#userGuess").val();
		var difference = Math.abs(userGuess - randomNumber);

		if (isNaN(userGuess)) {
			userGuess.val('');
			alert("Please use a number!");
		}
		else {
			guessCount++;

			guessList.prepend("<li>" + userGuess + "</li>");
		
			if (difference >= 50) {
				feedBack.text("Ice Cold");
			}
			else if (difference >= 30 && difference <= 50) {
				feedBack.text("Cold");
			}
			else if (difference >= 20 && difference <= 30) {
				feedBack.text("Warm");
			}
			else if (difference >= 10 && difference <= 20) {
				feedBack.text("Hot");
			}
			else if (difference >= 1 && difference <= 10) {
				feedBack.text("Very Hot");
			}
			else if (difference === 0) {
				feedBack.text("You Win!");
				if (window.confirm("You win! Do you want to start a new game?")) { 
  					newGame();
				}
			}
		}
	}
});