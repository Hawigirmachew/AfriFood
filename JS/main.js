const wrapper = document.querySelectorAll('.min_wrapper')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const navigate = document.querySelectorAll('.navigate')
let curr = 0
function reset(){
  console.log(navigate)
  for(let i = 0; i< wrapper.length; i++){
    wrapper[i].style.display = "none"
  }
  for(let i = 0; i< navigate.length; i++){
    console.log('here')
    navigate[i].classList.remove('active') 
  }

}
function nextSlide(){
  reset()
  wrapper[curr + 1].style.display = 'grid'
  navigate[curr + 1].classList.add('active') 
  curr++
}
next.addEventListener('click', function(){
  if(curr = wrapper.length - 1){
    curr = -1
  }
  nextSlide()
})

function prevSlide(){
  reset()
  wrapper[curr - 1].style.display = 'grid'
  navigate[curr - 1].classList.add('active') 
  curr--
}
prev.addEventListener('click', function(){
  if(curr === 0){
    curr = wrapper.length
  }
  prevSlide()
})
 function init(){
   reset()
   wrapper[0].style.display = 'grid'
   navigate[0].classList.add('active')
 }
init()