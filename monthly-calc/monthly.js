

const calcBtn = document.getElementById('calc-btn')
const amountInput = document.getElementById('amount')
const yearsInput = document.getElementById('year')

const resultDiv = document.getElementById('result')


function calculate(){

	// EDGE CASES
	if(!amountInput.value
		&& !yearsInput.value){
		yearsInput.classList.add('error')
		amountInput.classList.add('error')

		resultDiv.innerText = `Please enter a valid amount`
		return
	}

	if(amountInput.value < 3000)
	{
		amountInput.classList.add('error')
		resultDiv.innerText = 'Amount value must be 3000 & up'

		if(!yearsInput.value || yearsInput.value < 1){

			yearsInput.classList.add('error')
			resultDiv.innerText = 'Amount value must be 3000 & up\nInvalid year input'
		}
		else if(yearsInput.value > 0){
			yearsInput.classList.remove('error')
		}
		return
	}

	if(amountInput.value >= 3000){
		amountInput.classList.remove('error')
		if(!yearsInput.value || yearsInput.value < 1)
		{
			yearsInput.classList.add('error')
			resultDiv.innerText = 'Invalid year input'
			return
		}
		yearsInput.classList.remove('error')
	}


	amountInput.classList.remove('error')
	yearsInput.classList.remove('error')

	let amount = +amountInput.value
	let years = +yearsInput.value
	let rate = 0.1 // 10 %

	let totalInterest = amount * rate * years

	let totalPayment = amount + totalInterest

	let yearlyPayment = totalPayment / years

	let monthlyPayment = totalPayment / (years*12)

	totalInterest = totalInterest.toLocaleString('en-PH',{

		style: 'currency',	
		currency: 'PHP' 
	})

	totalPayment = totalPayment.toLocaleString('en-PH',{

		style: 'currency',	
		currency: 'PHP' 
	})

	yearlyPayment = yearlyPayment.toLocaleString('en-PH',{

		style: 'currency',	
		currency: 'PHP' 
	})

	monthlyPayment = monthlyPayment.toLocaleString('en-PH',{

		style: 'currency',	
		currency: 'PHP' 
	})


	resultDiv.innerHTML = `
		<p style="font-size:large">Results:</p>
		<p>Total Interest: ${totalInterest}</p>
		<p>Total Payment: ${totalPayment}</p>
		<p>Yearly Payment: ${yearlyPayment}</p>
		<p style="color:green; font-size:large">Monthly Payment: ${monthlyPayment}</p>
	`
}

calcBtn.onclick=()=> calculate()