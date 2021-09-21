'use strict';

(function () {
  var pageHeader = document.querySelector('.main-nav');
  var headerToggle = document.querySelector('.main-nav__toggle');
  var headerLinks = document.querySelectorAll('.main-nav__link');

  pageHeader.classList.remove('main-nav--nojs');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('main-nav--closed')) {
      pageHeader.classList.remove('main-nav--closed');
      pageHeader.classList.add('main-nav--opened');
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      pageHeader.classList.add('main-nav--closed');
      pageHeader.classList.remove('main-nav--opened');
      document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    }
  });

  headerLinks.forEach(function (headerLink) {
    headerLink.addEventListener('click', function () {
      pageHeader.classList.remove('main-nav--opened');
      pageHeader.classList.add('main-nav--closed');
      document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    });
  });

  var input = document.getElementById('phone');

  input.addEventListener('focus', function () {
    if (!/^\+\d*$/.test(input.value)) {
      input.value = '+7';
    }
  });

  input.addEventListener('keypress', function (evt) {
    if (!/\d/.test(evt.key)) {
      evt.preventDefault();
    }
  });
})();
