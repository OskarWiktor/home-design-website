const modal = document.getElementById('modal');
const images = document.getElementsByClassName('portfolio__img');
const modalImg = document.getElementById("img01");

for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

modal.onclick = function() {
  modal.style.display = "none";
}