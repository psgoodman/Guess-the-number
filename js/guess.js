var randNumber = Math.floor(Math.random() * 100 + 1 );

function testGuess(guess, answer) {
  if (isNaN(guess)) {
    var clue = "You must guess a number. Try again!"
  }
    else if (guess == answer) {
    var clue = guess + " is correct!";
  } else if (guess < answer) {
    var clue = guess + " is too low.";
  } else {
    var clue = guess + " is too high.";
  }
  return clue;
}

$(".guess_number").on("submit", function(event) {
  var guess = parseInt($("#guess").val());
  // debugger;
  $("ul").append("<li>" + testGuess(guess, randNumber) + "</li>");
  return false;
})
