"use strict";
//variables
//set the service fees for product line:
let standard = 0.1,
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

//////////////////////////////////////////////////////////
//commercial function
//if else statement for each product line selected?

//////////////////////////////////////////////////////////
//corporate function
//vars store values of options, emplace restrictions
//if else statement for each product line selected?

//////////////////////////////////////////////////////////
//hybrid function
//vars store option values, restrictions, etc.
//if else statement for each product line selected?

//////////////////////////////////////////////////////////
//Ready Document
//calculator
//init to 0
// $("#numberElevators").val("0");
// $("#unitPrice").val("0$");
// $("#totalPrice").val("0$");
// $("#installationFees").val("0$");
// $("#finalPrice").val("0$");

// //getProductLinePrice() finds unit price of each elevator based on product line chosen.

// //product line array
// var product_prices = new Array();
// product_prices["standard"] = 7565;
// product_prices["premium"] = 12345;
// product_prices["excelium"] = 15400;

// var theForm = document.forms["priceForm"];
// //Take user selection from radio buttons.
// function getProductLinePrice() {
//   var unitPrice = 0;
//   //get reference to form id="unitPrice"
//   var theForm = document.forms["priceForm"];
//   //get reference to product line user chooses name="radio-btn"
//   var radioBtn = theForm.elements["radio-btn"];
//   //loop through radio btns
//   for (var i = 0; i < radioBtn.length; i++) {
//     //if radio btn checked
//     if (radioBtn[i].checked) {
//       //set unitPrice to value of checked radio btn using previous array
//       unitPrice = product_prices[radioBtn[i].value];
//       //stop loop after value found
//       break;
//     }
//   }
//   return unitPrice;
// }
