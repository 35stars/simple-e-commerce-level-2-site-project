

const largeImage = document.getElementById('large-image')

const imageGallery = document.querySelector('.image-gallery')

const products_div = document.getElementById('products-div')

const printNameEl = document.getElementById('print-name')

const backHomeBtn = document.getElementById('back-to-home') 

const toastEl = document.getElementById('toast')

const sizeBtns = document.querySelector('#description')

const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')

const quantityEl = document.getElementById('quantity')

//LIGHTBOX 
const lightbox = document.getElementById('lightbox')
const closeBtn = document.getElementById('close-btn')

let index = 0
const images = []
Array.from(document.querySelectorAll('.image')).forEach((img,i,)=>{

	if(!img.dataset.index) img.dataset.index = i;

	let url = decodeURIComponent(img.src)
	images.push('../images/'+url.split('/').pop())
})

document.getElementById('arrows').addEventListener('click',(e)=>{

	if(e.target.id == 'right')index++;
	else index--;

	index = index == images.length ? 0 : index < 0 ? images.length-1 : index
	renderLightboxImg()
})


window.addEventListener('keydown',(e)=>{

	if(e.key === 'Escape') {
		lightbox.style.visibility = 'hidden'
	}

	if(e.key === 'ArrowRight'){
		index++
		renderLightboxImg()
	}
	
	if(e.key === 'ArrowLeft'){
		index--
		renderLightboxImg()
	}
})	
	console.log(images)

function renderLightboxImg(){

	index = index == images.length ? 0 : index < 0 ? images.length-1 : index
	lightbox.querySelector('#image').src = '../images/'+images[index]
	lightbox.querySelector('p').innerText = images[index].split('/').pop().split('.').shift().toUpperCase()
}

closeBtn.addEventListener('click',()=> {
	lightbox.style.visibility = 'hidden'
})

products_div.addEventListener('click',(e)=>{

	if(e.target.tagName == 'BUTTON' && e.target.textContent == 'ADD TO CART'){

		toastEl.classList.add('show')

		setTimeout(()=>toastEl.classList.remove('show'),2000)

		setTimeout(()=>{
			window.location.href = `../single product cart system/single-product.html`
		},3000)

		let button = e.target

		let url = decodeURIComponent(button.previousElementSibling.previousElementSibling.src)

		let image = button.previousElementSibling.previousElementSibling.src
		let price = button.previousElementSibling.firstElementChild.firstElementChild
		let print_name = url.split('/').pop().toUpperCase()


		sessionStorage.setItem('image',image)
		sessionStorage.setItem('price',price.innerText)
		sessionStorage.setItem('print_name',print_name)
		sessionStorage.removeItem('total')
		sessionStorage.removeItem('quantity')
	}
	else if(e.target.tagName == 'IMG'){

		index = e.target.dataset.index

		lightbox.style.visibility = 'visible'

		lightbox.querySelector('img').src = images[index]

		lightbox.querySelector('p').innerText = 
			e.target.nextElementSibling.firstElementChild.nextElementSibling.innerText 
	}
})




