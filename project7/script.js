var target = 0;
var guesses = [];
var prevGuess = 0;

var generateRandNum = function (){
  target = Math.floor(Math.random() * 100 + 1);
};

generateRandNum();

var updatePrevGuess = function(){
  prevGuess = guesses[guesses.length - 1];
};

var inputValidator = function(){
  guesses.push($('#number-input').val());
  updatePrevGuess();
  var repeat = false;
  for(var i =0; i < guesses.length -1; i++){
    if(guesses[i] === guesses[guesses.length -1]){
      repeat = true;
    }
  }
  var num = parseInt(prevGuess);
  if(num < 0 || num > 100){
    alert('Try guessing again');
    resetInputBox();

    guesses.splice(-1,1);
  } else if(repeat == true){
    alert('Guess again');
      //Removes last guess
      guesses.splice(-1,1);
      resetInputBox();
  } else {
    lowOrHigh();
  }
};

$('#submit-btn').on('click', inputValidator);
$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        inputValidator();
    }
});

var changeHelperText = function(text){
  $('#helper-text').text(text);
};


var lowOrHigh = function(){
  var lowHigh = '';
  var range = Math.abs(target - prevGuess);
  if(prevGuess < target)
    lowHigh = 'higher.';
  if(prevGuess > target)
    lowHigh = 'lower.';
  if(range >0 && range <=5){
    changeHelperText("Try guessing a little " + lowHigh);
  }
  if(range >5 && range <=10){
     changeHelperText("Try guessing " + lowHigh);
  }
  if(range >10 && range <=15){
    changeHelperText("Try guessing " + lowHigh);
  }
  if(range >15 && range <=25){
    changeHelperText("Try guessing " + lowHigh);

  }
  if(range >25){
    changeHelperText("Try guessing a lot " + lowHigh);
  }

    resetInputBox();
    guessTracker();
    displayPrevGuesses();

    console.log(target);
    console.log(guesses);
    console.log(prevGuess);
};


var resetInputBox = function(){
  document.getElementById("guessing-form").reset();
};

var guessTracker = function(){
  var guessNum = guesses.length;
  $('#guesses-remaining').text(5 - guessNum);
  if(prevGuess == target){
      prizeGenerator();
  } else{
      if(guessNum === 5){
        alert("Sorry you failed to guess the answer! The number was " + target);
        startOver();
      }
  }
};

var displayPrevGuesses = function(){
  var guessStr ='';
  if(guesses.length == 1){
     for(var i =0; i < guesses.length; i++){
      guessStr += guesses[i] + ' ';
     }
    $('#prev-guesses').append("<p id='prev-guess-text'>Your previous guesses are: \n" +guessStr + "</p>");
  } else if(guesses.length > 1){
    for(var i =0; i < guesses.length; i++){
      guessStr += guesses[i];
      if(i < guesses.length - 1){
        guessStr += ', ';
      }
     }
    $('#prev-guess-text').text("Your previous guesses are: \n" +guessStr);
  }
};

var startOver = function(){
  guesses = [];
  generateRandNum();
  resetBackground('white');
  $(".hide-me").show();
  $('#prev-guesses').empty();
  changeHelperText('Enter a guess from 1-100. Guess right to win a prize!');
  $('#guesses-remaining').text(5);
  $("#prize-image").children('img').remove();
};

var giveHint = function(){
  var strTarget = target.toString();
  var hintNum = '';
  if(strTarget.length == 1){
    hintNum = 'single digits.';
  } else if(strTarget.length == 2){
    hintNum = target.toString()[0] + '0s.';
  } else if(strTarget.length == 3){
    hintNum = target.toString()[0] + '00s.';
  }
  alert("Here's a hint...the number is somehwere in the " + hintNum);
};

$('#startover-btn').on('click', startOver);
$('#hint-btn').on('click', giveHint);

var prizeGenerator = function(){
  alert('You win! Click OK to see your prize');
}

