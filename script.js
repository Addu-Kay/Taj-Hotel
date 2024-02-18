let container = document.querySelector(".ourbrands_flex_container");
let nextBtn = document.querySelector(".nextBtn");
let BeforeBtn = document.querySelector(".BeforeBtn");
BeforeBtn.style.display = "none";
function scroll_right() {
  container.scrollLeft = 1052;
  nextBtn.style.display = "none";
  BeforeBtn.style.display = "inline-block";
}

container.addEventListener("scroll", () => {
  if (container.scrollLeft == 1052) {
    nextBtn.style.display = "none";
    BeforeBtn.style.display = "inline-block";
  }
  if (container.scrollLeft == 0) {
    nextBtn.style.display = "inline-block";
    BeforeBtn.style.display = "none";
  }
});

function scroll_left() {
  container.scrollLeft = 0;
  BeforeBtn.style.display = "none";
}

// OFFERS AND PROMOS

const title = document.querySelector(".title");
const para = document.getElementById("para");
const time = document.querySelector(".validity");
const imgages = document.querySelector(".images");

function change_to_limited() {
  title.innerHTML = "Limited Period Escapes";
  para.innerHTML =
    "25% Savings* on stays at select Hotels + Minimum 4% NeuCoins";
  time.innerHTML = "VALID TILL 25<sup>th</sup> FEB 2024";
  imgages.innerHTML = '<img src="./Images/castle.png" alt="">';
}

function change_to_Urban() {
  title.innerHTML = "Urban Getaways";
  para.innerText =
    "Treat yourself and your loved ones to a relaxing staycation at our iconic city hotels.";
  time.innerHTML = "VALID TILL 31<sup>st</sup> MAR 2025";
  imgages.innerHTML = '<img src="./Images/urban.jpeg" alt="">';
}

function change_to_Carecations() {
  title.innerHTML = "Carecations";
  para.innerText =
    "Carecations enable you to embark on inspiring journeys specially designed to lead positive change for a better tomorrow. ";
  time.innerHTML = "VALID TILL 30<sup>th</sup> SEP 2024";
  imgages.innerHTML = '<img src="./Images/carecatoins.jpeg" alt="">';
}

function change_to_Member() {
  title.innerHTML = "Member Exclusive Offer";
  para.innerText = "An exclusive offer for our Exclusive members";
  time.innerHTML = "ROUND THE YEAR";
  imgages.innerHTML = '<img src="./Images/member.jpeg" alt="">';
}

function change_to_Suite() {
  title.innerHTML = "Suite Surprises";
  para.innerText = "Great value on Suite bookings";
  time.innerHTML = "VALID TILL 31<sup>st</sup> FEB 2024";
  imgages.innerHTML = '<img src="./Images/suite.jpeg" alt="">';
}

function change_to_romantic() {
  title.innerHTML = "Romantic Getaways";
  para.innerText =
    "Join us in celebrating the season of love with our special stay package for NeuPass members.";
  time.innerHTML = "VALID TILL 31<sup>st</sup> FEB 2024";
  imgages.innerHTML = '<img src="./Images/biwi.jpeg" alt="">';
}

// dropdown

const dropdown = document.querySelector(".down");
const dropdown_img = document.querySelector(".dropdown").firstElementChild;

dropdown_img.addEventListener("mouseenter", function () {
  dropdown.innerHTML =
    '&nbsp;<img src="./Images/down.png" width="18" height="18">';
});

dropdown_img.addEventListener("mouseleave", function () {
  dropdown.innerHTML =
    '&nbsp;<img src="./Images/up-arrow.png" alt="" width="15" height="15">';
});
