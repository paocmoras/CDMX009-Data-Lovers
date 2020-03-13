
//-------------------------------Loader-----------------------------------------

window.onload=function(){
  $("#preloader").fadeOut(5000);
}

//--------------------------------Menu------------------------------------------

$(".menu-bar").on("click", function(){
  $(".contenido").toggleClass("abrir");

});


//-----------------------------Pakiman------------------------------------------

import { typeGrass, typePoison, typeFire, typeFlying, typeWater, typeBug,
typeNormal, typeElectric, typeGround, typeFighting, typePsychic,
typeRock, typeIce, typeGhost, typeDragon, pokemones } from './data.js';

let btn1 = document.querySelector('#grass');
btn1.addEventListener('click', mostrar1 )
function mostrar1() {
  document.querySelector('#root').innerHTML= '';
  typeGrass()
}

let btn2 = document.querySelector('#poison');
btn2.addEventListener('click', mostrar2 )
function mostrar2() {
  document.querySelector('#root').innerHTML= '';
  typePoison()
}

let btn3 = document.querySelector('#fire');
btn3.addEventListener('click', mostrar3 )
function mostrar3() {
  document.querySelector('#root').innerHTML= '';
  typeFire()
}

let btn4 = document.querySelector('#flying');
btn4.addEventListener('click', mostrar4 )
function mostrar4() {
  document.querySelector('#root').innerHTML= '';
  typeFlying()
}

let btn5 = document.querySelector('#water');
btn5.addEventListener('click', mostrar5)
function mostrar5() {
  document.querySelector('#root').innerHTML= '';
 typeWater()
}

let btn6 = document.querySelector('#bug');
btn6.addEventListener('click', mostrar6 )
function mostrar6() {
  document.querySelector('#root').innerHTML= '';
  typeBug()
}

let btn7 = document.querySelector('#normal');
btn7.addEventListener('click', mostrar7 )
function mostrar7() {
  document.querySelector('#root').innerHTML= '';
  typeNormal()
}

let btn8 = document.querySelector('#electric');
btn8.addEventListener('click', mostrar8 )
function mostrar8() {
  document.querySelector('#root').innerHTML= '';
  typeElectric()
}

let btn9 = document.querySelector('#ground');
btn9.addEventListener('click', mostrar9 )
function mostrar9() {
  document.querySelector('#root').innerHTML= '';
  typeGround()
}

let btn10 = document.querySelector('#fighting');
btn10.addEventListener('click', mostrar10 )
function mostrar10() {
  document.querySelector('#root').innerHTML= '';
  typeFighting()
}

let btn11 = document.querySelector('#psychic');
btn11.addEventListener('click', mostrar11 )
function mostrar11() {
  document.querySelector('#root').innerHTML= '';
  typePsychic()
}

let btn12 = document.querySelector('#rock');
btn12.addEventListener('click', mostrar12 )
function mostrar12() {
  document.querySelector('#root').innerHTML= '';
  typeRock()
}

let btn13 = document.querySelector('#ice');
btn13.addEventListener('click', mostrar13 )
function mostrar13() {
  document.querySelector('#root').innerHTML= '';
  typeIce()
}

let btn14 = document.querySelector('#ghost');
btn14.addEventListener('click', mostrar14 )
function mostrar14() {
  document.querySelector('#root').innerHTML= '';
  typeGhost()
}

let btn15 = document.querySelector('#dragon');
btn15.addEventListener('click', mostrar15 )
function mostrar15() {
  document.querySelector('#root').innerHTML= '';
  typeDragon()
}

/*************************Evento Todos los Pokemones****************************/
addEventListener('load', todos)
function todos() {
  pokemones()
}
