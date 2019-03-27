//var answer = alert(prompt("name") + " " + prompt("age") + " " + prompt("food") + ".");

/*var add = function(number1, number2) {
  return number1 / (number2 * number2);
};

var number1 = parseInt(prompt("Enter kG:"));
var number2 = parseInt(prompt("Enter cm:"));

var result = add(number1, number2);
alert(result);*/

/*var farhenhiet = function(celcius) {
	return (celcius * 9 / 5) + 32;
};

var cel = prompt("Enter Celcuios");

alert(farhenhiet(cel));*/

/*var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};
*/

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#add").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = substract(number1, number2);
    $("#output").text(result);
  });
  $("form#add").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = miltiply(number1, number2);
    $("#output").text(result);
  });
    $("form#add").click(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      var result = divide(number1, number2);
      $("#output").text(result);
    });
  });
