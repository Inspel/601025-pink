"use strict";
(function () {

  var start_reviews = 0;
  var width_reviews;
  var list_reviews = document.querySelector(".slider__list--reviews");
  var toggles_reviews = document.querySelectorAll(".slider__toggle--reviews");

  var on_toggle_click = function (event) {
    width_reviews = window.innerWidth;
    var clicked_toggle = event.target;
    start_reviews = clicked_toggle.getAttribute('index');
    list_reviews.style.left = -(start_reviews * width_reviews) + "px";
    for (var i = 0; i < toggles_reviews.length; i++) {
      toggles_reviews[i].classList.remove("slider__toggle--active");
    }
    toggles_reviews[start_reviews].classList.add("slider__toggle--active");
  };

  toggles_reviews.forEach(function (currentValue, i) {
    currentValue.setAttribute("index", i.toString());
    currentValue.addEventListener("click", function (event) {
      on_toggle_click(event)
    })
  });

  var arrows = document.querySelector(".slider__arrows-wrapper");
  var review_count = 0;

  var on_arrows_click = function (event) {
    var target = event.target;
    if (target && target.parentNode === arrows.firstElementChild) {
      review_count--;
      if (review_count < 0) {
        review_count = 0;
      }
    } else if (target && target.parentNode === arrows.lastElementChild) {
      review_count++;
      if (review_count > list_reviews.childElementCount) {
        review_count = list_reviews.childElementCount;
      }
    }
    width_reviews = window.innerWidth;
    list_reviews.style.left = review_count * width_reviews + "px";
  };

  arrows.addEventListener('click', function (event) {
    on_arrows_click(event);
  });
})();

(function () {
  var start_tariffs;

  var width_tariffs = 280;

  var list_tariffs = document.querySelector(".slider__list--tariffs");

  var toggles_tariffs = document.querySelectorAll(".slider__toggle--tariffs");

  var _loop2 = function _loop2(i) {
    toggles_tariffs[i].onclick = function () {

      start_tariffs = i;
      list_tariffs.style.left = -(start_tariffs * width_tariffs) + "px";
      for (var j = 0; j < toggles_tariffs.length; j++) {
        toggles_tariffs[j].classList.remove("slider__toggle--active");
      }
      toggles_tariffs[start_tariffs].classList.add("slider__toggle--active");
    };
  };

  for (var i = 0; i < toggles_tariffs.length; i++) {
    _loop2(i);
  }
})();
