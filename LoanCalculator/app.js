// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e){
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  //Parsefloat turns it into a decimal
  const principal = parseFloat(amount.value);
  const calculatedInterest= parseFloat(interest.value)/100 /12 ;
  const calculatedPayments = parseFloat(years.value)*12;

  var x = math.pow(1+calculatedInterest, calculatedPayments); 
  monthlyPayment.value = x; 


  //Compute monthly payments
    //var x = math.pow(1+calculatedInterest, calculatedPayments);
    //const monthly = (principal*x*calculatedInterest)/(x-1);
    //monthlyPayment.value = monthly.toFixed(2) //Set decimal numbers to 2
    //totalPayment.value = (monthly*calculatedPayments).toFixed(2); 
    //totalInterest.value = ((monthly* calculatedPayments)-principal).toFixed(2); 

 /*if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2) //Set decimal numbers to 2
    totalPayment.value = (monthly*calculatedPayments).toFixed(2); 
    totalInterest.value = ((monthly* calculatedPayments)-principal).toFixed(2); 
 } else {
    console.log("Pls check your numbers")

 }
*/
 

  e.preventDefault();
}



