"use strict";

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}








const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalImage = modal.querySelector("img"); // the modal's image

const allImages = document.querySelectorAll(".advertised-images img");

allImages.forEach((image) => {
  image.addEventListener("click", function () {
    modalImage.src = this.src;
    modal.classList.remove("hide");
    overlay.classList.remove("hide");
  });
});

overlay.addEventListener("click", function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
});


// const modal = document.querySelector('.modal')
// const overlay = document.querySelector('.overlay')
// const popUp = document.querySelector('.pop-up')


// const openModal = function(){
//   modal.classList.remove('hide')
//   overlay.classList.remove('hide')
// }


// const closeModal = function () {
//   modal.classList.add("hide");
//   overlay.classList.add("hide");
// };

// popUp.addEventListener("click", openModal);

// overlay.addEventListener('click', closeModal);