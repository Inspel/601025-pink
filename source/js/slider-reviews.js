let start_reviews = 0;

const width_reviews = 320;

const list_reviews = document.querySelector('.slider__list--reviews');

const toggles_reviews = document.querySelectorAll('.slider__toggle--reviews');

for (let i=0; i<toggles_reviews.length; i++) {
  toggles_reviews[i].onclick = function () {
    start_reviews = i;
    list_reviews.style.left = -(start_reviews * (width_reviews)) + 'px';
  }
}



