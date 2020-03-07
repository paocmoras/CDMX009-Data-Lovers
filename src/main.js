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

console.log(pakiman());
addEventListener('load', mostrar)
 function mostrar() {
   pakiman();
 }
