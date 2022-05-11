"use strict";
const submitButton = document.querySelector(".submit-button");
const errorImage = document.querySelector(".hidden");
const errorParagraph = document.querySelector(".errorParagraph");
const emailInputField = document.querySelector(".emailInput");

//media queries
const mediaMobileOne = window.matchMedia("(max-width:400px)");
const mediTablet =
  window.matchMedia("(max-width:999px)") &&
  window.matchMedia("(min-width:501px)");
const mediaMobileTwo =
  window.matchMedia("(max-width:500px)") &&
  window.matchMedia("(min-width:401px)");
const mediaLaptop =
  window.matchMedia("(max-width:1500px)") &&
  window.matchMedia("(min-width:1000px)");
let mail_format =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
let results = [];
submitButton.addEventListener("click", function () {
  const emailInput = String(
    document.querySelector(".emailInput").value
  ).toLowerCase();

  results.push(emailInput);
  console.log(results);
  if (emailInput.match(mail_format)) {
    console.log("valid email");
  } else if (!emailInput.match(mail_format) || "") {
    errorImage.classList.remove("hidden");
    errorParagraph.classList.remove("hidden");
    document.querySelector(".emailInput").style.border =
      "solid 2px hsl(0, 93%, 68%)";
  }
  if (mediaMobileOne.matches) {
    submitButton.style.left = "-4rem";
    console.log("mobile 1");
  }
  if (mediTablet.matches) {
    submitButton.style.left = "-14.5rem";
    console.log("tablet");
  }
  if (mediaMobileTwo.matches) {
    submitButton.style.left = "-13.7rem";
    console.log("mobile two");
  }
  if (mediaLaptop.matches) {
    submitButton.style.left = "-4rem";
    console.log("laptop");
  }
});
console.log(window.outerWidth);
console.log(mediTablet.matches === window.innerWidth);
console.log(mediaLaptop.matches === window.innerWidth);
