
//comprobar que exite un valor en SessionStorage
if (!sessionStorage.getItem('usuario')) {
    location.href = 'index.html';
}

//Cerrar Sesión y eliminar SessionStorage

let salir = document.getElementById('salir')

salir.addEventListener('click', cerrar);

function cerrar() {
    sessionStorage.removeItem('usuario')
    location.href("./index.html")
}

//Recuperar y utilizar el valor del SessionStorage


let nombre = document.getElementById('nombre')
let usuario = sessionStorage.getItem('usuario')

nombre.innerHTML = `Bienvenido ${usuario}`



// CONSUMIR API POKEMON

const lista = document.getElementById('lista');

for (let i = 1; i <= 151; i++) {

    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
        .then(res => res.json())
        .then(data => llenaPokemon(data))
        .catch(e => console.error(new Error(e)));

}   

function llenaPokemon(poke) {

    let id = poke.id.toString();

    // console.log(poke.types)

    const div = document.createElement('div');
    div.classList.add('pokemon');

    let tipos = poke.types.map((tipo) => `<p class="${tipo.type.name} tipo">${tipo.type.name}</p>`);
    tipos = tipos.join('');

    let tipoEn = poke.types.map((tipo)=> tipo.type.name)


    let urlTr = `https://api.mymemory.translated.net/get?q=${tipoEn}&langpair=en-GB|es-ES`

    fetch(urlTr)
        .then(res =>res.json())
        .then(data => console.log(data))
       



    div.innerHTML =

        `
            <p class= 'pokemon-id-back'>#${id}</p>
            <div class='pokemon-imagen'>
                <img src='${poke.sprites.other['official-artwork'].front_default}'>
            </div>

            <div class='pokemon-info'>
                <div class='nombre-contenedor'>
                    <p class='pokemon-id'> #${id} </p>
                    <h2 class='pokemon-nombre'>${poke.name}</h2>
                </div>

                <div class='pokemon-tipos'> ${tipos} </div>

                <div class='pokemon-stats'>
                <p class'stat'>${poke.height} m</p>
                <p class'stat'>${poke.weight} kg</p>
                </div>

            </div>
        `
        lista.append(div);

}

//Traducir tipo Pokemon

