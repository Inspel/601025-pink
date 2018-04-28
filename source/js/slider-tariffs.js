let start = 0;

const width_tariffs = 280;

const list_tariffs = document.querySelector('.slider__list--tariffs');

const toggles_tariffs = document.querySelectorAll('.slider__toggle--tariffs');

for (let i=0; i<toggles.length; i++) {
  toggles_tariffs[i].onclick = function () {
    start = i;
    list_tariffs.style.left = -(start * (width_tariffs)) + 'px';
  }
}


