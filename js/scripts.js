var turnScores=[];
var turnTotal;
var turnKeeper=1;

var player1=new Player("Falcor", 0);
var player2=new Player("Nola", 0);
var dice=new Dice(6);

function Player (name, bank){
  this.name=name;
  this.bank=bank;
}

function Dice(max){
  this.max=max;
}

Dice.prototype.roll=function(){
  return Math.ceil(Math.random()*6);
}

function newGame(){
  $("#player2ScoreCard").text("0");
  $("#player1ScoreCard").text("0");
  turnTotal=0;
  temp=0;
  turnScores=[];
  player1.bank=0;
  player2.bank=0;
  $("#rollTotal").text("0");
  $("#rollList").text("");
  $("#player1Notice").show();
  $("#player2Notice").hide();
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
  if (turnKeeper%2==0&&player2.bank+turnTotal>=100){
    alert("player 2 wins");
  }
  else if (turnKeeper%2==1&&player1.bank+turnTotal>=100){
    alert("player 1 wins");
  }
  else{}
}

function startGame(){
  $("#namePage").hide();
  $("#playStart").toggle();
  $("#player1Notice").prepend(player1.name);
  $("#player2Notice").prepend(player2.name);
}

$(document).ready(function() {
  $("#submitNameButton").click(function(){
    player1.name=$("#nameBox1").val();
    player2.name=$("#nameBox2").val();
    startGame();
  });

  $("#rollButton").click(function(){
    event.preventDefault();
    var temp=dice.roll();
    $("#rollList").text("Last Roll: " + temp);

    if (parseInt(temp)===1){
      turnEnd();
      $("#rollList").text("one was rolled, no score");
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
      player2.bank=player2.bank+turnTotal;
      $("#player2ScoreCard").text(player2.bank);
    }
    else{
      player1.bank=player1.bank+turnTotal;
      $("#player1ScoreCard").text(player1.bank);
    }
    turnEnd();
  });

  $("#newGame").click(function(){
    event.preventDefault();
    newGame();
  });



});
