"use strict";
//This script should be separated into 4 parts: show/hide script, number of lift cages calculator,  budget calculator, and results output.
//If else statement for show/hide
$("#buildingType").change(function () {
  // Show only Residential Options
  if ($(this).val() == "Residential") {
    $("#mainOptions").show();
    $("#number-of-floors").show();
    // Show only Commercial Options
  } else if ($(this).val() == "Commercial") {
    $("#mainOptions").show();
    // Show only Corporate Options
  } else if ($(this).val() == "Corporate") {
    $("#mainOptions").show();
    // Show only Hybrid Options
  } else if ($(this).val() == "Hybrid") {
    $("#mainOptions").show();
    //Hide all options until user selects building type.
  } else {
    $("#options").hide();
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
