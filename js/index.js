// start setTime
let cloceSubscribe = document.querySelector(".cloce-Subscribe");
let darck = document.querySelector(".darck");

// window.onload =
function getStiTime() {
  darck.style.display = "block";
  cloceSubscribe.addEventListener("click", () => {
    darck.style.display = "none";
  });

  darck.addEventListener("click", (e) => {
    if (e.target === document.querySelector(".darck")) {
      darck.style.display = "none";
    }
  });
}
setTimeout(() => {
  getStiTime();
}, 7000);
// end setTime

// start Interval
let cloceSetInterval = document.querySelector(".close-setInterval");
let closeint = document.querySelector(".close-int");
let setIntervalDiv = document.querySelector(".setInterval");

// window.onload =
function getIntervalleft() {
  cloceSetInterval.addEventListener("click" , ()=>{
    setIntervalDiv.style.left = "-500px"
  })
  setIntervalDiv.classList.toggle("close")

}
setInterval(() => {
  getIntervalleft();
}, 6000);

// end Interval

// start navbar
let li = document.querySelectorAll(".li-nav");
li.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".li-nav.active").classList.remove("active");
    e.classList.add("active");
  });
});

// open ul1 li
let toggle = document.getElementsByClassName("plus");
let content = document.getElementsByClassName("hover-menu");
let icon = document.getElementsByClassName("icon");

for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", () => {
    if (parseInt(content[i].style.height) != content[i].scrollHeight) {
      content[i].style.height = content[i].scrollHeight + "px";

      icon[i].classList.remove("fa-plus");
      icon[i].classList.add("fa-minus");
    } else {
      content[i].style.height = "0px";
      icon[i].classList.remove("fa-minus");
      icon[i].classList.add("fa-plus");
    }
    for (let j = 0; j < content.length; j++) {
      if (i !== j) {
        content[j].style.height = "0px";
        icon[j].classList.remove("fa-minus");
        icon[j].classList.add("fa-plus");
      }
    }
  });
}
// open ul1 li

// open ul2 li
let toggle2 = document.getElementsByClassName("dwon");
let content2 = document.getElementsByClassName("hover-menu-ul2");
let iconul2 = document.getElementsByClassName("icon-ul2");

for (let k = 0; k < toggle2.length; k++) {
  toggle2[k].addEventListener("click", () => {
    if (parseInt(content2[k].style.height) != content2[k].scrollHeight) {
      content2[k].style.height = content2[k].scrollHeight + "px";

      iconul2[k].classList.remove("fa-caret-left");
      iconul2[k].classList.add("fa-caret-down");
    } else {
      content2[k].style.height = "0px";
      iconul2[k].classList.remove("fa-caret-down");
      iconul2[k].classList.add("fa-caret-left");
    }
    for (let l = 0; l < content2.length; l++) {
      if (k !== l) {
        content2[l].style.height = "0px";
        iconul2[l].classList.remove("fa-caret-down");
        iconul2[l].classList.add("fa-caret-left");
      }
    }
  });
}

// open ul2 li

// menu
function menu() {
  let openMenu = document.querySelector(".openMenu");
  let cloceMenu = document.querySelector(".logo i");
  let menu = document.querySelector(".menu");
  let darck2 = document.querySelector(".darck2");

  darck2.addEventListener("click", (e) => {
    if (e.target === document.querySelector(".darck2")) {
      darck2.style.display = "none";
      menu.style.left = "-500px";
    }
  });

  // open menu
  openMenu.addEventListener("click", () => {
    darck2.style.display = "block";
    menu.style.left = "0px";
  });

  // open menu

  // close menu
  cloceMenu.addEventListener("click", () => {
    darck2.style.display = "none";
    menu.style.left = "-500px";
  });

  // close menu
}
menu();
// menu

// end navbar

// open and close container1
let darck3 = document.querySelector(".darck3");
let container1 = document.querySelector(".container1");
let openContainer1 = document.querySelector(".open-container1");
let closeContainer1 = document.querySelector(".close-container1");
function container() {
  darck3.addEventListener("click", (e) => {
    if (e.target === document.querySelector(".darck3")) {
      darck3.style.display = "none";
      container1.style.left = "-500px";
    }
  });
  // open
  openContainer1.addEventListener("click", () => {
    darck3.style.display = "block";
    container1.style.left = "0px";
  });

  // close
  closeContainer1.addEventListener("click", () => {
    darck3.style.display = "none";
    container1.style.left = "-500px";
  });
}
container();
// open and close container1

// content2
// ringe
let content2Ringe = document.querySelector(".content2");
let ringe = document.querySelectorAll(".ringe-nump span");
window.onscroll = function () {
  ringe.forEach((span) => {
    if (window.scrollY >= content2Ringe.offsetTop) {
      span.style.width = span.dataset.width;
    }
  });
};
// ringe
// numper
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60);
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  // slide1
  document.querySelector(".days1").innerHTML = days < 10 ? `00${days}` : days;
  document.querySelector(".hours1").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes1").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds1").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  // slide2
  document.querySelector(".days2").innerHTML = days < 10 ? `00${days}` : days;
  document.querySelector(".hours2").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes2").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds2").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
// numper
// content2

// content3
// show img
let darck4 = document.querySelector(".big-img");
let showImg = document.querySelectorAll(".show-img");
let bigImgOpen = document.querySelector(".big-img");
let srcImg = document.querySelector(".src-img img");
let bigImgSrc = document.querySelector(".big-img-src");
let closeBigImg = document.querySelector(".close-big-img");



showImg.forEach(show => {
  show.addEventListener("click" ,()=> {
    
    bigImgOpen.style.display = "block"
      document.querySelector(".big-img-src").src = show.dataset.img;
    })
  })
function close(){
  bigImgOpen.style.display = "none"
}
bigImgOpen.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".big-img")) {
    bigImgOpen.style.display = "none";
  
  }
});

// showImg.forEach(show => show.addEventListener("click" , open))
closeBigImg.addEventListener("click" , close)
// show img

// rotate img
let rotateImg = document.querySelectorAll(".repeat");
rotateImg.forEach(rotatee => {
  let turn = 0;
  rotatee.addEventListener("click" , ()=>{
  turn += 0.25;
  rotatee.parentElement.parentElement.querySelector(".src-img").style.rotate = turn + 'turn'
  })
})
// rotate img
// content3

