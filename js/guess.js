// YOUR CODE GOES HERE
var randNumber = Math.floor(Math.random() * 100 + 1 );

function testGuess(guess, answer) {
  if (guess == answer) {
    var clue = guess + " is correct!";
  } else if (guess < answer) {
    var clue = guess + " is too low.";
  } else {
    var clue = guess + " is too high.";
  }
}

$(".guess_number").on("submit", function(event) {
  var guess = parseInt($("#guess"));
}

console.log(randNumber);
