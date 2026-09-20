/* =========================
   AOS INITIALIZE
========================= */

AOS.init({

    duration:1000,
    once:true,
    offset:100

});





/* =========================
   TYPING EFFECT
========================= */


var typed = new Typed("#typing", {

    strings:[
        "Full Stack Developer",
        "UI/UX Designer",
        "Web Developer",
        "Creative Designer",
        "Graphic Designer"
    ],

    typeSpeed:80,
    backSpeed:40,
    backDelay:1500,
    loop:true

});





/* =========================
   NAVBAR BACKGROUND ON SCROLL
========================= */


window.addEventListener("scroll",function(){


    let navbar = document.querySelector(".navbar");


    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(2,12,27,0.95)";

    }

    else{

        navbar.style.background =
        "rgba(2,12,27,0.75)";

    }


});





/* =========================
   SMOOTH SCROLL
========================= */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});





/* =========================
   MOBILE NAVBAR CLOSE
========================= */


let navLinks =
document.querySelectorAll(".nav-link");


let navbarCollapse =
document.querySelector(".navbar-collapse");


navLinks.forEach(function(link){


    link.addEventListener("click",function(){


        if(navbarCollapse.classList.contains("show")){


            new bootstrap.Collapse(navbarCollapse)
            .hide();


        }


    });


});


// =========================
// CURRENT YEAR FOOTER
// =========================

let year = new Date().getFullYear();

document.querySelector(".copyright").innerHTML =
"© " + year + " Sachin Rathnayaka. All Rights Reserved.";


// =========================
// PAGE LOADER
// =========================


window.addEventListener("load",()=>{

    document.querySelector(".loader")
    .style.display="none";

});


// =========================
// SCROLL TOP
// =========================


let scrollBtn =
document.getElementById("scrollTop");


window.addEventListener("scroll",()=>{


if(window.scrollY > 300){

    scrollBtn.style.display="block";

}

else{

    scrollBtn.style.display="none";

}


});



scrollBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};


const cursor =
document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";


});