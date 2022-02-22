"use strict";
let mail_format =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
const submitButton = document.querySelector(".submit-button");
const errorImage = document.querySelector(".hidden");
const errorParagraph = document.querySelector(".errorParagraph");
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
    document.querySelector(".emailInput").style.border = "solid 2px red";
  }
});
let checkFirst = /[a-z]^[$@]/;
