<<<<<<< HEAD
//import { example } from './data.js';

//--------------------------------Menu------------------------------------------

=======
import pokemon  from './data.js';
console.log(pokemon);
>>>>>>> cambios para hacer pull
$(".menu-bar").on("click", function(){
  $(".contenido").toggleClass("abrir");
  console.log("menu")
});

<<<<<<< HEAD


//console.log(example);
=======
let searchbar = document.querySelector(".search");

function slide() {
  if (searchbar.classList.contains("hide")){
      searchbar.classList.remove("hide");
  }
else{
      searchbar.classList.add("hide");
}
  }
 
>>>>>>> cambios para hacer pull
