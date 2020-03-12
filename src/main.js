
//-------------------------------Loader-----------------------------------------

window.onload=function(){
  $("#preloader").fadeOut(5000);
}

//--------------------------------Menu------------------------------------------

$(".menu-bar").on("click", function(){
  $(".contenido").toggleClass("abrir");

});

//-----------------------------Pakiman------------------------------------------

import { typeWater, typeFire } from './data.js';
let btn = document.querySelector('#water');
btn.addEventListener('click', mostrar)
function mostrar() {
  document.querySelector('#root').innerHTML= '';
 typeWater()
}

let btn1 = document.querySelector('#fire');
btn1.addEventListener('click', mostrar1 )
function mostrar1() {
  document.querySelector('#root').innerHTML= '';
  typeFire()
  
}

