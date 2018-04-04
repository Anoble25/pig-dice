var turnScores=[];
var player1bank=0;
var player2bank=0;
var turnTotal;
var turnKeeper=1;


function newGame(){
  $("#player2ScoreCard").text("");
  $("#player1ScoreCard").text("");
}
function roll(){
  return Math.floor(Math.random()*6) + 1;
}

function updateTurnTotal(){
  var tempTotal=0;
  turnScores.forEach(function(num){
    tempTotal+=num;
  });
  return tempTotal;
}

function turnEnd(){
  turnTotal=0;
  temp=0;
  turnScores=[];
  $("#rollTotal").text("");
  $("#rollList").text("");
  $("#player1Notice").toggle();
  $("#player2Notice").toggle();
  turnKeeper++;
}

function checkWin(){
  if (turnKeeper%2==0&&player2bank+turnTotal>=100){
    alert("player 2 wins");
  }
  else if (turnKeeper%2==1&&player1bank+turnTotal>=100){
    alert("player 1 wins");
  }
  else{}
}

$(document).ready(function() {
  $("#rollButton").click(function(){
    event.preventDefault();
    var temp=roll();
    $("#rollList").append("<li>" + temp+"</li>");

    if (parseInt(temp)===1){
      alert("1 was rolled, no score");
      turnEnd();
    }

    else{
      turnScores.push(temp);
      turnTotal=updateTurnTotal();
      $("#rollTotal").text(turnTotal);
      checkWin();
    }
  });
  $("#holdButton").click(function(){
    event.preventDefault();
    if (turnKeeper%2==0){
      player2bank=player2bank+turnTotal;
      $("#player2ScoreCard").text(player2bank);
    }
    else{
      player1bank=player1bank+turnTotal;
      $("#player1ScoreCard").text(player1bank);
    }
    turnEnd();
  });



});
