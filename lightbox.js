


const arrows = document.getElementById('arrows')
const images = document.querySelectorAll('#gallery figure img')
const gallery = document.getElementById('gallery')
const lightbox = document.getElementById('lightbox')
const lb_closeBtn = document.getElementById('close-btn')
const lb_caption = document.getElementById('caption')


let imgName = '';
let index = 0	

const imageNames = []

images.forEach((img,i,) => {

	if(!img.dataset.index){
		img.dataset.index = i
	}
	
	imageNames.push('images/'+img.nextElementSibling.innerText.toLowerCase() + '.jpg') 
})

console.log(imageNames)

window.addEventListener('keydown',(e)=>{

	if(e.key === "ArrowRight"){
		index++

		arrows.firstElementChild.classList.remove('active')
		arrows.firstElementChild.nextElementSibling.classList.add('active')
	}
	else if(e.key === 'ArrowLeft'){
		index--

		arrows.firstElementChild.classList.add('active')
		arrows.firstElementChild.nextElementSibling.classList.remove('active')
	}
	
	index = index == imageNames.length ? 0 : index < 0 ? imageNames.length-1 : index

	imgName = imageNames[index].toUpperCase().split('.')
	imgName.pop()
	
	imgName = imgName = imgName.pop().split('/').pop()

	lightbox.firstElementChild.nextElementSibling.src = imageNames[index]
	lb_caption.textContent = imgName
})



arrows.addEventListener('click',(e)=>{

	if(e.target.id == 'right'){
		index++
	
		arrows.firstElementChild.classList.remove('active')
		arrows.firstElementChild.nextElementSibling.classList.add('active')
	}
	else {
		index--
	
		arrows.firstElementChild.classList.add('active')
		arrows.firstElementChild.nextElementSibling.classList.remove('active')
	}
	index = index == imageNames.length ? 0 : index < 0 ? imageNames.length-1 : index

	imgName = imageNames[index].toUpperCase().split('.')
	imgName.pop()

	imgName = imgName.pop().split('/').pop()

	lightbox.firstElementChild.nextElementSibling.src = imageNames[index]
	lb_caption.innerText = imgName
})

gallery.addEventListener('click',(e)=>{

	if(e.target.tagName === 'IMG'){

		lightbox.style.visibility = 'visible'
		lightbox.firstElementChild.nextElementSibling.src = e.target.src
		lb_caption.innerText = e.target.nextElementSibling.textContent
		
		index = e.target.dataset.index

		ulMenu.previousElementSibling.style.display = 'none'
		footer.style.display = 'none'
	}
})


lb_closeBtn.addEventListener('click',()=>{
	lightbox.style.visibility = 'hidden'
	ulMenu.previousElementSibling.style.display = 'block'
	footer.style.display = 'block'
})