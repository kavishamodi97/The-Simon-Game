
var buttonColours=["red","blue","green","yellow"];

var level=0;

var started=false;

var gamePattern=[];

var userClickedPattern=[];

$(".btn").click(function(){
 var userChosenColour=$(this).attr("id");

 userClickedPattern.push(userChosenColour);

 console.log(userClickedPattern);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
 audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


function checkAnswer(currentLevel){

   if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){

     console.log("Suceess!");
   }

   if (userClickedPattern.length === gamePattern.length){
       setTimeout(function () {
         nextSequence();
       }, 1000);

     }

    else{
      console.log("Wrong!");
      playSound("wrong");

     $("body").addClass("game-over");
     setTimeout(function () {
       $("body").removeClass("game-over");
     }, 200);


     $("#level-title").text("Game Over, Press Any Key to Restart");
    }

}



function nextSequence() {

  level++;

  $("#level-title").text("Level " + level);

var randomNumber=Math.floor(Math.random() * 4); //0-3

var randomChosenColor=buttonColours[randomNumber];

gamePattern.push(randomChosenColor);

 $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColour);

}

function startOver() {

  level = 0;
  gamePattern = [];
  started = false;
}
