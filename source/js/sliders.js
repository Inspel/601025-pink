"use strict";
(function () {

  var on_toggle_click = function (event, toggles, contentElements, shift) {
    toggles.forEach(function (currentValue) {
      currentValue.classList.remove("slider__toggle--active")
    });
    var clicked_toggle = event.target;
    clicked_toggle.classList.add("slider__toggle--active");

    var start_reviews = clicked_toggle.getAttribute('index');
    contentElements.style.left = -(start_reviews * shift) + "px";
  };

  var activateToggles = function (toggles, contentElements, shift) {
    toggles.forEach(function (currentValue, index) {
      currentValue.setAttribute("index", index.toString());
      currentValue.addEventListener("click", function (event) {
        on_toggle_click(event, toggles, contentElements, shift)
      })
    });
  };

  var list_reviews = document.querySelector(".slider__list--reviews");
  var toggles_reviews = document.querySelectorAll(".slider__toggle--reviews");
  var shift_reviews = window.innerWidth;
  activateToggles(toggles_reviews, list_reviews, shift_reviews);

  var list_tariffs = document.querySelector(".slider__list--tariffs");
  var toggles_tariffs = document.querySelectorAll(".slider__toggle--tariffs");
  var shift_tariffs = 280;
  activateToggles(toggles_tariffs, list_tariffs, shift_tariffs);


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
    list_reviews.style.left = review_count * shift_reviews + "px";
  };

  arrows.addEventListener('click', function (event) {
    on_arrows_click(event);
  });
})();
