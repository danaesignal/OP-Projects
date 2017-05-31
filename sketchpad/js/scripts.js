var numBoxes = 16;
var hovColor = "rgb(208, 212, 219)"
var normColor = $("body").css("background-color");
$(document).ready(function(){
  for (i=0; i< numBoxes;i++){
    var offset=i+1;
    console.log("Test " + offset);
    $("#sketchpad").append("<div class='canvas'></div>");
  }
  $('.canvas').hover(function(){
    $(this).css("background-color", hovColor);
  });
});
