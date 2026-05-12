const sliders = {};

function nextSlide(id) {
  const slider = document.getElementById(id);

  const totalSlides = slider.children.length;

  if (!sliders[id]) {
    sliders[id] = 0;
  }

  sliders[id]++;

  if (sliders[id] >= totalSlides) {
    sliders[id] = 0;
  }

  slider.style.transform = `translateX(-${sliders[id] * 100}%)`;
}

function prevSlide(id) {
  const slider = document.getElementById(id);

  const totalSlides = slider.children.length;

  if (!sliders[id]) {
    sliders[id] = 0;
  }

  sliders[id]--;

  if (sliders[id] < 0) {
    sliders[id] = totalSlides - 1;
  }

  slider.style.transform = `translateX(-${sliders[id] * 100}%)`;
}

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
