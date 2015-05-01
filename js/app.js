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

  	newGame();

	newBtn.click(function () {
		newGame();
	}); 

	guessBtn.click(function () {
		event.preventDefault();
		feedback();
		guessCount++;
		$("#count").replaceWith("<span id='count'>" + guessCount + "</span>");
		console.log("this is guess #" + guessCount);
		console.log(randomNumber);
	});

	function newGame () {
		generateNumber();
	}

	function generateNumber () {
		return Math.round((Math.random()*100));
	}

	function feedback () {
		var userGuess = $("#userGuess").val();
		var difference = Math.abs(userGuess - randomNumber);
		var feedBack = $("#feedback");
		var iceCold = "<h2 id='feedback'>Ice Cold</h2>";
		var cold = "<h2 id='feedback'>Cold</h2>";
		var warm = "<h2 id='feedback'>Warm</h2>";
		var hot = "<h2 id='feedback'>Hot</h2>";
		var veryHot = "<h2 id='feedback'>Very Hot</h2>";

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
		else {
			console.log(difference);
		}
	}

// Increment guessCount by 1 every time the user hits enter. #count.replaceWith(incremented variable);
	// function guesses () {
	// 	var guessCount = 0;
	// 	var count = $("#count");
	// 	guessCount++;
	// 	count.replaceWith(guessCount);
	// }
});