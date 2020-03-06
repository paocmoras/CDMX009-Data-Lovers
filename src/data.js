import data from './data/pokemon/pokemon.js';
let list = data.pokemon;
let name = list.name
export function pakiman () {
   list.map(p=>console.log(p.name))
    let agua = list.filter(w=>w.type.includes('Water'))
    console.log(agua)
 
    let w = list.filter(p=>p.weaknesses.includes("Fairy"))
    let fire = w;
   let div = document.getElementById('root');
   div.innerHTML = fire;
        

}

