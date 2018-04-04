function roll(){
  return Math.floor(Math.random()*6) + 1;
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
