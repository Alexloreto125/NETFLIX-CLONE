//! CAROSELLO 1
const myCarousel1 = document.getElementById("carouselExampleIndicators1");
const prevButton1 = myCarousel1.querySelector(".carousel-control-prev");
const nextButton1 = myCarousel1.querySelector(".carousel-control-next");
prevButton1.style.display = "none";

myCarousel1.addEventListener("slide.bs.carousel", function (event) {
  const activeIndex = event.to;
  const itemCount = myCarousel1.querySelectorAll(".carousel-item").length;

  if (activeIndex === 0) {
    prevButton1.setAttribute("disabled", "true");
    prevButton1.style.display = "none";
  } else {
    prevButton1.removeAttribute("disabled");
    prevButton1.style.display = "block";
  }

  if (activeIndex === itemCount - 1) {
    nextButton1.setAttribute("disabled", "true");
    nextButton1.style.display = "none";
  } else {
    nextButton1.removeAttribute("disabled");
    nextButton1.style.display = "block";
  }
});
//! CAROSELLO 2
const myCarousel2 = document.getElementById("carouselExampleIndicators2");
const prevButton2 = myCarousel2.querySelector(".carousel-control-prev");
const nextButton2 = myCarousel2.querySelector(".carousel-control-next");
prevButton2.style.display = "none";

myCarousel2.addEventListener("slide.bs.carousel", function (event) {
  const activeIndex = event.to;
  const itemCount = myCarousel2.querySelectorAll(".carousel-item").length;

  if (activeIndex === 0) {
    prevButton2.setAttribute("disabled", "true");
    prevButton2.style.display = "none";
  } else {
    prevButton2.removeAttribute("disabled");
    prevButton2.style.display = "block";
  }

  if (activeIndex === itemCount - 1) {
    nextButton2.setAttribute("disabled", "true");
    nextButton2.style.display = "none";
  } else {
    nextButton2.removeAttribute("disabled");
    nextButton2.style.display = "block";
  }
});
//! CAROSELLO 3
const myCarousel3 = document.getElementById("carouselExampleIndicators3");
const prevButton3 = myCarousel3.querySelector(".carousel-control-prev");
const nextButton3 = myCarousel3.querySelector(".carousel-control-next");
prevButton3.style.display = "none";

myCarousel3.addEventListener("slide.bs.carousel", function (event) {
  const activeIndex = event.to;
  const itemCount = myCarousel3.querySelectorAll(".carousel-item").length;

  if (activeIndex === 0) {
    prevButton3.setAttribute("disabled", "true");
    prevButton3.style.display = "none";
  } else {
    prevButton3.removeAttribute("disabled");
    prevButton3.style.display = "block";
  }

  if (activeIndex === itemCount - 1) {
    nextButton3.setAttribute("disabled", "true");
    nextButton3.style.display = "none";
  } else {
    nextButton3.removeAttribute("disabled");
    nextButton3.style.display = "block";
  }
});

//! SEARCH
// const searchBar = document.getElementById("searchBar");
// searchBar.style.display = "none";

// searchBar.addEventListener("click", () => {
//   if (searchBar.style.display === "none") {
//     searchBar.style.display = "show";
//   } else {
//     searchBar.style.display = "none";
//   }
// });

// const searchBar = document.getElementById("searchBar");
// const svgSearch = document.getElementById("svgSearch");
// searchBar.style.display = "none";

// svgSearch.addEventListener("click", () => {
//   if (searchBar.style.display === "none") {
//     searchBar.style.display = "block";
//     searchBar.style.width = 0;
//   } else {
//     searchBar.style.display = "none";
//   }
// });
