const simpleInterest = document.querySelector('.simple-interest');
const button = document.querySelector('.button');
//const loading = document.querySelector('.loader');
const results = document.querySelector('.results');

function calculateResults(e) {
	// ui elements
	const principal = document.querySelector('#principal');
	const rate = document.querySelector('#rate');
	const time = document.querySelector('#time');
	const monthlyPayment = document.querySelector('#payment');
	const totalInterest = document.querySelector('#interest');
	const totalAmount = document.querySelector('#total');
	// formula variables
	const p = parseFloat(principal.value);
	const r = parseFloat(rate.value);
	const t = parseFloat(time.value);
	
	// calculate total interest
	const interest = (p*t*r/100);
	// calculate monthly payment
	const payment = ((interest + p) / (t * 12)).toFixed(2);
	// calculate total amount paid
	const total = (interest + p).toFixed(2);
	
	if (isFinite(payment)) {
		/* totalInterest.innerHTML = '$' + (interest).toFixed(2);
		monthlyPayment.innerHTML = '$' + payment;
		totalAmount.innerHTML = '$' + total; */
    totalInterest.innerHTML = 'If you deposit ' + (p) + ', at an interest rate of ' + (r) + '%. You will receive an amount of ' + (interest).toFixed(0) + ', in the year ' + (2021 + t);
		// hide loader
		button.classList.remove('loading');
		// show results
		results.classList.remove('hide');
	} else {
		// show error
		showError('Please check your numbers and try again.');
		// hide loader
		button.classList.remove('loading');
	}
}

function showError(error) {
	// create error
	const errorMessage = document.createElement('div');
	const calculate = document.querySelector('#calculate');

	errorMessage.className = 'error';
	errorMessage.appendChild(document.createTextNode(error));
	simpleInterest.insertBefore(errorMessage, calculate);
	// clear error
	setTimeout(clearError, 3000);
}

function clearError() {
	// remove error
	document.querySelector('.error').remove();
}

button.addEventListener('click', (e) => {
	console.log('Calculating...');
	// show loader
	button.classList.add('loading');
	
	// set timeout
	setTimeout(calculateResults, 2000);
	
	// prevent page from reloading on submit
	e.preventDefault();
});



/* IMPROVED OLD CODE BELOW */
// const button = document.querySelector('button');

// function simpleInterest() {
// 	console.log('Calculating...');
// 	//ui elements
// 	const p = parseFloat(document.querySelector('#principal').value);
// 	const r = parseFloat(document.querySelector('#rate').value);
// 	const t = parseFloat(document.querySelector('#time').value);
// 	const interest = document.querySelector('#interest');
// 	const payment = document.querySelector('#payment');
// 	const total = document.querySelector('#total');

// 	// calculate interest
// 	interest.innerHTML = '$' + (p*t*r/100).toFixed(2);
// 	// calculate monthly payment
// 	payment.innerHTML = '$' + (((p*t*r/100) + p) / (t * 12)).toFixed(2);
// 	// calculate total amount
// 	total.innerHTML = '$' + ((p*t*r/100) + p).toFixed(2);
	
// 	if(isFinite(payment)) {
// 		console.log('go');
// 	} else {
// 		console.log('error');
// 	}
// }

// button.addEventListener('click',simpleInterest);


