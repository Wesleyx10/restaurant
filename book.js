const links = document.querySelector(".links");
const close = document.querySelector("#close");
const open = document.querySelector("#open");
const book = document.querySelector("#book");

const booking = document.querySelector(".book");

open.addEventListener("click", () => {
  links.style.display = "flex";
  open.style.display = "none";
  book.style.display = "block";
  close.style.display = "block";
  booking.style.marginTop = "28rem";
});
close.addEventListener("click", () => {
  links.style.display = "none";
  open.style.display = "block";
  book.style.display = "none";
  close.style.display = "none";
  booking.style.marginTop = "5rem";
});
