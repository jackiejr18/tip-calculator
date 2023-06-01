const billEl = document.getElementById("bill-value");
const tipEl = document.getElementById("tip-value");
const peopleEl = document.getElementById("people-value");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const totalTip = document.getElementById("calculate");
const resetTip = document.getElementById("reset");
const errorTip = document.getElementById("error");

// set the default value on load
billEl.value = "0";
tipEl.value = "0";
peopleEl.value = "1";
tipAmount.innerHTML = "$" + +0.0;
totalAmount.innerHTML = "$" + +(0.0).toFixed(2);