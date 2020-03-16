
//-------------------------------Loader-----------------------------------------

window.onload=function(){
  $("#preloader").fadeOut(3500);
}

//--------------------------------Menu------------------------------------------

$(".menu-bar").on("click", function(){
  $(".contenido").toggleClass("abrir");

});

//----------------------Importando Todos los Datos------------------------------

import {typePoison, typeFire, typeFlying, typeWater, typeBug,
typeNormal, typeElectric, typeGround, typeFighting, typePsychic,
typeRock, typeIce, typeGhost, typeDragon, typeGrass, typeFairy, typeSteel,
pokemones, wordA, wordB, wordC, wordD, wordE, wordF, wordG, wordH, wordI, wordJ,
wordK, wordL, wordM, wordN, wordO, wordP, wordR, wordS, wordT, wordV, wordW,
wordZ, buscador} from './data.js';

//---------------------Clasificación por tipo de pokemon------------------------

let btn1 = document.querySelector('#poison');
btn1.addEventListener('click', mostrar1 )
function mostrar1() {
  document.querySelector('#root').innerHTML= '';
  typePoison()
}

let btn2 = document.querySelector('#fire');
btn2.addEventListener('click', mostrar2 )
function mostrar2() {
  document.querySelector('#root').innerHTML= '';
  typeFire()
}

let btn3 = document.querySelector('#flying');
btn3.addEventListener('click', mostrar3 )
function mostrar3() {
  document.querySelector('#root').innerHTML= '';
  typeFlying()
}

let btn4 = document.querySelector('#water');
btn4.addEventListener('click', mostrar4)
function mostrar4() {
  document.querySelector('#root').innerHTML= '';
 typeWater()
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

let btn9 = document.querySelector('#fighting');
btn9.addEventListener('click', mostrar9 )
function mostrar9() {
  document.querySelector('#root').innerHTML= '';
  typeFighting()
}

let btn10 = document.querySelector('#psychic');
btn10.addEventListener('click', mostrar10 )
function mostrar10() {
  document.querySelector('#root').innerHTML= '';
  typePsychic()
}

let btn11 = document.querySelector('#rock');
btn11.addEventListener('click', mostrar11 )
function mostrar11() {
  document.querySelector('#root').innerHTML= '';
  typeRock()
}

let btn12 = document.querySelector('#ice');
btn12.addEventListener('click', mostrar12 )
function mostrar12() {
  document.querySelector('#root').innerHTML= '';
  typeIce()
}

let btn13 = document.querySelector('#ghost');
btn13.addEventListener('click', mostrar13 )
function mostrar13() {
  document.querySelector('#root').innerHTML= '';
  typeGhost()
}

let btn14 = document.querySelector('#dragon');
btn14.addEventListener('click', mostrar14 )
function mostrar14() {
  document.querySelector('#root').innerHTML= '';
  typeDragon()
}

let btn15 = document.querySelector('#grass');
btn15.addEventListener('click', mostrar15 )
function mostrar15() {
  document.querySelector('#root').innerHTML= '';
  typeGrass()
}

let btn16 = document.querySelector('#fairy');
btn16.addEventListener('click', mostrar16 )
function mostrar16() {
  document.querySelector('#root').innerHTML= '';
  typeFairy()
}

let btn17 = document.querySelector('#steel');
btn17.addEventListener('click', mostrar17 )
function mostrar17() {
  document.querySelector('#root').innerHTML= '';
  typeSteel()
}

/*************************Evento Todos los Pokemones***************************/
addEventListener('load', todos)
function todos() {
  document.querySelector ("#root").innerHTML="";
  pokemones()
}

/************************Pokemones por Abecedario******************************/
let a = document.getElementById('A');
a.addEventListener('click', all1)
function all1() {
  document.querySelector('#root').innerHTML="";
  wordA()
}

let b = document.getElementById('B');
b.addEventListener('click', all2)
function all2() {
  document.querySelector('#root').innerHTML="";
  wordB()
}

let c = document.getElementById('C');
c.addEventListener('click', all3)
function all3() {
  document.querySelector('#root').innerHTML="";
  wordC()
}

let d = document.getElementById('D');
d.addEventListener('click', all4)
function all4() {
  document.querySelector('#root').innerHTML="";
  wordD()
}

let e = document.getElementById('E');
e.addEventListener('click', all5)
function all5() {
  document.querySelector('#root').innerHTML="";
  wordE()
}

let f = document.getElementById('F');
f.addEventListener('click', all6)
function all6() {
  document.querySelector('#root').innerHTML="";
  wordF()
}

let g = document.getElementById('G');
g.addEventListener('click', all7)
function all7() {
  document.querySelector('#root').innerHTML="";
  wordG()
}

let h = document.getElementById('H');
h.addEventListener('click', all8)
function all8() {
  document.querySelector('#root').innerHTML="";
  wordH()
}

let i = document.getElementById('I');
i.addEventListener('click', all9)
function all9() {
  document.querySelector('#root').innerHTML="";
  wordI()
}

let j = document.getElementById('J');
j.addEventListener('click', all10)
function all10() {
  document.querySelector('#root').innerHTML="";
  wordJ()
}

let k = document.getElementById('K');
k.addEventListener('click', all11)
function all11() {
  document.querySelector('#root').innerHTML="";
  wordK()
}

let l = document.getElementById('L');
l.addEventListener('click', all12)
function all12() {
  document.querySelector('#root').innerHTML="";
  wordL()
}

let m = document.getElementById('M');
m.addEventListener('click', all13)
function all13() {
  document.querySelector('#root').innerHTML="";
  wordM()
}

let n = document.getElementById('N');
n.addEventListener('click', all14)
function all14() {
  document.querySelector('#root').innerHTML="";
  wordN()
}

let o = document.getElementById('O');
o.addEventListener('click', all15)
function all15() {
  document.querySelector('#root').innerHTML="";
  wordO()
}

let p = document.getElementById('P');
p.addEventListener('click', all16)
function all16() {
  document.querySelector('#root').innerHTML="";
  wordP()
}

let r = document.getElementById('R');
r.addEventListener('click', all17)
function all17() {
  document.querySelector('#root').innerHTML="";
  wordR()
}

let s = document.getElementById('S');
s.addEventListener('click', all18)
function all18() {
  document.querySelector('#root').innerHTML="";
  wordS()
}

let t = document.getElementById('T');
t.addEventListener('click', all19)
function all19() {
  document.querySelector('#root').innerHTML="";
  wordT()
}

let v = document.getElementById('V');
v.addEventListener('click', all20)
function all20() {
  document.querySelector('#root').innerHTML="";
  wordV()
}

let w = document.getElementById('W');
w.addEventListener('click', all21)
function all21() {
  document.querySelector('#root').innerHTML="";
  wordW()
}

let z = document.getElementById('Z');
z.addEventListener('click', all22)
function all22() {
  document.querySelector('#root').innerHTML="";
  wordZ()
}

/*********************************Buscador*************************************/

let btn = document.querySelector('.btn')
btn.addEventListener('click', filtrar);
function filtrar(){
  document.querySelector('#root').innerHTML="";
  buscador()

}
