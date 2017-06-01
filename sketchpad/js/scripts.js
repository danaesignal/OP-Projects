$(document).ready(function(){
  var initSize = 4;
  var hovColor = "rgb(0, 0, 0)"
  var normColor = $("body").css("background-color");
  var defineCanvas = function(canvasSide){
    var canvasArea = canvasSide * canvasSide;
    var cellSide = $("#sketchpad").width()/canvasSide;
    return [canvasArea, cellSide];
  };
  var buildCanvas = function(canvasArray){
    $("#sketchpad").empty();
    for (i=0; i< canvasArray[0];i++){
      $("#sketchpad").append("<div class='canvas'></div>");
    }
    $(".canvas").css("width",canvasArray[1]);
    $(".canvas").css("height",canvasArray[1]);
    $('.canvas').hover(function(){
      $(this).css("background-color", hovColor);
    });
  };
  var drawingSpace = defineCanvas(initSize);
  buildCanvas(drawingSpace);
  $("#reset-button").click(function(){
    $(".canvas").css("background-color",normColor);
    drawingSpace = defineCanvas(prompt("How many squares per side on your new canvas?"));
    buildCanvas(drawingSpace);
  });
});
