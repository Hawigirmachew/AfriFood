// variable declaration

const contactForm = document.getElementById("contact-form");

// function for the validation
// function validate(e) {
//   const userName = document.getElementById("name");
//   const email = document.getElementById("email");
//   const subject = document.getElementById("subject");
//   const message = document.getElementById("message");
//   e.preventDefault();
//   console.log(userName.nextElementSibling);
//   if (userName.value === " ") {
//     userName.nextElementSibling.style.display = "block";
//     // return false;
//   } else {
//     userName.nextElementSibling.style.display = "none";
//   }
// }
// console.log('name')
// calling the function
contactForm.addEventListener('submit', user);
function user(e){
  console.log('name')
  const userName = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    e.preventDefault();
    console.log(userName.nextElementSibling);
    if (userName.value === " ") {
      console.log('enter user name')
      // userName.nextElementSibling.style.display = "block";
      // return false;
    } else {
      userName.nextElementSibling.style.display = "none";
    }
}
// user()