const links = document.querySelector(".links");
const close = document.querySelector("#close");
const open = document.querySelector("#open");
const book = document.querySelector("#book");

const visit = document.querySelector(".visit");

open.addEventListener("click", () => {
  links.style.display = "flex";
  open.style.display = "none";
  book.style.display = "block";
  close.style.display = "block";

  visit.style.marginTop = "22rem";
});
close.addEventListener("click", () => {
  links.style.display = "none";
  open.style.display = "block";
  book.style.display = "none";
  close.style.display = "none";
  visit.style.marginTop = "0rem";
});
