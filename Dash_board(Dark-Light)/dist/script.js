"use strict";console.log("Hello");
//# sourceMappingURL=script.js.map
console.log(localStorage.getItem('colorMode'));
const darkB=document.getElementById('dark');
const lightB=document.getElementById('light');

const setColourMode=()=>{
    if(localStorage.getItem('colorMode')=='dark'){
        setDarkMode();
        darkB.click();
    }
    else if(localStorage.getItem('colorMode')=='light'){
        setLightMode();
        lightB.click();
    }
}
const checkIsLight=()=>{
    if(localStorage.getItem('colorMode')==null)
    {
        if(window.matchMedia('(prefers-color-scheme:light)').matches){
        lightB.click();
        setLightMode();
    }else if(window.matchMedia('(prefers-color-scheme:dark)').matches){
        darkB.click();
        setDarkMode();
    }
    }
}

const checkMode=()=>{
    window.matchMedia('(prefers-color-scheme:dark)')
        .addEventListener('change',event=>{
            checkIsLight();
        })
}


const setDarkMode=()=>{
    (document.querySelector('body').classList='dark');
}

const setLightMode=()=>{
    (document.querySelector('body').classList='light');
}
setColourMode();
checkMode();




const radioButtons=document.querySelectorAll('.toggle__wrapper input');
for(let i=0;i<radioButtons.length;i++){
    radioButtons[i].addEventListener('click',event=>{
    
        if(document.getElementById('dark').checked){
            (document.querySelector('body').classList='dark');
            localStorage.setItem('colorMode','dark');
        }else{
            (document.querySelector('body').classList='light');
            localStorage.setItem('colorMode','light');
        }
    });
}
























