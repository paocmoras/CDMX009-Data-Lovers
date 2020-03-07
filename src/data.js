//traer la data de los pokemones
import data from './data/pokemon/pokemon.js';
//en una variable se meten los datos del objeto Pokemon
let list = data.pokemon;
//se obtienen los nombre de los pokemones
let name = list.name
//funcion que se exportara en el main
export function pakiman () {
//crea lista de los pokemones de tipo water
   list.map(p=>console.log(p.name))
    let agua = list.filter(w=>w.type.includes('Water'))
    console.log(agua)
//lista filtrada de pokemones fire
    let w = list.filter(p=>p.weaknesses.includes("Fairy"))
 document.getElementById('root').innerHTML = agua.map(name);




}
