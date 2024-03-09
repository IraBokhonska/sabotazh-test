// ----------------------------menu------------------------
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu-btn");

function toggleMenu() {
  menu.classList.toggle("active");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);

// --------------swiper-------------
// import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    speed: 5000,
    spaceBetween: 90,
    allowTouchMove: false,
    disableOnInteraction: false,
    autoplay: {
      delay: 1,
    },
  });
});

// на max-width 678 px додай стрілки  за допомогою befor after до swiper-product__main-img img та збережи для них функціонал свайпера

// ---------------------swiper custom-----------------

document.addEventListener("DOMContentLoaded", function () {
  const swiperImages = document.querySelectorAll(".swiper-product__image");
  const mainImg = document.querySelector(".swiper-product__main-img img");
  const leftArrow = document.querySelector(".product-left");
  const rightArrow = document.querySelector(".product-right");

  let currentIndex = 0;

  // Function to update the main image with a smooth transition
  function updateMainImage(index) {
    mainImg.style.opacity = 0;
    setTimeout(function () {
      const selectedImg = swiperImages[index].querySelector("img");
      mainImg.src = selectedImg.src;
      mainImg.style.opacity = 1;
    }, 300);
  }

  leftArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = swiperImages.length - 1;
    }
    updateMainImage(currentIndex);
    updateActiveSlide();
  });

  rightArrow.addEventListener("click", function () {
    if (currentIndex < swiperImages.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateMainImage(currentIndex);
    updateActiveSlide();
  });

  // Function to handle click on individual image
  swiperImages.forEach(function (image, index) {
    image.addEventListener("click", function () {
      currentIndex = index;
      updateMainImage(currentIndex);
      updateActiveSlide();
    });
  });

  // Function to update the active slide style
  function updateActiveSlide() {
    swiperImages.forEach(function (image, index) {
      if (index === currentIndex) {
        image.classList.add("active-slide");
      } else {
        image.classList.remove("active-slide");
      }
    });
  }
});

// ------------------rating---------------------
const ratingItemsList = document.querySelectorAll(".rating__item");

const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach((item) =>
  item.addEventListener("click", () => {
    const { itemValue } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;
    console.log(itemValue);
  })
);

// -------------------spoller--------------------
document.addEventListener("DOMContentLoaded", function () {
  const spoilers = document.querySelectorAll(".spoiler");

  spoilers.forEach((spoiler) => {
    const spoilerHeader = spoiler.querySelector(".spoiler-header");
    const spoilerContent = spoiler.querySelector(".spoiler-content");

    spoilerHeader.addEventListener("click", () => {
      spoiler.classList.toggle("open");
    });

    spoilerContent.addEventListener("click", (event) => {
      event.stopPropagation();
      spoiler.classList.remove("open");
    });

    document.addEventListener("click", (event) => {
      if (!spoiler.contains(event.target)) {
        spoiler.classList.remove("open");
      }
    });
  });
});
