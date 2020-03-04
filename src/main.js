//import { example } from './data.js';
$(".menu-bar").on("click", function(){
  $(".contenido").toggleClass("abrir");
  console.log("menu")
});

let searchbar = document.querySelector(".search");

function slide() {
  if (searchbar.classList.contains("hide")){
      searchbar.classList.remove("hide");
  }
else{
      searchbar.classList.add("hide");
}
  }


//console.log(example);
