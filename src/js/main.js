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
});
