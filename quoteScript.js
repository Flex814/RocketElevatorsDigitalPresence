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
  //get nbAppartment
  var nbAppartment = parseFloat(document.getElementById("nbApartments").value);
  console.log(nbAppartment);

  //get nbFloor
  var nbFloor = parseFloat(document.getElementById("nbFloors").value);
  console.log(nbFloor);

  //calculate nbAppartment/nbFloor and store in var AvgPerFloor

  //calc AvgPerFloor/6 for the amount of elevators needed

  //calc nbFloor / 20 to obtain nbElevatorShafts
  ////////////////////////////////////////////////////
  //if standard is checked,
  //if nbFloor > 20, multiply the (AvgPerFloor/6) by 2
  //set price per elevator
  //
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

$("#buildingType").change(function () {
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
