


//TESTIMONIALS
const testimonial_Arrows = document.getElementById('testimonial-arrows')
const sliderEl = document.getElementById('slider')


let test_index = 0
testimonial_Arrows.addEventListener('click',(e)=>{

	let target = e.target

	if(target.tagName === 'IMG'){

		if(target.id == 'right'){

			test_index++
			
			test_index = test_index == sliderEl.children.length ? 0 : test_index

            sliderEl.style.transform = `translateX(-${test_index * 100}%)`;
		}
		else if(target.id == 'left'){

			test_index--

			test_index = test_index < 0 ? sliderEl.children.length-1 : test_index
		
			sliderEl.style.transform = `translateX(-${test_index * 100}%)`;
		}
	}
})

setInterval(()=>{

	test_index++

	test_index = test_index == sliderEl.children.length ? 0 : test_index

	sliderEl.style.transform = `translateX(-${test_index * 100}%)`
},2000)










