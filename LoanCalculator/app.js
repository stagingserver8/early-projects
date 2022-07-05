// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
   //Hide results (always be hidden right aaway)
   document.getElementById('results').style.display ='none';
   //Show loader
   document.getElementById('loading').style.display ='block';
  
   setTimeout(calculateResults, 2000);

   e.preventDefault()
});


// Calculate Results


function calculateResults () {
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

    var x = Math.pow(1+calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    monthlyPayment.value = monthly.toFixed(2) //Set decimal numbers to 2
    totalPayment.value = (monthly*calculatedPayments).toFixed(2); 
    totalInterest.value = ((monthly* calculatedPayments)-principal).toFixed(2); 

 if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2) //Set decimal numbers to 2
    totalPayment.value = (monthly*calculatedPayments).toFixed(2); 
    totalInterest.value = ((monthly* calculatedPayments)-principal).toFixed(2); 
    //Show results
    document.getElementById('results').style.display ='block';
   // Hide loader
    document.getElementById('loading').style.display ='none';



  } else {
   showError('Please check your numbers');
 }


}


function showError(error) {
  
  
   //Hide results
   document.getElementById('results').style.display ='none';
   // Hide loader
    document.getElementById('loading').style.display ='none';
  
   //Create a div
   const errorDiv = document.createElement('div');

   // Get elements
   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');

   //Add class (Boostrap)
   errorDiv.className= 'alert alert-danger'

   //Create text node and append to div

   errorDiv.appendChild(document.createTextNode(error));

   //Insert Error Above Heading

   card.insertBefore(errorDiv, heading);

   // Clear error message after 2 seconds
   setTimeout(clearError, 1500);

}

function clearError() {
   document.querySelector('.alert').remove();
}

