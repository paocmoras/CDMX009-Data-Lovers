
//-------------------------------Loader-----------------------------------------

window.onload=function(){
  $("#preloader").fadeOut(5000);
}

//--------------------------------Menu------------------------------------------

$(".menu-bar").on("click", function(){
  $(".contenido").toggleClass("abrir");

});


//-----------------------------Pakiman------------------------------------------

import { typeWater, typeFire, typeGrass, typePoison, typeFlying, typeBug,
typeNormal, typeElectric, typeGround, typeFighting, typePsychic,
typeRock, typeIce, typeGhost, typeDragon } from './data.js';


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

let btn2 = document.querySelector('#grass');
btn2.addEventListener('click', mostrar2 )
function mostrar2() {
  document.querySelector('#root').innerHTML= '';
  typeGrass()

}

let btn3 = document.querySelector('#poison');
btn3.addEventListener('click', mostrar3 )
function mostrar3() {
  document.querySelector('#root').innerHTML= '';
  typePoison()

}

let btn4 = document.querySelector('#flying');
btn4.addEventListener('click', mostrar4 )
function mostrar4() {
  document.querySelector('#root').innerHTML= '';
  typeFlying()

}

let btn5 = document.querySelector('#bug');
btn5.addEventListener('click', mostrar5 )
function mostrar5() {
  document.querySelector('#root').innerHTML= '';
  typeBug()

}

let btn6 = document.querySelector('#normal');
btn6.addEventListener('click', mostrar6 )
function mostrar6() {
  document.querySelector('#root').innerHTML= '';
  typeNormal()

}

let btn7 = document.querySelector('#electric');
btn7.addEventListener('click', mostrar7 )
function mostrar7() {
  document.querySelector('#root').innerHTML= '';
  typeElectric()

}

let btn8 = document.querySelector('#ground');
btn8.addEventListener('click', mostrar8 )
function mostrar8() {
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

let btn14 = document.querySelector('#ice');
btn14.addEventListener('click', mostrar14 )
function mostrar14() {
  document.querySelector('#root').innerHTML= '';
  typeIce()

}

let btn15 = document.querySelector('#ghost');
btn15.addEventListener('click', mostrar15 )
function mostrar15() {
  document.querySelector('#root').innerHTML= '';
  typeGhost()

}

let btn16 = document.querySelector('#dragon');
btn16.addEventListener('click', mostrar16 )
function mostrar16() {
  document.querySelector('#root').innerHTML= '';
  typeDragon()

}
