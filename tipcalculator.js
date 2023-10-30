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

//created a variable for calculation
let bill = 0;
let tip = 0;
let people = 1;

totalTip.addEventListener("click", (e) => {
  if (billEl.value <= 0 || tipEl.value <= 0 || peopleEl.value < 1) {
    return (errorTip.style.display = "block"); // event listener for click if total of variables less than 1 is error
  } else {
    errorTip.style.display = "none";
    bill = parseFloat(billEl.value); // floats the bill value
    tip = parseFloat(tipEl.value); // floats the tip value
    people = parseFloat(peopleEl.value); // floats the people value
    let tipCalc = (bill * tip) / 100 / people; 
    let totalCal = (tipCalc + bill) / people;
    tipAmount.innerHTML = "$" + " " + tipCalc.toFixed(2);
    totalAmount.innerHTML = "$" + " " + totalCal.toFixed(2);
  }
});

// create a reset button with default value.
resetTip.addEventListener("click", (e) => {
  billEl.value = "0";
  tipEl.value = "0";
  peopleEl.value = "1";
  tipAmount.innerHTML = "$" + (0.0).toFixed(2);
  totalAmount.innerHTML = "$" + (0.0).toFixed(2);
});
