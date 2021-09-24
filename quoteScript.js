"use strict";
//If else statement
$("#buildingType").change(function () {
  // Show only Residential Options
  if ($(this).val() == "Residential") {
    $("#residentialOptions").show();
    $("#commercialOptions").hide();
    $("#corporateOptions").hide();
    $("#hybridOptions").hide();
    // Show only Commercial Options
  } else if ($(this).val() == "Commercial") {
    $("#commercialOptions").show();
    $("#corporateOptions").hide();
    $("#hybridOptions").hide();
    $("#residentialOptions").hide();
    // Show only Corporate Options
  } else if ($(this).val() == "Corporate") {
    $("#corporateOptions").show();
    $("#hybridOptions").hide();
    $("#residentialOptions").hide();
    $("#commercialOptions").hide();
    // Show only Hybrid Options
  } else if ($(this).val() == "Hybrid") {
    $("#hybridOptions").show();
    $("#residentialOptions").hide();
    $("#commercialOptions").hide();
    $("#corporateOptions").hide();
    //Hide all options until user selects building type.
  } else {
    $("#residentialOptions").hide();
    $("#commercialOptions").hide();
    $("#corporateOptions").hide();
    $("#hybridOptions").hide();
  }
});
//Makes if else statements work on buildingType change.
$("#buildingType").trigger("change");

//calculator
