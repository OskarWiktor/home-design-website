"use strict";

//rwd nav
const hamburgerMenu = document.querySelector(".navigation-hamburger");
const navigation = document.querySelector(".navigation-list");

hamburgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

//hero baner = slideShow
let slideIndex = 0;
slideShow();

function slideShow() {
  let i;
  let slides = document.getElementsByClassName("hero-baner__container--image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideShow, 4000);
}

//input validation 
const form = document.getElementById('form');
const messageInput = document.getElementById('message');

const messageError = document.getElementById('message-error');

form.addEventListener('submit', (e) => {
  if (messageInput.value === '') {
    e.preventDefault();
    messageError.textContent='Message can not be empty';
  };
  if (messageInput.value !== '' && messageInput.value.length <= 20) {
    e.preventDefault();
    messageError.textContent='Message can not have less than 20 character';
  };
})