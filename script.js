const loanAmountInput = document.getElementById("loan-amount");
const interestRateInput = document.getElementById("interest-rate");
const loanTenureInput = document.getElementById("loan-tenure");

const loanAmountDisplay = document.getElementById("loan-amount-display");
const interestRateDisplay = document.getElementById("interest-rate-display");
const loanTenureDisplay = document.getElementById("loan-tenure-display");

const emiResult = document.getElementById("emi-result");

function updateEMI(){

let loanAmount = loanAmountInput.value;
let interestRate = interestRateInput.value;
let tenure = loanTenureInput.value;

loanAmountDisplay.innerText = "₹ " + Number(loanAmount).toLocaleString();
interestRateDisplay.innerText = interestRate + "%";
loanTenureDisplay.innerText = tenure + " yr";

let monthlyRate = interestRate / (12 * 100);
let months = tenure * 12;

let emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);

emiResult.innerText = emi.toFixed(0);

}

loanAmountInput.addEventListener("input", updateEMI);
interestRateInput.addEventListener("input", updateEMI);
loanTenureInput.addEventListener("input", updateEMI);

updateEMI();
/*function calculateEMI(){

let P = document.getElementById("amount").value;
let R = document.getElementById("rate").value;
let Y = document.getElementById("years").value;

let monthlyRate = R / 12 / 100;
let months = Y * 12;

let EMI = (P * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
          (Math.pow(1 + monthlyRate, months) - 1);

document.getElementById("result").innerHTML =
"Monthly EMI: ₹ " + EMI.toFixed(2);

}*/

