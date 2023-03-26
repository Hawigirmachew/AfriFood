const scrollToTop = document.querySelector('#scroll-top-btn');

// Set up a function if the window scroll down to height 500px then show button 
window.addEventListener("scroll", () => {

    // Get the current scroll height value
    const windowHeight = window.scrollY;
    // console.log(windowHeight)
    // If the scroll height value is greater than the window height, add style block-css in button 
    if (windowHeight > 500) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});


// Setup a function with animate scroll to top slower / smoother
const animateScroll = () => {

    // Set a variable for the number of pixels from the top of the document.
    const heightScroll = document.documentElement.scrollTop || document.body.scrollTop;

    // If heightScroll value is greater than 0, scroll to top of the document.
   
    if (heightScroll > 0) {
      console.log(heightScroll)
        // ScrollTo takes x and y coordinate.
        // Scroll to the top of the page
        window.scrollTo(0, heightScroll - heightScroll);
    }
    
}

// When the button clicked, run animateScroll function
scrollToTop.onclick = function () {
    animateScroll();
}