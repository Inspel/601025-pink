const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.navigation__nav-btn');

navigation.classList.remove('navigation--nojs');
navigation.classList.add('navigation--closed');

toggle.addEventListener('click', function() {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
  } else {
    navigation.classList.add('navigation--closed');
  }
});
