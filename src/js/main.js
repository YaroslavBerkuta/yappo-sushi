import * as flsFunctions from "./modules/function.js";
import Swiper, { Mousewheel, Pagination } from "swiper/core";
import "swiper/css/bundle";
flsFunctions.isWebp();

Swiper.use([Mousewheel, Pagination]);
const swiper = new Swiper(".slider", {
  // on: {
  //   init: function () {
  //     const body = document.getElementsByTagName("body")[0];
  //     body.classList.add("no-scroll");
  //   },
  //   reachEnd: function () {
  //     const body = document.getElementsByTagName("body")[0];
  //     body.classList.remove("no-scroll");
  //   },
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  mousewheel: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      pagination: {
        type: "none",
      },
    },
  },
});
const footetLogo = document.querySelector(".footer__logo");
const footerSocial = document.querySelector(".footer__social")
const headerLogo = document.querySelector(".header__logo")
if (window.innerWidth <= 500) {
  footetLogo.remove();
  document.querySelector(".footer__top").appendChild(footetLogo)
  headerLogo.remove();
  document.querySelector(".header__top").prepend(headerLogo)
  footerSocial.remove();
  document.querySelector(".footer__top").prepend(footerSocial)
}
