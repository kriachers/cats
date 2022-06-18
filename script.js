const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const Blur = document.querySelector(".fill__blur");
const blurBody = document.querySelector(".fill__blur2");
    
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    Blur.classList.toggle("active");
    blurBody.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click"), () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })







const slider = document.querySelector('.slider');
const before = slider.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = document.querySelector('.change')

const body = document.body
let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
let width = slider.offsetWidth;
beforeImage.style.width = `${width}px`;

});

const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
}

body.addEventListener('mouseup', () => {
isActive = false;
console.log('up');
});

body.addEventListener('mousedown', () => {
isActive = true;
console.log('down');
});

body.addEventListener('mouseleave', () => {
isActive = false;
});


const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
};

body.addEventListener('mousemove', (e) => {
 if(!isActive){
    return;
}

let x = e.pageX;

x-= slider.getBoundingClientRect().left;
beforeAfterSlider(x);
});


