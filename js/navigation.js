'use strict';

const hamburgerMenu = document.querySelector('.navigation-hamburger');
const navigation = document.querySelector('.navigation-list');

hamburgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
})