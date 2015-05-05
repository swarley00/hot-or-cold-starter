$(document).ready(function(){
	
	var newBtn = $(".new");
	var guessBtn = $("#guessButton");
	var randomNumber = generateNumber();
	var guessCount = 0;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	newBtn.click(function () {
		newGame();
	}); 

	guessBtn.click(function () {
		event.preventDefault();
		feedback();
		$("#count").replaceWith("<span id='count'>" + guessCount + "</span>");
		console.log("this is guess #" + guessCount);
		console.log("this is the random number" + randomNumber);
	});

	function newGame () {
		randomNumber = generateNumber();
		$("#count").replaceWith("<span id='count'>" + 0 + "</span>");
		$("#feedback").replaceWith("<h2 id='feedback'>Make your Guess!</h2>");
		guessCount = 0;
		$("#guessList").empty();
		$("#userGuess").val('');
	}

	function generateNumber () {
		return Math.round((Math.random()*100));
	}

	function feedback () {

		var userGuess = $("#userGuess").val();
		var difference = Math.abs(userGuess - randomNumber);
		var feedBack = $("#feedback");
		var guessList = $("#guessList");
		var iceCold = "<h2 id='feedback'>Ice Cold</h2>";
		var cold = "<h2 id='feedback'>Cold</h2>";
		var warm = "<h2 id='feedback'>Warm</h2>";
		var hot = "<h2 id='feedback'>Hot</h2>";
		var veryHot = "<h2 id='feedback'>Very Hot</h2>";

		if (isNaN(userGuess)) {
			$("#userGuess").val('');
			alert("Please use a number!");
		}
		else {
			guessCount++;

			guessList.prepend("<li>" + userGuess + "</li>");
		
			if (difference >= 50) {
				feedBack.replaceWith(iceCold);
				console.log("Ice Cold");
			}
			else if (difference >= 30 && difference <= 50) {
				feedBack.replaceWith(cold);
				console.log("Cold");
			}
			else if (difference >= 20 && difference <= 30) {
				feedBack.replaceWith(warm);
				console.log("Warm");
			}
			else if (difference >= 10 && difference <= 20) {
				feedBack.replaceWith(hot);
				console.log("Hot");
			}
			else if (difference >= 1 && difference <= 10) {
				feedBack.replaceWith(veryHot);
				console.log("Very Hot");
			}
			else if (difference === 0) {
				feedBack.text("You Win!");
				console.log(difference);
				if (window.confirm("You win! Do you want to start a new game?")) { 
  					newGame();
				}
			}
		}
	}
});