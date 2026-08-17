

document.addEventListener('DOMContentLoaded', () => 
{
	
	const backHomeBtn = document.getElementById('back-to-home')

	const decreaseBtn = document.getElementById('decrease-btn')
	const increaseBtn = document.getElementById('increase-btn')
	
	let imageEl = document.querySelector('.product img')

	const checkoutBtn = document.getElementById('checkout-btn')

	const priceEl = document.getElementById('price')

	const print_nameEl = document.getElementById('print-name')
	const quantityEl = document.getElementById('quantity')
	const totalEl = document.getElementById('total')


	let print_name = sessionStorage.getItem('print_name')
	print_name = print_name.split('.')
	print_name = print_name.shift().toUpperCase()
	

	imageEl.src = sessionStorage.getItem('image') || 'N/A'
	print_nameEl.innerText = print_name || 'N/A'
	priceEl.innerText = sessionStorage.getItem('price')
	quantityEl.innerText = sessionStorage.getItem('quantity') || 1
	totalEl.innerText = sessionStorage.getItem('total') || priceEl.innerText

	backHomeBtn.addEventListener('click',()=>{
		window.location.href = '../index.html'
	})

	increaseBtn.onclick=()=>increaseTotal()
	decreaseBtn.onclick=()=>decreaseTotal()

	checkoutBtn.addEventListener('click',()=>{

		sessionStorage.setItem('print-name',print_nameEl.innerText)
		sessionStorage.setItem('quantity',quantityEl.innerText)
		sessionStorage.setItem('total',totalEl.innerText)

		window.location.href = `../checkout/checkout.html`;
	})

	function increaseTotal()
	{
		let qty = quantityEl.innerText
		qty++

		quantityEl.innerText = qty

		let total = priceEl.innerText

		totalEl.innerText = total*qty
		
	}

	function decreaseTotal()
	{

		let total = +totalEl.innerText

		let qty = +quantityEl.innerText
		qty--

		quantityEl.innerText = qty < 1 ? 1 : qty

		total -= priceEl.innerText

		totalEl.innerText = total < priceEl.innerText ? priceEl.innerText : total

		
	}
})

