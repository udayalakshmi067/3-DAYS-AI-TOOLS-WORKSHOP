const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const headerRight = document.getElementById("headerRight");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const searchInput = document.getElementById("searchInput");

/* Mobile Menu */
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
  headerRight.classList.toggle("show");
});

/* Dropdown */
dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
});

/* Search */
searchInput.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    alert("Searching for: " + this.value);
  }
});
let index = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Auto Slide
setInterval(() => {
  nextSlide();
}, 4000);
