"use strict";
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
//calculator
//init to 0
$("#numberElevators").val("0");
$("#unitPrice").val("0$");
$("#totalPrice").val("0$");
$("#installationFees").val("0$");
$("#finalPrice").val("0$");

//getProductLinePrice() finds unit price of each elevator based on product line chosen.

//product line array
var product_prices = new Array();
product_prices["standard"] = 7565;
product_prices["premium"] = 12345;
product_prices["excelium"] = 15400;

var theForm = document.forms["priceForm"];
//Take user selection from radio buttons.
function getProductLinePrice() {
  var unitPrice = 0;
  //get reference to form id="unitPrice"
  var theForm = document.forms["priceForm"];
  //get reference to product line user chooses name="radio-btn"
  var radioBtn = theForm.elements["radio-btn"];
  //loop through radio btns
  for (var i = 0; i < radioBtn.length; i++) {
    //if radio btn checked
    if (radioBtn[i].checked) {
      //set unitPrice to value of checked radio btn using previous array
      unitPrice = product_prices[radioBtn[i].value];
      //stop loop after value found
      break;
    }
  }
  return unitPrice;
}
