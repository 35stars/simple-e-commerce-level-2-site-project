

const principalInput = document.getElementById('principal')
const yearsInput = document.getElementById('years')

const resultDiv = document.getElementById('result')


function calculateInterest() {

    //EDGE CASES
    if(!principalInput.value
        && !yearsInput.value){
        yearsInput.classList.add('error')
        principalInput.classList.add('error')

        resultDiv.innerText = `Please enter a valid amount`
        return
    }

    if(principalInput.value < 3000)
    {
        principalInput.classList.add('error')
        resultDiv.innerText = 'Principal amount value must be 3000 & up'

        if(!yearsInput.value || yearsInput.value < 1){

            yearsInput.classList.add('error')
            resultDiv.innerText = 'Principal amount value must be 3000 & up\nInvalid year input'
        }
        else if(yearsInput.value > 0){
            yearsInput.classList.remove('error')
        }
        return
    }

    if(principalInput.value >= 3000){
        principalInput.classList.remove('error')
        if(!yearsInput.value || yearsInput.value < 1)
        {
            yearsInput.classList.add('error')
            resultDiv.innerText = 'Invalid year input'
            return
        }
        yearsInput.classList.remove('error')
    }



    principalInput.classList.remove('error')
    yearsInput.classList.remove('error')
    

    let principal = +principalInput.value;
    let years = +yearsInput.value;
    let rate = 0.10

    let annualInt = principal * rate;
    let totalInt = annualInt * years;
    let totalAmt = principal + totalInt;


    totalInt = totalInt.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })
    totalAmt = totalAmt.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })


    resultDiv.innerHTML =

	`<p>Interest: ${totalInt}</p>
	<p>Total Amount after ${years === 1 ? `${years} year` : `${years} years`}: ${totalAmt}</p>
	`
}
