"use strict";
//This script should be separated into 4 parts: show/hide script, number of lift cages calculator,  budget calculator, and results output.
//If else statement for show/hide
$("#buildingType").change(function () {
  // Show only Residential Options
  if ($(this).val() == "Residential") {
    $("#number-of-apartments").show();
    $("#number-of-floors").show();
    $("#number-of-basements").show();
    $("#number-of-parking-spots").hide();
    $("#number-of-companies").hide();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").hide();
    $("#maximum-occupancy").hide();
    $("#business-hours").hide();
    // Show only Commercial Options
  } else if ($(this).val() == "Commercial") {
    $("#number-of-apartments").hide();
    $("#number-of-floors").show();
    $("#number-of-basements").show();
    $("#number-of-parking-spots").show();
    $("#number-of-companies").show();
    $("#number-of-elevators").show();
    $("#number-of-corporations").hide();
    $("#maximum-occupancy").hide();
    $("#business-hours").hide();
    // Show only Corporate Options
  } else if ($(this).val() == "Corporate") {
    $("#number-of-apartments").hide();
    $("#number-of-floors").show();
    $("#number-of-basements").show();
    $("#number-of-parking-spots").show();
    $("#number-of-companies").hide();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").show();
    $("#maximum-occupancy").show();
    $("#business-hours").hide();
    // Show only Hybrid Options
  } else if ($(this).val() == "Hybrid") {
    $("#number-of-apartments").hide();
    $("#number-of-floors").show();
    $("#number-of-basements").show();
    $("#number-of-parking-spots").show();
    $("#number-of-companies").show();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").hide();
    $("#maximum-occupancy").show();
    $("#business-hours").show();
    //Hide all options until user selects building type.
  } else {
    $("#number-of-apartments").hide();
    $("#number-of-floors").hide();
    $("#number-of-basements").hide();
    $("#number-of-parking-spots").hide();
    $("#number-of-companies").hide();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").hide();
    $("#maximum-occupancy").hide();
    $("#business-hours").hide();
  }
});
//Makes if else statements work on buildingType change.
$("#buildingType").trigger("change");
//////////////////////////////////////////////////////////
//number of lift cages calculator

//////////////////////////////////////////////////////////
//budget calculator

//////////////////////////////////////////////////////////
//results output
