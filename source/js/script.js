'use strict';
var pageHeader = document.querySelector('.main-nav');
var headerToggle = document.querySelector('.main-nav__toggle');

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
