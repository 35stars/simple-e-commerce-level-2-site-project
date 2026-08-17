


const amountEl = document.getElementById('amount')

let resultEl = document.getElementById('result')

const convertFrom = document.getElementById('from')
const convertTo = document.getElementById('to')

const switchBtn = document.getElementById('switch-btn')


const phpToUsdRate = 0.0165;


function switchCurrency(){

	if(convertFrom.value == 'usd' && convertTo.value == 'peso'){
		
		[convertFrom.value, convertTo.value] = [convertTo.value, convertFrom.value]
		convertToUSD()
		return
	}

	[convertTo.value, convertFrom.value] = [convertFrom.value, convertTo.value];	
	convertToPeso()
}

function convertToPeso() {
  	let pesoValue = amountEl.value * 60.79
    resultEl.innerText = pesoValue.toLocaleString('en-PH', { style: 'currency', currency: 'php' });
}

function convertToUSD() {
  
    const usdValue = amountEl.value * phpToUsdRate;
    resultEl.innerText = usdValue.toLocaleString('en-US', { style: 'currency', currency: 'usd' });
}


switchBtn.addEventListener('click',()=>switchCurrency())

convertFrom.addEventListener('change',(e)=>{

	if(e.target.value == 'usd' && convertTo.value == 'peso') convertToPeso()
	else if(e.target.value == 'peso' && convertTo.value == 'usd') convertToUSD()
	else resultEl.innerText = 0
})

convertTo.addEventListener('change',(e)=>{

	if(e.target.value == 'peso' && convertFrom.value == 'usd') convertToPeso()
	else if(e.target.value == 'usd' && convertFrom.value == 'peso') convertToUSD()
	else resultEl.innerText = 0
})

amountEl.oninput=()=>{
	if(convertFrom.value == 'peso' && convertTo.value == 'usd'){
		convertToUSD();
	}
	else if(convertFrom.value == 'usd' && convertTo.value == 'peso'){
		convertToPeso();
	}
	else resultEl.innerText = 0
}





