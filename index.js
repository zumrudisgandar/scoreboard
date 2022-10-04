// Basketball score

// var homeEl = parseInt(document.getElementById("home-el"));
let homeEl = document.getElementById("home-el");
let incrementH1 = document.querySelector("#increment-btn-h1");
let incrementH2 = document.querySelector("#increment-btn-h2");
let incrementH3 = document.querySelector("#increment-btn-h3");

let guestEl = document.getElementById("guest-el");
let incrementG1 = document.querySelector("#increment-btn-g1");
let incrementG2 = document.querySelector("#increment-btn-g2");
let incrementG3 = document.querySelector("#increment-btn-g3");

incrementH1.addEventListener('click', function() {
    homeEl.innerText = parseInt(homeEl.innerText) + 1;
})

incrementH2.addEventListener('click', function() {
    homeEl.innerText = parseInt(homeEl.innerText) + 2;
})

incrementH3.addEventListener('click', function() {
    homeEl.innerText = parseInt(homeEl.innerText) + 3;
})

incrementG1.addEventListener('click', function() {
    guestEl.innerText = parseInt(guestEl.innerText) + 1;
})

incrementG2.addEventListener('click', function() {
    guestEl.innerText = parseInt(guestEl.innerText) + 2;
})

incrementG3.addEventListener('click', function() {
    guestEl.innerText = parseInt(guestEl.innerText) + 3;
})