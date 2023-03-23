// declaration
window.addEventListener("load", typeWriter);

let i = 0;
const text = "African food is not a cuisine, it's a cultural adventure";
let speed = 100;

function typeWriter() {
  console.log(text);
  if (i < text.length) {
    document.getElementById("banner--qoute").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
const foodSlide = document.querySelectorAll('.slide')
const nxtBtn = document.querySelector('.swiper-button-next')
const prevBtn = document.querySelector('.swiper-button-prev')
let current = 0;

function reset(){
  for(let i = 0; i < foodSlide.length; i++ ){
    foodSlide[i].style.display = 'none'
  }
}

function nextSlide(){
  console.log('go next')
  if(current === foodSlide.length - 1){
    current = -1
  }
  reset()
  foodSlide[current + 1].style.display = 'block'
  current++;
}


nxtBtn.addEventListener('click', function(){
 
  nextSlide()
  
})
function prevSlide(){
  reset()
  foodSlide[current - 1].style.display = 'block'
  current--;
}


prevBtn.addEventListener('click', function(){
  if(current === 0){
    current = foodSlide.length
  }
  prevSlide()

})

function init(){
  reset()
  setInterval(nextSlide, 3000)
  foodSlide[0].style.display = 'block'
  
}

init()
let swiper2 = new Swiper(".testimonySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
