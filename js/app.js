
$(document).ready(function(){
	
	var newBtn = $(".new");

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

});

function newGame () {
	generateNumber();
	feedback();
}

function generateNumber () {
	var randomNumber = Math.round((Math.random()*100));
	console.log(randomNumber);
	return randomNumber;
}

function feedback () {
	var userGuess = $("#userGuess").val();
	if (userGuess <= randomNumber - 50) {
		console.log("Ice Cold");
	}
	else if (userGuess > randomNumber - 30 && userGuess < randomNumber - 50) {
		console.log("Cold");
	}
	else if (userGuess > randomNumber - 20 && userGuess < randomNumber - 30) {
		console.log("Warm");
	}
	else if (userGuess > randomNumber - 10 && userGuess < randomNumber - 20) {
		console.log("Hot");
	}
	else if (userGuess > randomNumber - 1 && userGuess < randomNumber - 10) {
		console.log("Very Hot");
	}
}