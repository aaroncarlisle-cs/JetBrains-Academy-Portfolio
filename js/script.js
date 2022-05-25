// These are the jet academy requirements
let modal = document.querySelector(".window");
let close = document.querySelector(".close");

// These are my own tweaks to make the page more dynamic
let modalTitle = document.getElementById("modalTitle");
let modalLink = document.getElementById("modalLink")
let modalDesc = document.getElementById("modalDesc")


// Six buttons
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");



// Project details
btn1.onclick = function() {
    let title = "E-Commerce";
    let link = "/catalog";
    let desc = "";
    setModal(title, link, desc);
}
btn2.onclick = function() {
    let title = "CSIS 1430 Portfolio";
    let link = "/1430";
    let desc = "This portfolio represents my final project for the course CSIS 1430 - " +
        "Internet & XHTML Fundamentals at Salt Lake Community College.";
    setModal(title, link, desc);
}
btn3.onclick = function() {
    let title = "Pizza Bros";
    let link = "/pizza-2";
    let desc = "";
    setModal(title, link, desc);
}
btn4.onclick = function() {
    let title = "Triage Simulator";
    let link = "https://github.com/aaroncarlisle-cs/triage-simulator";
    let desc = "";
    setModal(title, link, desc);
}
btn5.onclick = function() {
    let title = "Tic Tac Toe";
    let link = "/tic-tac-toe";
    let desc = "";
    setModal(title, link, desc);
}
btn6.onclick = function() {
    let title = "DIY MIDI Controller";
    let link = "https://github.com/aaroncarlisle-cs/diy-midi-controller";
    let desc = "";
    setModal(title, link, desc);
}

console.log("Start");

close.onclick = function() {
    modal.style.display = "none";
}

function setModal(title, link, desc) {
    modal.style.display = "block";
    modalTitle.innerHTML = "<h2>" + title + "</h2>";
    modalLink.href = link;
    modalLink.innerHTML = title;
    modalDesc.innerHTML = desc;
}
function burger() {
    let x = document.getElementById("hamburger-links");
    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
}