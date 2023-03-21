console.log("Hello World");
const body=document.querySelector('body');
const btnHamburger=document.querySelector('#btnHamburger');
const overlay=document.querySelector('.overlay');
const header=document.querySelector(".header");
const fadeElems=document.querySelectorAll(".has-fade");
btnHamburger.addEventListener('click',function(){
    if(header.classList.contains('active')){
        body.classList.remove('noscroll');
        header.classList.remove('active');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{
        body.classList.add('noscroll');
        header.classList.add('active');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
    }
 )