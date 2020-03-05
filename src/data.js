import data from './data/pokemon/pokemon.js';
let list = data.pokemon;
let name = list.name
export function pakiman () {
   list.map(p=>console.log(p.name))
    let agua = list.filter(w=>w.type.includes('Water'))
    console.log(agua)
    let cont = document.querySelector('#root');
   
    agua.map(pok=>{
        let p = document.createElement('p')
        p.classList.add('card')
        p.innerHTML = `
        <img src=${pok.img}/>
        <p>${pok.name}</p>`
        cont.appendChild(p)
    })
        

}

