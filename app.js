const slidesContainer = document.getElementById("slides-container");

const slides = document.querySelectorAll(".slide");
console.log(slides);
console.log(slidesContainer.offsetWidth);

// slide1.style.animation;
// slides.forEach((slide, index) => {
//   slide.style.transform = `translateX(${index * 100}%)`;
// });

//
let intervalId;
let maxValue = slides.length;
function changeSlide(count) {
  // es kai kodia
  // clearInterval(intervalId);

  // intervalId = setInterval(() => {
  //   console.log(count);

  //   console.log(count);
  //   slidesContainer.style.transform = `translateX(${-count * 100}%)`;

  //   if (count === 3) {
  //     // slidesContainer.style.transform = `translateX(0)`;
  //     console.log("Hajime");
  //     count = 0;
  //   } else count++;
  // }, 2000);

  // amas ukve vafucheb

  clearInterval(intervalId);

  intervalId = setInterval(() => {
    if (count !== 0 && count < 3) {
      slidesContainer.style.transition = "all 1s ease-in";
      slidesContainer.style.transform = `translateX(${-count * 100}%)`;
    }

    if (count === 3) {
      console.log(count);
      // changeSlide(0);
      slidesContainer.style.transition = "none";
      slidesContainer.style.transform = `translateX(0%)`;
      count = 0;
    } else {
      count++;
    }
  }, 2000);
}

changeSlide(1);

// function changeSlides(cnt){
// let startingVal=cnt;
// while
// }
