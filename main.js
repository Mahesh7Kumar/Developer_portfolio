 var typed = new Typed("#work" , {
     strings:["Web Developer" , "Web Designer" , "Graphic Designer"],
     typeSpeed:100,
     backSpeed:100,
     backDelay:1000,
     loop:true
 });

// mix it up portfolio section
var mixer = mixitup('.protfolio-gallery');

//navbar icon toggle//////////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () =>{
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('open');
}

// circle skill / //////////////////////////////////////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})

//parallax//////////////////////////////////////////////////
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => observer.observer(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => observer.observer(el));

const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach((el) => observer.observer(el));



