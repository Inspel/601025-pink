const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.navigation__nav-btn');
const getApp = document.querySelector('.page-content__get-app');

navigation.classList.remove('navigation--nojs');
navigation.classList.add('navigation--closed');
getApp.classList.add('page-content__get-app--closed');

toggle.addEventListener('click', function() {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
  } else {
    navigation.classList.add('navigation--closed');
  }
  if (getApp.classList.contains('page-content__get-app--closed')) {
    getApp.classList.remove('page-content__get-app--closed');
  } else  {
    getApp.classList.add('page-content__get-app--closed');
  }
});
