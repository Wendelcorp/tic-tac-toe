$(function() {
  // Handler for .ready() called.

var turnCounter = 0

var sqOne = $("#one");
var sqTwo = $("#two");
var sqThree = $("#three");
var sqFour = $("#four");
var sqFive = $("#five");
var sqSix = $("#six");
var sqSeven = $("#seven");
var sqEight = $("#eight");
var sqNine = $("#nine");

  $(".squares").on("click", function(){
    if ($(this).text() === "") {
      turnCounter++;
      if (turnCounter % 2 === 0) {
        $(this).text("o");
      }
      else {
        $(this).text("x");
      }}

    else {
      alert("choose an empty space");
    }

      console.log(sqOne)
      console.log(sqSeven)
      if (sqOne.text() === "x" && sqTwo.text() === "x" && sqThree.text() === "x") {
        alert("X Wins!")
        }
      if (sqOne.text() === "o" && sqTwo.text() === "o" && sqThree.text() === "o") {
        alert("O Wins!")
        }
      if (sqFour.text() === "x" && sqFive.text() === "x" && sqSix.text() === "x") {
        alert("X Wins!")
        }
      if (sqFour.text() === "o" && sqFive.text() === "o" && sqSix.text() === "o") {
        alert("O Wins!")
        }
      if (sqSeven.text() === "x" && sqEight.text() === "x" && sqNine.text() === "x") {
        alert("X Wins!")
        }
      if (sqSeven.text() === "o" && sqEight.text() === "o" && sqNine.text() === "o") {
        alert("O Wins!")
        }
      if (sqOne.text() === "x" && sqFive.text() === "x" && sqNine.text() === "x") {
        alert("X Wins!")
        }
      if (sqOne.text() === "o" && sqFive.text() === "o" && sqNine.text() === "o") {
        alert("O Wins!")
        }
      if (sqThree.text() === "x" && sqFive.text() === "x" && sqSeven.text() === "x") {
        alert("X Wins!")
        }
      if (sqThree.text() === "o" && sqFive.text() === "o" && sqSeven.text() === "o") {
        alert("O Wins!")
        }
      if (sqOne.text() === "x" && sqFour.text() === "x" && sqSeven.text() === "x") {
        alert("X Wins!")
        }
      if (sqOne.text() === "o" && sqFour.text() === "o" && sqSeven.text() === "o") {
        alert("O Wins!")
        }
      if (sqTwo.text() === "x" && sqFive.text() === "x" && sqEight.text() === "x") {
        alert("X Wins!")
        }
      if (sqTwo.text() === "o" && sqFive.text() === "o" && sqEight.text() === "o") {
        alert("O Wins!")
        }
      if (sqThree.text() === "x" && sqSix.text() === "x" && sqNine.text() === "x") {
        alert("X Wins!")
        }
      if (sqThree.text() === "o" && sqSix.text() === "o" && sqNine.text() === "o") {
        alert("O Wins!")
        }
  })


});
