let menu = document.querySelector("#menuBtn");
let header = document.querySelector("header");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeBtn = document.querySelector("#themeBtn");

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');
    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}