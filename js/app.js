$(document).ready(function(){
	
	var newBtn = $(".new");
	var guessBtn = $("#guessButton");
	var randomNumber = generateNumber();

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

		if (difference >= 50) {
			console.log("Ice Cold");
		}
		else if (difference >= 30 && difference <= 50) {
			console.log("Cold");
		}
		else if (difference >= 20 && difference <= 30) {
			console.log("Warm");
		}
		else if (difference >= 10 && difference <= 20) {
			console.log("Hot");
		}
		else if (difference >= 1 && difference <= 10) {
			console.log("Very Hot");
		}
		else {
			console.log(difference);
		}
	}
});