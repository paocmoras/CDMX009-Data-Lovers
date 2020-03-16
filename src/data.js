//traer la data de los pokemones
import data from './data/pokemon/pokemon1.js';
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
       let bicho = list.filter(bu=>bu.type.includes('Bug'))
           bicho.filter(bu=>bu.type.includes('Bug'))
       let div = document.querySelector('#root')
        bicho.map(bu =>{
         let d = document.createElement('d')
         d.classList.add("card")
           d.innerHTML = `
          <h2>${bu.name}</h2><br>
          <img src=${bu.img} /><br>
          <p>Numero: ${bu.id}</p>
          <p>Tipo: ${bu.type}</p>
          <p>Altura: ${bu.height}</p>
          <p>Peso: ${bu.weight}</p>
          <p>Dulces: ${bu.candy}</p>
          <p>Conteo de Dulces: ${bu.candy_count}</p>
          <p>Huevo: ${bu.egg}</p>
          <p>Probabilidad de aparición: ${bu.spawn_chance}</p>
          <p>Promedio de generación: ${bu.avg_spawns}</p>
          <p>Tiempo de generación: ${bu.spawn_time}</p>
          <p>Multiplicadores: ${bu.multipliers}</p>
          <p>Debilidades: ${bu.weaknesses}</p>
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

export const typeFairy = () =>{
  let hada = list.filter(fai=>fai.type.includes('Fairy'))
  hada.filter(fai=>fai.type.includes('Grass'))
  let div = document.querySelector('#root')
  hada.map(fai =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${fai.name}</h2><br>
    <img src=${fai.img} /><br>
    <p>Numero: ${fai.id}</p>
    <p>Tipo: ${fai.type}</p>
    <p>Altura: ${fai.height}</p>
    <p>Peso: ${fai.weight}</p>
    <p>Dulces: ${fai.candy}</p>
    <p>Conteo de Dulces: ${fai.candy_count}</p>
    <p>Huevo: ${fai.egg}</p>
    <p>Probabilidad de aparición: ${fai.spawn_chance}</p>
    <p>Promedio de generación: ${fai.avg_spawns}</p>
    <p>Tiempo de generación: ${fai.spawn_time}</p>
    <p>Multiplicadores: ${fai.multipliers}</p>
    <p>Debilidades: ${fai.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const typeSteel = () =>{
  let acero = list.filter(st=>st.type.includes('Steel'))
  acero.filter(st=>st.type.includes('Steel'))
  let div = document.querySelector('#root')
  acero.map(st =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${st.name}</h2><br>
    <img src=${st.img} /><br>
    <p>Numero: ${st.id}</p>
    <p>Tipo: ${st.type}</p>
    <p>Altura: ${st.height}</p>
    <p>Peso: ${st.weight}</p>
    <p>Dulces: ${st.candy}</p>
    <p>Conteo de Dulces: ${st.candy_count}</p>
    <p>Huevo: ${st.egg}</p>
    <p>Probabilidad de aparición: ${st.spawn_chance}</p>
    <p>Promedio de generación: ${st.avg_spawns}</p>
    <p>Tiempo de generación: ${st.spawn_time}</p>
    <p>Multiplicadores: ${st.multipliers}</p>
    <p>Debilidades: ${st.weaknesses}</p>
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
  });
}


/////////////////////////Pokemones por alfabeto/////////////////////////////////
export const wordA = () =>{
  let letrA = list.filter(A=>A.name.includes('A'))
  letrA.filter(A=>A.name.includes('A'))
  let div = document.querySelector('#root')
  letrA.map(A =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${A.name}</h2><br>
    <img src=${A.img} /><br>
    <p>Nombre: ${A.name}</p>
    <p>Tipo: ${A.type}</p>
    <p>Altura: ${A.height}</p>
    <p>Peso: ${A.weight}</p>
    <p>Dulces: ${A.candy}</p>
    <p>Conteo de Dulces: ${A.candy_count}</p>
    <p>Huevo: ${A.egg}</p>
    <p>Probabilidad de aparición: ${A.spawn_chance}</p>
    <p>Promedio de generación: ${A.avg_spawns}</p>
    <p>Tiempo de generación: ${A.spawn_time}</p>
    <p>Multiplicadores: ${A.multipliers}</p>
    <p>Debilidades: ${A.weaknesses}</p>
    `
    div.appendChild(d)
  });
}


export const wordB = () =>{
  let letrB = list.filter(B=>B.name.includes('B'))
  letrB.filter(B=>B.name.includes('B'))
  let div = document.querySelector('#root')
  letrB.map(B =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${B.name}</h2><br>
    <img src=${B.img} /><br>
    <p>Nombre: ${B.name}</p>
    <p>Tipo: ${B.type}</p>
    <p>Altura: ${B.height}</p>
    <p>Peso: ${B.weight}</p>
    <p>Dulces: ${B.candy}</p>
    <p>Conteo de Dulces: ${B.candy_count}</p>
    <p>Huevo: ${B.egg}</p>
    <p>Probabilidad de aparición: ${B.spawn_chance}</p>
    <p>Promedio de generación: ${B.avg_spawns}</p>
    <p>Tiempo de generación: ${B.spawn_time}</p>
    <p>Multiplicadores: ${B.multipliers}</p>
    <p>Debilidades: ${B.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordC = () =>{
  let letrC = list.filter(C=>C.name.includes('C'))
  letrC.filter(C=>C.name.includes('C'))
  let div = document.querySelector('#root')
  letrC.map(C =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${C.name}</h2><br>
    <img src=${C.img} /><br>
    <p>Nombre: ${C.name}</p>
    <p>Tipo: ${C.type}</p>
    <p>Altura: ${C.height}</p>
    <p>Peso: ${C.weight}</p>
    <p>Dulces: ${C.candy}</p>
    <p>Conteo de Dulces: ${C.candy_count}</p>
    <p>Huevo: ${C.egg}</p>
    <p>Probabilidad de aparición: ${C.spawn_chance}</p>
    <p>Promedio de generación: ${C.avg_spawns}</p>
    <p>Tiempo de generación: ${C.spawn_time}</p>
    <p>Multiplicadores: ${C.multipliers}</p>
    <p>Debilidades: ${C.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordD = () =>{
  let letrD = list.filter(D=>D.name.includes('D'))
  letrD.filter(D=>D.name.includes('D'))
  let div = document.querySelector('#root')
  letrD.map(D =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${D.name}</h2><br>
    <img src=${D.img} /><br>
    <p>Nombre: ${D.name}</p>
    <p>Tipo: ${D.type}</p>
    <p>Altura: ${D.height}</p>
    <p>Peso: ${D.weight}</p>
    <p>Dulces: ${D.candy}</p>
    <p>Conteo de Dulces: ${D.candy_count}</p>
    <p>Huevo: ${D.egg}</p>
    <p>Probabilidad de aparición: ${D.spawn_chance}</p>
    <p>Promedio de generación: ${D.avg_spawns}</p>
    <p>Tiempo de generación: ${D.spawn_time}</p>
    <p>Multiplicadores: ${D.multipliers}</p>
    <p>Debilidades: ${D.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordE = () =>{
  let letrE = list.filter(E=>E.name.includes('E'))
  letrE.filter(E=>E.name.includes('E'))
  let div = document.querySelector('#root')
  letrE.map(E =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${E.name}</h2><br>
    <img src=${E.img} /><br>
    <p>Nombre: ${E.name}</p>
    <p>Tipo: ${E.type}</p>
    <p>Altura: ${E.height}</p>
    <p>Peso: ${E.weight}</p>
    <p>Dulces: ${E.candy}</p>
    <p>Conteo de Dulces: ${E.candy_count}</p>
    <p>Huevo: ${E.egg}</p>
    <p>Probabilidad de aparición: ${E.spawn_chance}</p>
    <p>Promedio de generación: ${E.avg_spawns}</p>
    <p>Tiempo de generación: ${E.spawn_time}</p>
    <p>Multiplicadores: ${E.multipliers}</p>
    <p>Debilidades: ${E.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordF = () =>{
  let letrF = list.filter(F=>F.name.includes('F'))
  letrF.filter(F=>F.name.includes('F'))
  let div = document.querySelector('#root')
  letrF.map(F =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${F.name}</h2><br>
    <img src=${F.img} /><br>
    <p>Nombre: ${F.name}</p>
    <p>Tipo: ${F.type}</p>
    <p>Altura: ${F.height}</p>
    <p>Peso: ${F.weight}</p>
    <p>Dulces: ${F.candy}</p>
    <p>Conteo de Dulces: ${F.candy_count}</p>
    <p>Huevo: ${F.egg}</p>
    <p>Probabilidad de aparición: ${F.spawn_chance}</p>
    <p>Promedio de generación: ${F.avg_spawns}</p>
    <p>Tiempo de generación: ${F.spawn_time}</p>
    <p>Multiplicadores: ${F.multipliers}</p>
    <p>Debilidades: ${F.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordG = () =>{
  let letrG = list.filter(G=>G.name.includes('G'))
  letrG.filter(G=>G.name.includes('G'))
  let div = document.querySelector('#root')
  letrG.map(G =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${G.name}</h2><br>
    <img src=${G.img} /><br>
    <p>Nombre: ${G.name}</p>
    <p>Tipo: ${G.type}</p>
    <p>Altura: ${G.height}</p>
    <p>Peso: ${G.weight}</p>
    <p>Dulces: ${G.candy}</p>
    <p>Conteo de Dulces: ${G.candy_count}</p>
    <p>Huevo: ${G.egg}</p>
    <p>Probabilidad de aparición: ${G.spawn_chance}</p>
    <p>Promedio de generación: ${G.avg_spawns}</p>
    <p>Tiempo de generación: ${G.spawn_time}</p>
    <p>Multiplicadores: ${G.multipliers}</p>
    <p>Debilidades: ${G.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordH = () =>{
  let letrH = list.filter(H=>H.name.includes('H'))
  letrH.filter(H=>H.name.includes('H'))
  let div = document.querySelector('#root')
  letrH.map(H =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${H.name}</h2><br>
    <img src=${H.img} /><br>
    <p>Nombre: ${H.name}</p>
    <p>Tipo: ${H.type}</p>
    <p>Altura: ${H.height}</p>
    <p>Peso: ${H.weight}</p>
    <p>Dulces: ${H.candy}</p>
    <p>Conteo de Dulces: ${H.candy_count}</p>
    <p>Huevo: ${H.egg}</p>
    <p>Probabilidad de aparición: ${H.spawn_chance}</p>
    <p>Promedio de generación: ${H.avg_spawns}</p>
    <p>Tiempo de generación: ${H.spawn_time}</p>
    <p>Multiplicadores: ${H.multipliers}</p>
    <p>Debilidades: ${H.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordI = () =>{
  let letrI = list.filter(I=>I.name.includes('I'))
  letrI.filter(I=>I.name.includes('I'))
  let div = document.querySelector('#root')
  letrI.map(I =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${I.name}</h2><br>
    <img src=${I.img} /><br>
    <p>Nombre: ${I.name}</p>
    <p>Tipo: ${I.type}</p>
    <p>Altura: ${I.height}</p>
    <p>Peso: ${I.weight}</p>
    <p>Dulces: ${I.candy}</p>
    <p>Conteo de Dulces: ${I.candy_count}</p>
    <p>Huevo: ${I.egg}</p>
    <p>Probabilidad de aparición: ${I.spawn_chance}</p>
    <p>Promedio de generación: ${I.avg_spawns}</p>
    <p>Tiempo de generación: ${I.spawn_time}</p>
    <p>Multiplicadores: ${I.multipliers}</p>
    <p>Debilidades: ${I.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordJ = () =>{
  let letrJ = list.filter(J=>J.name.includes('J'))
  letrJ.filter(J=>J.name.includes('J'))
  let div = document.querySelector('#root')
  letrJ.map(J =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${J.name}</h2><br>
    <img src=${J.img} /><br>
    <p>Nombre: ${J.name}</p>
    <p>Tipo: ${J.type}</p>
    <p>Altura: ${J.height}</p>
    <p>Peso: ${J.weight}</p>
    <p>Dulces: ${J.candy}</p>
    <p>Conteo de Dulces: ${J.candy_count}</p>
    <p>Huevo: ${J.egg}</p>
    <p>Probabilidad de aparición: ${J.spawn_chance}</p>
    <p>Promedio de generación: ${J.avg_spawns}</p>
    <p>Tiempo de generación: ${J.spawn_time}</p>
    <p>Multiplicadores: ${J.multipliers}</p>
    <p>Debilidades: ${J.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordK = () =>{
  let letrK = list.filter(K=>K.name.includes('K'))
  letrK.filter(K=>K.name.includes('K'))
  let div = document.querySelector('#root')
  letrK.map(K =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${K.name}</h2><br>
    <img src=${K.img} /><br>
    <p>Nombre: ${K.name}</p>
    <p>Tipo: ${K.type}</p>
    <p>Altura: ${K.height}</p>
    <p>Peso: ${K.weight}</p>
    <p>Dulces: ${K.candy}</p>
    <p>Conteo de Dulces: ${K.candy_count}</p>
    <p>Huevo: ${K.egg}</p>
    <p>Probabilidad de aparición: ${K.spawn_chance}</p>
    <p>Promedio de generación: ${K.avg_spawns}</p>
    <p>Tiempo de generación: ${K.spawn_time}</p>
    <p>Multiplicadores: ${K.multipliers}</p>
    <p>Debilidades: ${K.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordL = () =>{
  let letrL = list.filter(L=>L.name.includes('L'))
  letrL.filter(L=>L.name.includes('L'))
  let div = document.querySelector('#root')
  letrL.map(L =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${L.name}</h2><br>
    <img src=${L.img} /><br>
    <p>Nombre: ${L.name}</p>
    <p>Tipo: ${L.type}</p>
    <p>Altura: ${L.height}</p>
    <p>Peso: ${L.weight}</p>
    <p>Dulces: ${L.candy}</p>
    <p>Conteo de Dulces: ${L.candy_count}</p>
    <p>Huevo: ${L.egg}</p>
    <p>Probabilidad de aparición: ${L.spawn_chance}</p>
    <p>Promedio de generación: ${L.avg_spawns}</p>
    <p>Tiempo de generación: ${L.spawn_time}</p>
    <p>Multiplicadores: ${L.multipliers}</p>
    <p>Debilidades: ${L.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordM = () =>{
  let letrM = list.filter(M=>M.name.includes('M'))
  letrM.filter(M=>M.name.includes('M'))
  let div = document.querySelector('#root')
  letrM.map(M =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${M.name}</h2><br>
    <img src=${M.img} /><br>
    <p>Nombre: ${M.name}</p>
    <p>Tipo: ${M.type}</p>
    <p>Altura: ${M.height}</p>
    <p>Peso: ${M.weight}</p>
    <p>Dulces: ${M.candy}</p>
    <p>Conteo de Dulces: ${M.candy_count}</p>
    <p>Huevo: ${M.egg}</p>
    <p>Probabilidad de aparición: ${M.spawn_chance}</p>
    <p>Promedio de generación: ${M.avg_spawns}</p>
    <p>Tiempo de generación: ${M.spawn_time}</p>
    <p>Multiplicadores: ${M.multipliers}</p>
    <p>Debilidades: ${M.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordN = () =>{
  let letrN = list.filter(N=>N.name.includes('N'))
  letrN.filter(N=>N.name.includes('N'))
  let div = document.querySelector('#root')
  letrN.map(N =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${N.name}</h2><br>
    <img src=${N.img} /><br>
    <p>Nombre: ${N.name}</p>
    <p>Tipo: ${N.type}</p>
    <p>Altura: ${N.height}</p>
    <p>Peso: ${N.weight}</p>
    <p>Dulces: ${N.candy}</p>
    <p>Conteo de Dulces: ${N.candy_count}</p>
    <p>Huevo: ${N.egg}</p>
    <p>Probabilidad de aparición: ${N.spawn_chance}</p>
    <p>Promedio de generación: ${N.avg_spawns}</p>
    <p>Tiempo de generación: ${N.spawn_time}</p>
    <p>Multiplicadores: ${N.multipliers}</p>
    <p>Debilidades: ${N.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordO = () =>{
  let letrO = list.filter(O=>O.name.includes('O'))
  letrO.filter(O=>O.name.includes('O'))
  let div = document.querySelector('#root')
  letrO.map(O =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${O.name}</h2><br>
    <img src=${O.img} /><br>
    <p>Nombre: ${O.name}</p>
    <p>Tipo: ${O.type}</p>
    <p>Altura: ${O.height}</p>
    <p>Peso: ${O.weight}</p>
    <p>Dulces: ${O.candy}</p>
    <p>Conteo de Dulces: ${O.candy_count}</p>
    <p>Huevo: ${O.egg}</p>
    <p>Probabilidad de aparición: ${O.spawn_chance}</p>
    <p>Promedio de generación: ${O.avg_spawns}</p>
    <p>Tiempo de generación: ${O.spawn_time}</p>
    <p>Multiplicadores: ${O.multipliers}</p>
    <p>Debilidades: ${O.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordP = () =>{
  let letrP = list.filter(P=>P.name.includes('P'))
  letrP.filter(P=>P.name.includes('P'))
  let div = document.querySelector('#root')
  letrP.map(P =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${P.name}</h2><br>
    <img src=${P.img} /><br>
    <p>Nombre: ${P.name}</p>
    <p>Tipo: ${P.type}</p>
    <p>Altura: ${P.height}</p>
    <p>Peso: ${P.weight}</p>
    <p>Dulces: ${P.candy}</p>
    <p>Conteo de Dulces: ${P.candy_count}</p>
    <p>Huevo: ${P.egg}</p>
    <p>Probabilidad de aparición: ${P.spawn_chance}</p>
    <p>Promedio de generación: ${P.avg_spawns}</p>
    <p>Tiempo de generación: ${P.spawn_time}</p>
    <p>Multiplicadores: ${P.multipliers}</p>
    <p>Debilidades: ${P.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordR = () =>{
  let letrR = list.filter(R=>R.name.includes('R'))
  letrR.filter(R=>R.name.includes('R'))
  let div = document.querySelector('#root')
  letrR.map(R =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${R.name}</h2><br>
    <img src=${R.img} /><br>
    <p>Nombre: ${R.name}</p>
    <p>Tipo: ${R.type}</p>
    <p>Altura: ${R.height}</p>
    <p>Peso: ${R.weight}</p>
    <p>Dulces: ${R.candy}</p>
    <p>Conteo de Dulces: ${R.candy_count}</p>
    <p>Huevo: ${R.egg}</p>
    <p>Probabilidad de aparición: ${R.spawn_chance}</p>
    <p>Promedio de generación: ${R.avg_spawns}</p>
    <p>Tiempo de generación: ${R.spawn_time}</p>
    <p>Multiplicadores: ${R.multipliers}</p>
    <p>Debilidades: ${R.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordS = () =>{
  let letrS = list.filter(S=>S.name.includes('S'))
  letrS.filter(S=>S.name.includes('S'))
  let div = document.querySelector('#root')
  letrS.map(S =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${S.name}</h2><br>
    <img src=${S.img} /><br>
    <p>Nombre: ${S.name}</p>
    <p>Tipo: ${S.type}</p>
    <p>Altura: ${S.height}</p>
    <p>Peso: ${S.weight}</p>
    <p>Dulces: ${S.candy}</p>
    <p>Conteo de Dulces: ${S.candy_count}</p>
    <p>Huevo: ${S.egg}</p>
    <p>Probabilidad de aparición: ${S.spawn_chance}</p>
    <p>Promedio de generación: ${S.avg_spawns}</p>
    <p>Tiempo de generación: ${S.spawn_time}</p>
    <p>Multiplicadores: ${S.multipliers}</p>
    <p>Debilidades: ${S.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordT = () =>{
  let letrT = list.filter(T=>T.name.includes('T'))
  letrT.filter(T=>T.name.includes('T'))
  let div = document.querySelector('#root')
  letrT.map(T =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${T.name}</h2><br>
    <img src=${T.img} /><br>
    <p>Nombre: ${T.name}</p>
    <p>Tipo: ${T.type}</p>
    <p>Altura: ${T.height}</p>
    <p>Peso: ${T.weight}</p>
    <p>Dulces: ${T.candy}</p>
    <p>Conteo de Dulces: ${T.candy_count}</p>
    <p>Huevo: ${T.egg}</p>
    <p>Probabilidad de aparición: ${T.spawn_chance}</p>
    <p>Promedio de generación: ${T.avg_spawns}</p>
    <p>Tiempo de generación: ${T.spawn_time}</p>
    <p>Multiplicadores: ${T.multipliers}</p>
    <p>Debilidades: ${T.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordV = () =>{
  let letrV = list.filter(V=>V.name.includes('V'))
  letrV.filter(V=>V.name.includes('V'))
  let div = document.querySelector('#root')
  letrV.map(V =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${V.name}</h2><br>
    <img src=${V.img} /><br>
    <p>Nombre: ${V.name}</p>
    <p>Tipo: ${V.type}</p>
    <p>Altura: ${V.height}</p>
    <p>Peso: ${V.weight}</p>
    <p>Dulces: ${V.candy}</p>
    <p>Conteo de Dulces: ${V.candy_count}</p>
    <p>Huevo: ${V.egg}</p>
    <p>Probabilidad de aparición: ${V.spawn_chance}</p>
    <p>Promedio de generación: ${V.avg_spawns}</p>
    <p>Tiempo de generación: ${V.spawn_time}</p>
    <p>Multiplicadores: ${V.multipliers}</p>
    <p>Debilidades: ${V.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordW = () =>{
  let letrW = list.filter(W=>W.name.includes('W'))
  letrW.filter(W=>W.name.includes('W'))
  let div = document.querySelector('#root')
  letrW.map(W =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${W.name}</h2><br>
    <img src=${W.img} /><br>
    <p>Nombre: ${W.name}</p>
    <p>Tipo: ${W.type}</p>
    <p>Altura: ${W.height}</p>
    <p>Peso: ${W.weight}</p>
    <p>Dulces: ${W.candy}</p>
    <p>Conteo de Dulces: ${W.candy_count}</p>
    <p>Huevo: ${W.egg}</p>
    <p>Probabilidad de aparición: ${W.spawn_chance}</p>
    <p>Promedio de generación: ${W.avg_spawns}</p>
    <p>Tiempo de generación: ${W.spawn_time}</p>
    <p>Multiplicadores: ${W.multipliers}</p>
    <p>Debilidades: ${W.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const wordZ = () =>{
  let letrZ = list.filter(Z=>Z.name.includes('Z'))
  letrZ.filter(Z=>Z.name.includes('Z'))
  let div = document.querySelector('#root')
  letrZ.map(Z =>{
    let d = document.createElement('d')
    d.classList.add("card")
    d.innerHTML = `
    <h2>${Z.name}</h2><br>
    <img src=${Z.img} /><br>
    <p>Nombre: ${Z.name}</p>
    <p>Tipo: ${Z.type}</p>
    <p>Altura: ${Z.height}</p>
    <p>Peso: ${Z.weight}</p>
    <p>Dulces: ${Z.candy}</p>
    <p>Conteo de Dulces: ${Z.candy_count}</p>
    <p>Huevo: ${Z.egg}</p>
    <p>Probabilidad de aparición: ${Z.spawn_chance}</p>
    <p>Promedio de generación: ${Z.avg_spawns}</p>
    <p>Tiempo de generación: ${Z.spawn_time}</p>
    <p>Multiplicadores: ${Z.multipliers}</p>
    <p>Debilidades: ${Z.weaknesses}</p>
    `
    div.appendChild(d)
  });
}

export const buscador = () =>{ 
  const search = document.querySelector('.src');
  let f = search.value;
  let g = f[0].toUpperCase() + f.slice(1);
   let d =list.filter(c=>c.name.includes(g))
   let dat = d.filter(c=>c.name.includes(g))
   let div = document.querySelector('#root')
   dat.map(c=>{
     let d = document.createElement('d')
     d.classList.add("card")
     d.innerHTML = `
     <h2>${c.name}</h2><br>
     <img src=${c.img} /><br>
     <p>Nombre: ${c.name}</p>
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
     div.appendChild(d)
   });
   console.log(g);
   }