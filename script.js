import ScrollReveal from "./scroll.js";

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const swiperEl = document.querySelector("swiper-container");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

ScrollReveal().reveal(".scrollhidden", { delay: 300 });

// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  scrolbar: true,
  loop: true,
  speed: 1000,
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();
