"use strict";
//If else statement
$("#buildingType").change(function () {
  if ($(this).val() == "Residential") {
    $("#residentialOptions").show();
    $("#commercialOptions").hide();
    $("#corporateOptions").hide();
    $("#hybridOptions").hide();
  } else if ($(this).val() == "Commercial") {
    $("#commercialOptions").show();
    $("#corporateOptions").hide();
    $("#hybridOptions").hide();
    $("#residentialOptions").hide();
  } else if ($(this).val() == "Corporate") {
    $("#corporateOptions").show();
    $("#hybridOptions").hide();
    $("#residentialOptions").hide();
    $("#commercialOptions").hide();
  } else if ($(this).val() == "Hybrid") {
    $("#hybridOptions").show();
    $("#residentialOptions").hide();
    $("#commercialOptions").hide();
    $("#corporateOptions").hide();
    //Hide all options untill user selects building type.
  } else {
    $("#residentialOptions").hide();
    $("#commercialOptions").hide();
    $("#corporateOptions").hide();
    $("#hybridOptions").hide();
  }
});
$("#buildingType").trigger("change");
