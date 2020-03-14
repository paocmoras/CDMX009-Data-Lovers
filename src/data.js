
//traer la data de los pokemones
import data from './data/pokemon/pokemon.js';
//en una variable se meten los datos del objeto Pokemon
let list = data.pokemon;
 let num = list.map(p=>p.num);
 let page = document.querySelector('#root');
 console.log(num);
// console.log(list);
//se obtienen los nombre de los pokemones
//let name = list.name
// console.log(name);
//  list.map(p=>console.log(p.name));
//funcion que se exportara en el main

/////////////////////Clasificación por tipo de pokemon//////////////////////////

export const typeGrass = () =>{
  let planta = list.filter(gr=>gr.type.includes('Grass'))
  planta.filter(gr=>gr.type.includes('Grass'))
  let div = document.querySelector('#root')
  planta.map(gr =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${gr.name}</h2><br>
    <img src=${gr.img} /><br>
    <p>Numero: ${gr.id}</p>
    <p>Tipo: ${gr.type}</p>
    <p>Altura: ${gr.height}</p>
    <p>Peso: ${gr.weight}</p>
    <p>Dulces: ${gr.candy}</p>
    <p>Conteo de Dulces: ${gr.candy_count}</p>
    <p>Huevo: ${gr.egg}</p>
    <p>Probabilidad de aparición: ${gr.spawn_chance}</p>
    <p>Promedio de generación: ${gr.avg_spawns}</p>
    <p>Tiempo de generación: ${gr.spawn_time}</p>
    <p>Multiplicadores: ${gr.multipliers}</p>
    <p>Debilidades: ${gr.weaknesses}</p>
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
    <h2>${po.name}</h2><br>
    <img src=${po.img} /><br>
    <p>Numero: ${po.id}</p>
    <p>Tipo: ${po.type}</p>
    <p>Altura: ${po.height}</p>
    <p>Peso: ${po.weight}</p>
    <p>Dulces: ${po.candy}</p>
    <p>Conteo de Dulces: ${po.candy_count}</p>
    <p>Huevo: ${po.egg}</p>
    <p>Probabilidad de aparición: ${po.spawn_chance}</p>
    <p>Promedio de generación: ${po.avg_spawns}</p>
    <p>Tiempo de generación: ${po.spawn_time}</p>
    <p>Multiplicadores: ${po.multipliers}</p>
    <p>Debilidades: ${po.weaknesses}</p>
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
         <h2>${f.name}</h2><br>
         <img src=${f.img} /><br>
         <p>Numero: ${f.id}</p>
         <p>Tipo: ${f.type}</p>
         <p>Altura: ${f.height}</p>
         <p>Peso: ${f.weight}</p>
         <p>Dulces: ${f.candy}</p>
         <p>Conteo de Dulces: ${f.candy_count}</p>
         <p>Huevo: ${f.egg}</p>
         <p>Probabilidad de aparición: ${f.spawn_chance}</p>
         <p>Promedio de generación: ${f.avg_spawns}</p>
         <p>Tiempo de generación: ${f.spawn_time}</p>
         <p>Multiplicadores: ${f.multipliers}</p>
         <p>Debilidades: ${f.weaknesses}</p>
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
          <h2>${fl.name}</h2>
          <img src=${fl.img} /><br>
          <p>Numero: ${fl.id}</p>
          <p>Tipo: ${fl.type}</p>
          <p>Altura: ${fl.height}</p>
          <p>Peso: ${fl.weight}</p>
          <p>Dulces: ${fl.candy}</p>
          <p>Conteo de Dulces: ${fl.candy_count}</p>
          <p>Huevo: ${fl.egg}</p>
          <p>Probabilidad de aparición: ${fl.spawn_chance}</p>
          <p>Promedio de generación: ${fl.avg_spawns}</p>
          <p>Tiempo de generación: ${fl.spawn_time}</p>
          <p>Multiplicadores: ${fl.multipliers}</p>
          <p>Debilidades: ${fl.weaknesses}</p>
          `
           div.appendChild(d)
        });
}

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
    <h2>${w.name}</h2><br>
    <img src=${w.img} /><br>
    <p>Numero: ${w.id}</p>
    <p>Tipo: ${w.type}</p>
    <p>Altura: ${w.height}</p>
    <p>Peso: ${w.weight}</p>
    <p>Dulces: ${w.candy}</p>
    <p>Conteo de Dulces: ${w.candy_count}</p>
    <p>Huevo: ${w.egg}</p>
    <p>Probabilidad de aparición: ${w.spawn_chance}</p>
    <p>Promedio de generación: ${w.avg_spawns}</p>
    <p>Tiempo de generación: ${w.spawn_time}</p>
    <p>Multiplicadores: ${w.multipliers}</p>
    <p>Debilidades: ${w.weaknesses}</p>
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
          <h2>${b.name}</h2><br>
          <img src=${b.img} /><br>
          <p>Numero: ${b.id}</p>
          <p>Tipo: ${b.type}</p>
          <p>Altura: ${b.height}</p>
          <p>Peso: ${b.weight}</p>
          <p>Dulces: ${b.candy}</p>
          <p>Conteo de Dulces: ${b.candy_count}</p>
          <p>Huevo: ${b.egg}</p>
          <p>Probabilidad de aparición: ${b.spawn_chance}</p>
          <p>Promedio de generación: ${b.avg_spawns}</p>
          <p>Tiempo de generación: ${b.spawn_time}</p>
          <p>Multiplicadores: ${b.multipliers}</p>
          <p>Debilidades: ${b.weaknesses}</p>
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
          <h2>${n.name}</h2><br>
          <img src=${n.img} /><br>
          <p>Numero: ${n.id}</p>
          <p>Tipo: ${n.type}</p>
          <p>Altura: ${n.height}</p>
          <p>Peso: ${n.weight}</p>
          <p>Dulces: ${n.candy}</p>
          <p>Conteo de Dulces: ${n.candy_count}</p>
          <p>Huevo: ${n.egg}</p>
          <p>Probabilidad de aparición: ${n.spawn_chance}</p>
          <p>Promedio de generación: ${n.avg_spawns}</p>
          <p>Tiempo de generación: ${n.spawn_time}</p>
          <p>Multiplicadores: ${n.multipliers}</p>
          <p>Debilidades: ${n.weaknesses}</p>
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
           <h2>${el.name}</h2><br>
          <img src=${el.img} /><br>
          <p>Numero: ${el.id}</p>
          <p>Tipo: ${el.type}</p>
          <p>Altura: ${el.height}</p>
          <p>Peso: ${el.weight}</p>
          <p>Dulces: ${el.candy}</p>
          <p>Conteo de Dulces: ${el.candy_count}</p>
          <p>Huevo: ${el.egg}</p>
          <p>Probabilidad de aparición: ${el.spawn_chance}</p>
          <p>Promedio de generación: ${el.avg_spawns}</p>
          <p>Tiempo de generación: ${el.spawn_time}</p>
          <p>Multiplicadores: ${el.multipliers}</p>
          <p>Debilidades: ${el.weaknesses}</p>
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
           <h2>${gro.name}</h2><br>
          <img src=${gro.img} /><br>
          <p>Numero: ${gro.id}</p>
          <p>Tipo: ${gro.type}</p>
          <p>Altura: ${gro.height}</p>
          <p>Peso: ${gro.weight}</p>
          <p>Dulces: ${gro.candy}</p>
          <p>Conteo de Dulces: ${gro.candy_count}</p>
          <p>Huevo: ${gro.egg}</p>
          <p>Probabilidad de aparición: ${gro.spawn_chance}</p>
          <p>Promedio de generación: ${gro.avg_spawns}</p>
          <p>Tiempo de generación: ${gro.spawn_time}</p>
          <p>Multiplicadores: ${gro.multipliers}</p>
          <p>Debilidades: ${gro.weaknesses}</p>
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
           <h2>${fig.name}</h2><br>
          <img src=${fig.img} /><br>
          <p>Numero: ${fig.id}</p>
          <p>Tipo: ${fig.type}</p>
          <p>Altura: ${fig.height}</p>
          <p>Peso: ${fig.weight}</p>
          <p>Dulces: ${fig.candy}</p>
          <p>Conteo de Dulces: ${fig.candy_count}</p>
          <p>Huevo: ${fig.egg}</p>
          <p>Probabilidad de aparición: ${fig.spawn_chance}</p>
          <p>Promedio de generación: ${fig.avg_spawns}</p>
          <p>Tiempo de generación: ${fig.spawn_time}</p>
          <p>Multiplicadores: ${fig.multipliers}</p>
          <p>Debilidades: ${fig.weaknesses}</p>
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
           <h2>${ps.name}</h2><br>
          <img src=${ps.img} /><br>
          <p>Numero: ${ps.id}</p>
          <p>Tipo: ${ps.type}</p>
          <p>Altura: ${ps.height}</p>
          <p>Peso: ${ps.weight}</p>
          <p>Dulces: ${ps.candy}</p>
          <p>Conteo de Dulces: ${ps.candy_count}</p>
          <p>Huevo: ${ps.egg}</p>
          <p>Probabilidad de aparición: ${ps.spawn_chance}</p>
          <p>Promedio de generación: ${ps.avg_spawns}</p>
          <p>Tiempo de generación: ${ps.spawn_time}</p>
          <p>Multiplicadores: ${ps.multipliers}</p>
          <p>Debilidades: ${ps.weaknesses}</p>
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
           <h2>${r.name}</h2><br>
          <img src=${r.img} /><br>
          <p>Numero: ${r.id}</p>
          <p>Tipo: ${r.type}</p>
          <p>Altura: ${r.height}</p>
          <p>Peso: ${r.weight}</p>
          <p>Dulces: ${r.candy}</p>
          <p>Conteo de Dulces: ${r.candy_count}</p>
          <p>Huevo: ${r.egg}</p>
          <p>Probabilidad de aparición: ${r.spawn_chance}</p>
          <p>Promedio de generación: ${r.avg_spawns}</p>
          <p>Tiempo de generación: ${r.spawn_time}</p>
          <p>Multiplicadores: ${r.multipliers}</p>
          <p>Debilidades: ${r.weaknesses}</p>
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
           <h2>${i.name}</h2><br>
          <img src=${i.img} /><br>
          <p>Numero: ${i.id}</p>
          <p>Tipo: ${i.type}</p>
          <p>Altura: ${i.height}</p>
          <p>Peso: ${i.weight}</p>
          <p>Dulces: ${i.candy}</p>
          <p>Conteo de Dulces: ${i.candy_count}</p>
          <p>Huevo: ${i.egg}</p>
          <p>Probabilidad de aparición: ${i.spawn_chance}</p>
          <p>Promedio de generación: ${i.avg_spawns}</p>
          <p>Tiempo de generación: ${i.spawn_time}</p>
          <p>Multiplicadores: ${i.multipliers}</p>
          <p>Debilidades: ${i.weaknesses}</p>
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
          <h2>${gh.name}</h2><br>
          <img src=${gh.img} /><br>
          <p>Numero: ${gh.id}</p>
          <p>Tipo: ${gh.type}</p>
          <p>Altura: ${gh.height}</p>
          <p>Peso: ${gh.weight}</p>
          <p>Dulces: ${gh.candy}</p>
          <p>Conteo de Dulces: ${gh.candy_count}</p>
          <p>Huevo: ${gh.egg}</p>
          <p>Probabilidad de aparición: ${gh.spawn_chance}</p>
          <p>Promedio de generación: ${gh.avg_spawns}</p>
          <p>Tiempo de generación: ${gh.spawn_time}</p>
          <p>Multiplicadores: ${gh.multipliers}</p>
          <p>Debilidades: ${gh.weaknesses}</p>
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
           <h2>${dr.name}</h2><br>
          <img src=${dr.img} /><br>
          <p>Numero: ${dr.id}</p>
          <p>Tipo: ${dr.type}</p>
          <p>Altura: ${dr.height}</p>
          <p>Peso: ${dr.weight}</p>
          <p>Dulces: ${dr.candy}</p>
          <p>Conteo de Dulces: ${dr.candy_count}</p>
          <p>Huevo: ${dr.egg}</p>
          <p>Probabilidad de aparición: ${dr.spawn_chance}</p>
          <p>Promedio de generación: ${dr.avg_spawns}</p>
          <p>Tiempo de generación: ${dr.spawn_time}</p>
          <p>Multiplicadores: ${dr.multipliers}</p>
          <p>Debilidades: ${dr.weaknesses}</p>
          `
           div.appendChild(d)
        });
}

///////////////////////////Todos los pokemones//////////////////////////////////

export const pokemones = () =>{
       let c = list.forEach(c=>{
     const dat = document.createElement('p')
      dat.classList.add("card")
      dat.innerHTML += `
        <h2>${c.name}</h2><br>
        <img src=${c.img} /><br>
        <p>Numero: ${c.id}</p>
        <p>Tipo: ${c.type}</p>
        <p>Altura: ${c.height}</p>
        <p>Peso: ${c.weight}</p>
        <p>Dulces: ${c.candy}</p>
        <p>Conteo de Dulces: ${c.candy_count}</p>
        <p>Huevo: ${c.egg}</p>
        <p>Probabilidad de aparición: ${c.spawn_chance}</p>
        <p>Promedio de generación: ${c.avg_spawns}</p>
        <p>Tiempo de generación: ${c.spawn_time}</p>
        <p>Multiplicadores: ${c.multipliers}</p>
        <p>Debilidades: ${c.weaknesses}</p>
        `
       page.appendChild(dat)
     })
     }
