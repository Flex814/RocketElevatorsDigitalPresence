"use strict";
//variables
//set the service fees for product line:
var standard = 0.1,
  premium = 0.13,
  excelium = 0.16;
//NEED TO PARSE THROUGH AND STORE IN VAR FOR LATER//
//////////////////////////////////////////////////////////

//if else statement for picking building type
function buildingSelect() {
  if ($("#buildingType").val() == "Residential") {
    residential();
  } else if ($("#buildingType").val() == "Commercial") {
    commercial();
  } else if ($("#buildingType").val() == "Corporate") {
    corporate();
  } else if ($("#buildingType").val() == "Hybrid") {
    hybrid();
  }
}
//////////////////////////////////////////////////////////
//residential function
//make vars to store values of the options to use later with stated restrictions
//if else statement for each product line selected?
const residential = function () {
  //get nbAppartment
  //get nbFloor
  //calculate nbAppartment/nbFloor and store in var AvgPerFloor
  //calc AvgPerFloor/6 for the amount of elevators needed
  //calc nbFloor / 20 to obtain nbElevatorShafts
};
//////////////////////////////////////////////////////////
//commercial function
//if else statement for each product line selected?
const commercial = function () {};
//////////////////////////////////////////////////////////
//corporate function
//vars store values of options, emplace restrictions
//if else statement for each product line selected?
const corporate = function () {};
//////////////////////////////////////////////////////////
//hybrid function
//vars store option values, restrictions, etc.
//if else statement for each product line selected?
const hybrid = function () {};
//////////////////////////////////////////////////////////
//Ready Document
$(document).ready(function () {
  //should initially hide every option.
  $(".options").hide();
  //should hide all options except that with class of selected buildingType
  $("#buildingType").change(function () {
    //$(".options").hide();
    $(".options." + $(this).val()).show();
  });
  //Is not working rn, but maybe need to finish rest of code first.
  // input value of radiobutton into variable
});

//////////////////////////////////////////////////////////
//alternate version of show/hide
// $("#buildingType").change(function () {
//   if ($(this).val() == "select") {
//     $("#options").hide();
//   } else {
//     $("#options").show();
//   }
// });
// $("#buildingType").trigger("change");

//////////////////////////////////////////////////////////
