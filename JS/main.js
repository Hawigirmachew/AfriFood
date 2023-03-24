const wrapper = document.querySelectorAll('.min_wrapper')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let curr = 0
function reset(){
  console.log('here')
  for(let i = 0; i< wrapper.length; i++){
    wrapper[i].style.display = "none"
  }
}
function nextSlide(){
  reset()
  wrapper[curr + 1].style.display = 'grid'
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
 }
init()