
//traer la data de los pokemones
import data from './data/pokemon/pokemon.js';
//en una variable se meten los datos del objeto Pokemon
let list = data.pokemon;
 let num = list.map(p=>p.num);
 console.log(num);
// console.log(list);
//se obtienen los nombre de los pokemones
//let name = list.name
// console.log(name);
//  list.map(p=>console.log(p.name));
//funcion que se exportara en el main


export const typeWater = () =>{
    //crea lista de los pokemones de tipo water
       let agua = list.filter(c=>c.type.includes('Water'))
           agua.filter(w=>w.type.includes('Water'))
        //console.log(agua)
       let div = document.querySelector('#root')
        agua.map(w =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${w.img} />
           <p>${w.id}</p>
          <p>${w.name}</p>
           <p>${w.weaknesses}</p>
           <p>${w.type}</p>
           <p>${w.egg}</p>
          `
           div.appendChild(d)
        });
}
    
export const typeFire = () => {
    let fuego = list.filter(f=>f.type.includes('Fire'))
     fuego.filter(fu=>fu.type.includes('Fire'))
     let div =document.querySelector('#root')
     fuego.map(f=> {
        let d = document.createElement('d')
        d.classList.add("card")
          d.innerHTML = `
         <img src=${f.img} />
          <p>${f.id}</p>
         <p>${f.name}</p>
          <p>${f.weaknesses}</p>
          <p>${f.type}</p>
          <p>${f.egg}</p>
         `
          div.appendChild(d)
       })
     
    }