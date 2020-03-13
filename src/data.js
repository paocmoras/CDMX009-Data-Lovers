
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
       let agua = list.filter(w=>w.type.includes('Water'))
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
     fuego.filter(f=>f.type.includes('Fire'))
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
       });

}

export const typeGrass = () =>{
       let planta = list.filter(gr=>gr.type.includes('Grass'))
           planta.filter(gr=>gr.type.includes('Grass'))
       let div = document.querySelector('#root')
        planta.map(gr =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${gr.img} />
          <p>${gr.id}</p>
          <p>${gr.name}</p>
           <p>${gr.weaknesses}</p>
           <p>${gr.type}</p>
           <p>${gr.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typePoison = () =>{
       let veneno = list.filter(po=>po.type.includes('Poison'))
           veneno.filter(po=>po.type.includes('Poison'))
       let div = document.querySelector('#root')
        veneno.map(po =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${po.img} />
          <p>${po.id}</p>
          <p>${po.name}</p>
           <p>${po.weaknesses}</p>
           <p>${po.type}</p>
           <p>${po.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeFlying = () =>{
       let volador = list.filter(fl=>fl.type.includes('Flying'))
           volador.filter(fl=>fl.type.includes('Flying'))
       let div = document.querySelector('#root')
        volador.map(fl =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${fl.img} />
          <p>${fl.id}</p>
          <p>${fl.name}</p>
           <p>${fl.weaknesses}</p>
           <p>${fl.type}</p>
           <p>${fl.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeBug = () =>{
       let bicho = list.filter(b=>b.type.includes('Bug'))
           bicho.filter(b=>b.type.includes('Bug'))
       let div = document.querySelector('#root')
        bicho.map(b =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${b.img} />
          <p>${b.id}</p>
          <p>${b.name}</p>
           <p>${b.weaknesses}</p>
           <p>${b.type}</p>
           <p>${b.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeNormal = () =>{
       let normal = list.filter(n=>n.type.includes('Normal'))
           normal.filter(n=>n.type.includes('Normal'))
       let div = document.querySelector('#root')
        normal.map(n =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${n.img} />
          <p>${n.id}</p>
          <p>${n.name}</p>
           <p>${n.weaknesses}</p>
           <p>${n.type}</p>
           <p>${n.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeElectric = () =>{
       let electrico = list.filter(el=>el.type.includes('Electric'))
           electrico.filter(el=>el.type.includes('Electric'))
       let div = document.querySelector('#root')
        electrico.map(el =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${el.img} />
          <p>${el.id}</p>
          <p>${el.name}</p>
           <p>${el.weaknesses}</p>
           <p>${el.type}</p>
           <p>${el.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeGround = () =>{
       let tierra = list.filter(gro=>gro.type.includes('Ground'))
           tierra.filter(gro=>gro.type.includes('Ground'))
       let div = document.querySelector('#root')
        tierra.map(gro =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${gro.img} />
          <p>${gro.id}</p>
          <p>${gro.name}</p>
           <p>${gro.weaknesses}</p>
           <p>${gro.type}</p>
           <p>${gro.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeFighting = () =>{
       let lucha = list.filter(fig=>fig.type.includes('Fighting'))
           lucha.filter(fig=>fig.type.includes('Fighting'))
       let div = document.querySelector('#root')
        lucha.map(fig =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${fig.img} />
          <p>${fig.id}</p>
          <p>${fig.name}</p>
           <p>${fig.weaknesses}</p>
           <p>${fig.type}</p>
           <p>${fig.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typePsychic = () =>{
       let psiquico = list.filter(ps=>ps.type.includes('Psychic'))
           psiquico.filter(ps=>ps.type.includes('Psychic'))
       let div = document.querySelector('#root')
        psiquico.map(ps =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${ps.img} />
          <p>${ps.id}</p>
          <p>${ps.name}</p>
           <p>${ps.weaknesses}</p>
           <p>${ps.type}</p>
           <p>${ps.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeRock = () =>{
       let roca = list.filter(r=>r.type.includes('Rock'))
           roca.filter(r=>r.type.includes('Rock'))
       let div = document.querySelector('#root')
        roca.map(r =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${r.img} />
          <p>${r.id}</p>
          <p>${r.name}</p>
           <p>${r.weaknesses}</p>
           <p>${r.type}</p>
           <p>${r.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeIce = () =>{
       let hielo = list.filter(i=>i.type.includes('Ice'))
           hielo.filter(i=>i.type.includes('Ice'))
       let div = document.querySelector('#root')
        hielo.map(i =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${i.img} />
          <p>${i.id}</p>
          <p>${i.name}</p>
           <p>${i.weaknesses}</p>
           <p>${i.type}</p>
           <p>${i.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeGhost = () =>{
       let fantasma = list.filter(gh=>gh.type.includes('Ghost'))
           fantasma.filter(gh=>gh.type.includes('Ghost'))
       let div = document.querySelector('#root')
        fantasma.map(gh =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${gh.img} />
          <p>${gh.id}</p>
          <p>${gh.name}</p>
           <p>${gh.weaknesses}</p>
           <p>${gh.type}</p>
           <p>${gh.egg}</p>
          `
           div.appendChild(d)
        });
}

export const typeDragon = () =>{
       let dragon = list.filter(dr=>dr.type.includes('Dragon'))
           dragon.filter(dr=>dr.type.includes('Dragon'))
       let div = document.querySelector('#root')
        dragon.map(dr =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <img src=${dr.img} />
          <p>${dr.id}</p>
          <p>${dr.name}</p>
           <p>${dr.weaknesses}</p>
           <p>${dr.type}</p>
           <p>${dr.egg}</p>
          `
           div.appendChild(d)
        });
}
