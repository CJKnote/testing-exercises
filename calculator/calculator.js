window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 5000, years: 10, rate: 5.5};
  const amountInput = document.getElementById("loan-amount");
  const yearInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");
  amountInput.value = values.amount;
  yearInput.value = values.years;
  rateInput.value = values.rate;

  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const amountInput = document.getElementById("loan-amount");
  const yearInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");

  const values = {amount: amountInput.value, years: yearInput.value, rate: rateInput.value};

  const payment = calculateMonthlyPayment(values);

  updateMonthly(payment);
  

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = values.rate/12/100;
  const n = values.years * 12;
  

  return ((p*i)/(1-(Math.pow((1+i),-n)))).toFixed(2);
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentDisplay = document.getElementById("monthly-payment");
  paymentDisplay.innerText = "$" + monthly;
}
