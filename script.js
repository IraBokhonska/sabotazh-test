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

// -------------------partners--------------------
