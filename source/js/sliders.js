'use strict';

var start_reviews = 0;

var width_reviews = 320;

var list_reviews = document.querySelector('.slider__list--reviews');

var toggles_reviews = document.querySelectorAll('.slider__toggle--reviews');

var _loop = function _loop(i) {
  toggles_reviews[i].onclick = function () {

    start_reviews = i;
    list_reviews.style.left = -(start_reviews * width_reviews) + 'px';
    console.log(toggles_reviews.length);
    for (var j = 0; j < toggles_reviews.length; j++) {
      toggles_reviews[j].classList.remove("slider__toggle--active");
    }
    toggles_reviews[start_reviews].classList.add("slider__toggle--active");
  };
};

for (var i = 0; i < toggles_reviews.length; i++) {
  _loop(i);
}

var start_tariffs = 0;

var width_tariffs = 280;

var list_tariffs = document.querySelector('.slider__list--tariffs');

var toggles_tariffs = document.querySelectorAll('.slider__toggle--tariffs');

var _loop2 = function _loop2(i) {
  toggles_tariffs[i].onclick = function () {

    start_tariffs = i;
    list_tariffs.style.left = -(start_tariffs * width_tariffs) + 'px';
    console.log(toggles_tariffs.length);
    for (var j = 0; j < toggles_tariffs.length; j++) {
      toggles_tariffs[j].classList.remove("slider__toggle--active");
    }
    toggles_tariffs[start_tariffs].classList.add("slider__toggle--active");
  };
};

for (var i = 0; i < toggles_tariffs.length; i++) {
  _loop2(i);
}
