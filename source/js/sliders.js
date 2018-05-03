let start_reviews = 0;

const width_reviews = 320;

const list_reviews = document.querySelector('.slider__list--reviews');

const toggles_reviews = document.querySelectorAll('.slider__toggle--reviews');

for (let i=0; i<toggles_reviews.length; i++) {
  toggles_reviews[i].onclick = function () {

    start_reviews = i;
    list_reviews.style.left = -(start_reviews * (width_reviews)) + 'px';
    console.log(toggles_reviews.length);
    for (let j = 0; j < toggles_reviews.length; j++) {
      toggles_reviews[j].classList.remove("slider__toggle--active");
    }
    toggles_reviews[start_reviews].classList.add("slider__toggle--active");
  }
}

let start_tariffs = 0;

const width_tariffs = 280;

const list_tariffs = document.querySelector('.slider__list--tariffs');

const toggles_tariffs = document.querySelectorAll('.slider__toggle--tariffs');

for (let i=0; i<toggles_tariffs.length; i++) {
  toggles_tariffs[i].onclick = function () {

    start_tariffs = i;
    list_tariffs.style.left = -(start_tariffs * (width_tariffs)) + 'px';
    console.log(toggles_tariffs.length);
    for (let j = 0; j < toggles_tariffs.length; j++) {
      toggles_tariffs[j].classList.remove("slider__toggle--active");
    }
    toggles_tariffs[start_tariffs].classList.add("slider__toggle--active");
  }
}
