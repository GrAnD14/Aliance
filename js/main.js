const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mobmenu = document.querySelector(".mobile-menu");
const mobilebc = document.querySelector(".mobile-bc-white");
const moblines = document.querySelector(".mobile-lines");
const moblines1 = document.querySelector(".mobile-lines:nth-child(1)");
const moblines2 = document.querySelector(".mobile-lines:nth-child(2)");
const moblines3 = document.querySelector(".mobile-lines:nth-child(3)");

const lightOn = (even) => {
  navbar.classList.add("navbar-light");
  logo.href.baseVal = "images/sprite.svg#logo";
  mobilebc.style.height = "6666px";
};

const lightOff = (even) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "images/sprite.svg#logo-light";
  moblines2.style.display = "block";
};

const close_menu = (x) => {
  moblines1.style.transform = "translateY(7px) rotate(48deg)";
  moblines2.style.display = "none";
  moblines3.style.transform = "translateY(-0.7px) rotate(-48deg)";
};

const burger = (x) => {
  moblines1.style.transform = "translateY(0px) rotate(0deg)";
  moblines2.style.display = "block";
  moblines3.style.transform = "translateY(0px) rotate(0deg)";
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 && mobilebc.style.display === "none"
    ? lightOn()
    : lightOff();

  if (this.scrollY > -1 && mobilebc.style.display === "block") {
    lightOn();
    close_menu();
  }
});

mobmenu.onclick = () => {
  if (mobilebc.style.display === "none") {
    lightOn();
    close_menu();
    mobilebc.style.display = "block";
  } else {
    mobilebc.style.display = "none";
    lightOff();
    burger();
  }
};
