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
// swiper js
let swiper = new Swiper(".foodSwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  autoplay:{
     delay:3000,
     disableOnInteraction:false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiper2 = new Swiper('.testimonySwiper',{
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
})
