"use strict";
//variables
//set the service fees for product line:
var standard = 0.1,
  premium = 0.13,
  excelium = 0.16;
//NEED TO PARSE THROUGH AND STORE IN VAR FOR LATER//
//////////////////////////////////////////////////////////

//get value of each radio button for use in following functions. saves time later
var sValue = parseFloat(document.getElementById("standard").value);
var pValue = parseFloat(document.getElementById("premium").value);
var eValue = parseFloat(document.getElementById("excelium").value);

//if else statement for picking building type
var buildingSelect = function () {
  if ($("#buildingType").val() == "Residential") {
    residential();
  } else if ($("#buildingType").val() == "Commercial") {
    commercial();
  } else if ($("#buildingType").val() == "Corporate") {
    corporate();
  } else if ($("#buildingType").val() == "Hybrid") {
    hybrid();
  }
};
//////////////////////////////////////////////////////////

//residential function
//make vars to store values of the options to use later with stated restrictions
//if else statement for each product line selected?
var residential = function () {
  //var section
  //get number of apartments
  var nbAppartment = parseFloat(document.getElementById("nbApartments").value);
  console.log(nbAppartment + " number of apartments");

  //get number of floors
  var nbFloor = parseFloat(document.getElementById("nbFloors").value);
  console.log(nbFloor + " number of floors");

  //calculate average doors per floor
  var avgPerFloor = Math.ceil(nbAppartment / nbFloor);
  console.log(avgPerFloor + " average doors per floor");

  //calc number of elevators needed
  var elevatorsNeeded = Math.ceil(avgPerFloor / 6);
  console.log("elevators needed is " + elevatorsNeeded);
  //calc number of elevator columns
  var nbElevatorColumns = Math.ceil(nbFloor / 20);
  console.log("elevator columns is " + nbElevatorColumns);
  ////////////////////////////////////////////////////
  //if else section
  //if standard is checked,
  if (document.getElementById("standard").checked) {
    console.log("standard is selected");
    if (nbFloor > 20) {
      elevatorsNeeded *= 2;
    }

    //price for elevator for standard
    var elevatorPrice = sValue;
    console.log("elevator price is " + elevatorPrice);
    //if nbFloor > 20, multiply the (AvgPerFloor/6) by 2
    //for total price of elevators
    var totalPrice = parseFloat(elevatorsNeeded * sValue);
    console.log("total price is " + totalPrice);

    //installation fees
    var iFees = totalPrice * standard;
    console.log("install fee is " + iFees);

    //final price
    var finalPrice = totalPrice + iFees;
    console.log("final price is " + finalPrice);

    //////////////////////////////////////////////////////////
    //if premium is checked,
  } else if (document.getElementById("premium").checked) {
    console.log("premium is selected");
    if (nbFloor > 20) {
      elevatorsNeeded *= 2;
    }
    var elevatorPrice = pValue;
    var totalPrice = parseFloat(elevatorsNeeded * pValue);
    var iFees = totalPrice * premium;
    var finalPrice = totalPrice + iFees;
  }
  //if excelium is checked,
  else if (document.getElementById("excelium").checked) {
    console.log("excelium is selected");
    if (nbElevatorColumns > 20) {
      elevatorsNeeded *= 2;
    }
    var elevatorPrice = eValue;
    var totalPrice = parseFloat(elevatorsNeeded * eValue);
    var iFees = totalPrice * excelium;
    var finalPrice = totalPrice + iFees;
  }

  //if nbFloor > 20, multiply the (AvgPerFloor/6) by 2
  //set unit price of each elevator
  //set total price of elevators
  //installation fees
  //final price
  document.getElementById("numberElevators").value = elevatorsNeeded;
  document.getElementById("unitPrice").value = elevatorPrice;
  document.getElementById("totalPrice").value = totalPrice;
  document.getElementById("installationFees").value = iFees;
  document.getElementById("finalPrice").value = finalPrice;
};

//////////////////////////////////////////////////////////
//commercial function
//if else statement for each product line selected?
var commercial = function () {};
//////////////////////////////////////////////////////////
//corporate function
//vars store values of options, emplace restrictions
//if else statement for each product line selected?
var corporate = function () {};
//////////////////////////////////////////////////////////
//hybrid function
//vars store option values, restrictions, etc.
//if else statement for each product line selected?
var hybrid = function () {};
//////////////////////////////////////////////////////////
//Ready Document
// $(document).ready(function () {
//   //should initially hide every option.
//   $(".options").hide();
//   //should hide all options except that with class of selected buildingType
//   $("#buildingType").change(function () {
//     //$(".options").hide();
//     $(".options." + $(this).val()).show();
//   });
//   //Is not working rn, but maybe need to finish rest of code first.
//   // input value of radiobutton into variable
// });

//////////////////////////////////////////////////////////
//alternate version of show/hide
//longer, but easy to understand

//   switch (true) {
//     case $(this).val() == "Residential":
//       $("#options").show();
//       $("#number-of-companies").hide();
//       $("#number-of-elevators").hide();
//       $("#number-of-corporations").hide();
//       $("#number-of-parking-spots").hide();
//       $("#maximum-occupancy").hide();
//       $("#business-hours").hide();
//       break;
//     case $(this).val() == "Commercial":
//       $("#options").show();
//       break;
//     case $(this).val() == "Corporate":
//       $("#options").show();
//       break;
//     case $(this).val() == "Hybrid":
//       $("#options").show();
//       $(".Uni").show();
//       $("#number-of-apartments").hide();
//       $("#number-of-elevators").hide();
//       $("#number-of-corporations").hide();
//       break;
//     default:
//       $("#options").hide();
//   }
//////////////////////////////////////////////////////////
//If Else Version Alternate
$("#buildingType").change(function () {
  if ($(this).val() == "Residential") {
    $("#options").show();
    $(".Uni").show();
    $("#number-of-apartments").show();
    $("#number-of-companies").hide();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").hide();
    $("#number-of-parking-spots").hide();
    $("#maximum-occupancy").hide();
    $("#business-hours").hide();
  } else if ($(this).val() == "Commercial") {
    $("#options").show();
    $(".Uni").show();
    $("#number-of-companies").show();
    $("#number-of-parking-spots").show();
    $("#maximum-occupancy").hide();
    $("#business-hours").hide();
    $("#number-of-elevators").show();
    $("#number-of-corporations").hide();
    $("#number-of-apartments").hide();
  } else if ($(this).val() == "Corporate") {
    $("#options").show();
    $(".Uni").show();
    $("#number-of-companies").hide();
    $("#number-of-parking-spots").show();
    $("#maximum-occupancy").show();
    $("#business-hours").hide();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").show();
    $("#number-of-apartments").hide();
    $("#number-of-elevators").hide();
  } else if ($(this).val() == "Hybrid") {
    $("#options").show();
    $(".Uni").show();
    $("#number-of-companies").show();
    $("#number-of-parking-spots").show();
    $("#maximum-occupancy").show();
    $("#business-hours").show();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").hide();
    $("#number-of-apartments").hide();
    $("#number-of-elevators").hide();
  } else {
    $("#options").hide();
  }
});
$("#buildingType").trigger("change");

//////////////////////////////////////////////////////////
