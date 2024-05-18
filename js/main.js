const mylist = document.querySelectorAll(".navbar-nav .nav-item");
const mylinks = document.querySelectorAll(".navbar a");

for (var i = 0; i < mylist.length; i++) {
  mylist[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(" active1");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active1", "");
    }
    this.className += " active1";
  });
}

let targetSection = document.getElementById("numbers");
let counterElement = document.querySelector(".counter1");
let counterElement2 = document.querySelector(".counter2");
let counterElement3 = document.querySelector(".counter3");
let counterElement4 = document.querySelector(".counter4");
const callback = (entries, observer) => {
  counter = 0;
  counter2 = 850;
  counter3 = 0;
  counter4 = 50;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start the counter when the section comes into view
      startCounter();
    }
  });
};

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(callback);

// Observe the target section
observer.observe(targetSection);

// Counter logic

let counterInterval1;
let counterInterval2;
let counterInterval3;
let counterInterval4;

function startCounter() {
  counterInterval1 = setInterval(updateCounter1, 0.01);
  counterInterval2 = setInterval(updateCounter2, 0.01);
  counterInterval3 = setInterval(updateCounter3, 0.01);
  counterInterval4 = setInterval(updateCounter4, 0.01);
}

function updateCounter1() {
  counter++;

  if (counter === 850) {
    clearInterval(counterInterval1);
  }

  counterElement.textContent = counter;
}
function updateCounter2() {
  counter2++;
  if (counter2 === 1700) {
    clearInterval(counterInterval2);
  }
  counterElement2.textContent = counter2;
}
function updateCounter3() {
  counter3++;
  if (counter3 === 250) {
    clearInterval(counterInterval3);
  }
  counterElement3.textContent = counter3;
}
function updateCounter4() {
  counter4++;
  if (counter4 === 780) {
    clearInterval(counterInterval4);
  }
  counterElement4.textContent = counter4;
}

let ourabout = document.querySelector(".about");
let mynav = document.querySelector(".navbar");

window.onscroll = function () {
  let abouttop = ourabout.offsetTop;
  let aboutheight = ourabout.offsetHeight;
  let windowheight = this.innerHeight;
  let windowscrolltop = this.pageYOffset;

  if (windowscrolltop > abouttop + aboutheight - windowheight) {
    let allabout = document.querySelectorAll(".about .bar .progress-bar");
    allabout.forEach((about) => {
      about.style.width = about.dataset.value;
    });
  }
};
