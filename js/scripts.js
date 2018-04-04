var turnScores=[];


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

$(document).ready(function() {
  // $("#rollButton").submit(function(event) {
  //   event.preventDefault();
  //   console.log(roll());
  //   alert("submit works");
  // });

  $("#rollButton").click(function(){
    console.log("roll works");
    event.preventDefault();
    var temp=roll();
    $("#rollList").append("<li>" + temp+"</li>");
    console.log(temp);
    turnScores.push(temp);
    $("#rollList").text(updateTurnTotal());
  });


});

// This works
// $(document).ready(function() {
//   $("form#playForm").submit(function(event) {
//     event.preventDefault();
//     var temp=roll();
//     console.log(temp);
//   });
// });
