// variables

let colors = document.querySelectorAll("header .colors .color");
let darkModeBtn = document.querySelector("header .fas.fa-moon");
let paletteBtn = document.querySelector("header .fas.fa-palette");
let paletteMenu = document.querySelector("header .palette");
let navlinks = document.querySelectorAll("nav li");
let line = document.querySelector("header .line");
// let about = document.querySelector(".about");
let sections = document.querySelectorAll("section")
let skills = document.querySelector(".skills");
let progresses = document.querySelectorAll(".progress-bar");
let spanInProgress = document.querySelectorAll(".progress-bar span");
let blogImages =  document.querySelectorAll(".blogImg");
let scrollTopBtn = document.querySelector(".scrollBtn")

// events declaration 
colors.forEach(color => color.addEventListener("click", alternateColors));
darkModeBtn.addEventListener("click", switchModeFun);
paletteBtn.addEventListener("click", toggleMenuColor);
navlinks.forEach(link => link.addEventListener("click", addActive));
navlinks.forEach(link => link.addEventListener("click", scrollSection));
window.addEventListener("scroll", lineFun);
window.addEventListener("scroll", removePalette);
window.addEventListener("scroll", activeLinks);
window.addEventListener("scroll", animateProgress);
window.addEventListener("scroll", showScrollBtn);
blogImages.forEach(img => img.addEventListener("click", scaleImg));
scrollTopBtn.addEventListener("click", scrollTopFun);


// functions
function alternateColors() {
    colors.forEach(color => color.classList.remove("active"));
    let alternate = this.style.backgroundColor;
    this.classList.add("active");
    document.querySelector(":root").style.setProperty("--main-color", alternate);
   
}


function switchModeFun() {
    this.classList.toggle("fa-sun");
    if(this.classList.contains("fa-sun")){
        document.body.classList.add("active");
    }else{
        document.body.classList.remove("active");
    }
}

function toggleMenuColor() {
    paletteMenu.classList.toggle("active");
}

function addActive() {
    navlinks.forEach(ele => ele.classList.remove("active"))
    this.classList.add("active")
}

function lineFun() {
    // let width = document.body.scrollWidth;
    // console.log(percent);
    // let percent = window.scrollY / width;
    line.style.width = (window.scrollY / 2.33) + "px";
}

function removePalette() {
    paletteMenu.classList.remove("active");
}

function activeLinks() {
    
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 66){
            navlinks.forEach(link => link.classList.remove("active"));
            let sectionClass = section.className;
            document.getElementById(sectionClass).classList.add("active");
        }
    })
}

function animateProgress() {
    if(window.scrollY >= skills.offsetTop - 150){
        progresses.forEach((prog , index)=> {
            let dataWidth = prog.dataset.width;
            prog.style.width = dataWidth + "%";
            spanInProgress[index].textContent = dataWidth + "%";
        })
    }
}

function scrollSection() {
    let linkId = this.id;
    let targetSection = document.querySelector("." + linkId);
    window.scrollTo(0, targetSection.offsetTop - 66);
}

function scaleImg() {
    if(this.requestFullscreen){
        this.requestFullscreen();
    }  
}

function showScrollBtn() {
    if(window.scrollY >= 500){
        scrollTopBtn.style.display = "block";
    }else{
        scrollTopBtn.style.display = "none";
    }
}

function scrollTopFun() {
    window.scrollTo(0, 0);
}