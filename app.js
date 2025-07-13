document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
  e.preventDefault();

  console.log('calculating...');

  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  } else {
    console.log('please check your numbers')
  }

}



// const form = document.getElementById("loan-form");

// const amount = document.getElementById("amount");
// const interest = document.getElementById("interest");
// const years = document.getElementById("years");
// const monthlyPayment = document.getElementById("monthly-payment");
// const totalPayment = document.getElementById("total-payment");
// const totalInterest = document.getElementById("total-interest");
// console.log(amount, monthlyPayment, totalPayment, totalInterest);

// function updateDisplay({ month, total, interest }) {
//   console.log({ month, total, interest });

//   monthlyPayment.value = month;
//   totalPayment.value = total;
//   totalInterest.value = interest;
// }

// function calculateResults(e) {
//   e.preventDefault();

//   console.log("calculating...");

//   const principal = parseFloat(amount.value);
//   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//   const calculatedPayments = parseFloat(years.value) * 12;
//   console.log({ principal, calculatedInterest, calculatedPayments });

//   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//   const monthly = (principal * x * calculatedInterest) / (x - 1);

//   console.log("M", isFinite(monthly));
//   if (isFinite(monthly)) {
//     console.log("DOING THIS....");

//     const monthPay = monthly.toFixed(2);
//     const totalPay = (monthly * calculatedPayments).toFixed(2);
//     const intPay = (monthly * calculatedPayments - principal).toFixed(2);

//     console.log("THIS", { monthlyPayment, totalPayment, totalInterest });

//     updateDisplay({ month: monthPay, total: totalPay, interest: intPay });
//     monthlyPayment.style.color = "black";
//   } else {
//     console.log("please check your numbers");
//   }
// }

// form.addEventListener("submit", calculateResults);
