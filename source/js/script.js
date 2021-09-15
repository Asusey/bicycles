//'use strict';
var pageHeader = document.querySelector('.main-nav');
var headerToggle = document.querySelector('.main-nav__toggle');
var headerLinks = document.querySelectorAll('.main-nav__link');

pageHeader.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('main-nav--closed')) {
    pageHeader.classList.remove('main-nav--closed');
    pageHeader.classList.add('main-nav--opened');
  } else {
    pageHeader.classList.add('main-nav--closed');
    pageHeader.classList.remove('main-nav--opened');
  }
});

for (let headerLink of headerLinks) {
  headerLink.addEventListener('click', function (evt) {

    pageHeader.classList.remove('main-nav--opened');
    pageHeader.classList.add('main-nav--closed');

});
 }
