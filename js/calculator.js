$(document).ready(function() {

  //set variables
  var display = "";
  var lastAnswer = 0;

  //add numbers to display
  $(".entry-button").click(function() {
    display = display + $(this).attr("value");
    $("#display").html(display);
  });

  //equals
  $("#equals").click(function() {
    lastAnswer = eval(display);
    display = lastAnswer;
    $("#display").html(display);
  });

  //decimal point
  $("#point").click(function() {
    display = display.toString();
    if (display.charAt(display.length - 1) !== ".") {
      display = display + ".";
      $("#display").html(display);
    }
  });

  //arithmetic buttons
  $(".arithmetic-button").click(function() {
    display = display.toString();
    if ((display.charAt(display.length - 1) === "+") || (display.charAt(display.length - 1) === "-") || (display.charAt(display.length - 1) === "/") || (display.charAt(display.length - 1) === "%") || (display.charAt(display.length - 1) === "*")) {
      display = display.slice(0, -1) + $(this).attr("value");
      $("#display").html(display);
    } else {
      display = display + $(this).attr("value");
      $("#display").html(display);
    }
  });

  //Clear button
  $("#C").click(function() {
    display = "";
    lastAnswer = 0;
    $("#display").html(display);
  });

  //plus minus button
  $("#plusMinus").click(function() {
    if (display[0] === "-") {
      display = display.substr(1);
    } else {
      display = "-" + display;
    }
    $("#display").html(display);
  });
});
