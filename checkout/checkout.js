

const backHomeBtn = document.getElementById('back-to-home')
const backBtn = document.getElementById('back-btn')
const payBtn = document.getElementById('pay-btn')


const imageEl = document.getElementById('image-el')
const print_nameEl = document.getElementById('caption')
const quantityEl = document.getElementById('quantity')
const totalEl = document.getElementById('total')


imageEl.src = sessionStorage.getItem('image')
print_nameEl.innerText = sessionStorage.getItem('print-name')
quantityEl.innerText = sessionStorage.getItem('quantity')
totalEl.innerText = sessionStorage.getItem('total')


backHomeBtn.addEventListener('click',()=>{
	window.location.href = '../index.html'
})

payBtn.addEventListener('click',()=>{
	alert(`Proceeding to payment...\n\nProduct: ${print_nameEl.innerText}\nQuantity: ${quantityEl.innerText}\nTotal: $${totalEl.innerText}`)
})

backBtn.addEventListener('click',()=>{

	sessionStorage.setItem('print-name',print_nameEl.innerText )
	sessionStorage.setItem('quantity',quantityEl.innerText)
	sessionStorage.setItem('total',totalEl.innerText)

	window.location.href =
	`../single product cart system/single-product.html`;
})