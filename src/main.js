
//-------------------------------Loader-----------------------------------------

window.onload=function(){
  $("#preloader").fadeOut(5000);
}

//--------------------------------Menu------------------------------------------

$(".menu-bar").on("click", function(){
  $(".contenido").toggleClass("abrir");
  console.log("menu")
});

//-----------------------------Pakiman------------------------------------------


import { pakiman } from './data.js';

let btn = document.querySelector('#water')
btn.addEventListener('click', mostrar)
 function mostrar() {
   let div = document.getElementById('root');
 div.innerHTML(pakiman());
 }



 

