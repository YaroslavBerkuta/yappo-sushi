import * as flsFunctions from "./modules/function.js";
import Swiper, { Mousewheel, Pagination } from "swiper/core";
import "swiper/css/bundle";
flsFunctions.isWebp();

Swiper.use([Mousewheel, Pagination]);
const swiper = new Swiper(".slider", {
  slidesPerView: 1,
});
const footetLogo = document.querySelector(".footer__logo");
const footerSocial = document.querySelector(".footer__social");
const headerLogo = document.querySelector(".header__logo");
if (window.innerWidth <= 500) {
  footetLogo.remove();
  document.querySelector(".footer__top").appendChild(footetLogo);
  headerLogo.remove();
  document.querySelector(".header__top").prepend(headerLogo);
  footerSocial.remove();
  document.querySelector(".footer__top").prepend(footerSocial);
}

document
  .querySelectorAll(".product__item .product__cart .btn")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".cart__wrapper").classList.add("active");
    });
  });
document.querySelector(".cart__item .close").addEventListener("click", () => {
  document.querySelector(".cart__wrapper").classList.remove("active");
});
document.querySelector(".cart").addEventListener("click", () => {
  document.querySelector(".cart__preview").classList.toggle("active");
});
